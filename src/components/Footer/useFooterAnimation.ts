import type { RefObject } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import i18n from '../../i18n'

export function useFooterAnimation(footerRef: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const footer = footerRef.current
      if (!footer) return

      const sideLines = footer.querySelectorAll<HTMLElement>('[data-footer-anim="side-line"]')
      const links = footer.querySelectorAll<HTMLAnchorElement>('[data-footer-anim="link"]')
      const copyrightLine = footer.querySelector<HTMLElement>(
        '[data-footer-anim="copyright-line"]',
      )
      const copyrightText = footer.querySelector<HTMLElement>(
        '[data-footer-anim="copyright-text"]',
      )
      if (sideLines.length !== 2 || links.length !== 3 || !copyrightLine || !copyrightText) {
        return
      }

      const motion = gsap.matchMedia(footerRef)

      motion.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(sideLines, { scaleY: 1, transformOrigin: 'top center' })
        gsap.set(links, { y: 0, opacity: 1 })
        gsap.set(copyrightLine, { scaleX: 1, transformOrigin: 'left center' })
        gsap.set(copyrightText, { y: 0, opacity: 1 })
      })

      motion.add('(prefers-reduced-motion: no-preference)', () => {
        const timeline = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: footer,
            start: () => {
              const maxScroll = ScrollTrigger.maxScroll(window)
              const naturalStart = footer.getBoundingClientRect().top + window.scrollY -
                window.innerHeight * 0.85
              // Keep a usable scroll interval when the footer is already visible.
              const travel = Math.min(maxScroll, Math.max(footer.offsetHeight / 2, 1))

              return Math.min(naturalStart, maxScroll - travel)
            },
            end: () => Math.max(1, ScrollTrigger.maxScroll(window)),
            scrub: 0.35,
            onRefresh: (trigger) => {
              trigger.animation?.progress(
                ScrollTrigger.maxScroll(window) === 0 ? 1 : trigger.progress,
              )
            },
          },
        })

        timeline
          .fromTo(
            sideLines,
            { scaleY: 0, transformOrigin: 'top center' },
            { scaleY: 1, duration: 1.2 },
            0,
          )
          .fromTo(
            links,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, stagger: 0.2 },
            0.2,
          )
          .fromTo(
            copyrightLine,
            { scaleX: 0, transformOrigin: 'left center' },
            { scaleX: 1, duration: 0.65 },
            0.9,
          )
          .fromTo(
            copyrightText,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6 },
            1.2,
          )

      })

      let firstFrame = 0
      let refreshFrame = 0
      const refreshAfterTranslation = () => {
        cancelAnimationFrame(firstFrame)
        cancelAnimationFrame(refreshFrame)
        firstFrame = requestAnimationFrame(() => {
          refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh())
        })
      }

      i18n.on('languageChanged', refreshAfterTranslation)
      firstFrame = requestAnimationFrame(() => ScrollTrigger.refresh())

      return () => {
        i18n.off('languageChanged', refreshAfterTranslation)
        cancelAnimationFrame(firstFrame)
        cancelAnimationFrame(refreshFrame)
        motion.revert()
      }
    },
    { scope: footerRef },
  )
}
