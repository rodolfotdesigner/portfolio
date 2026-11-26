import type { RefObject } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import i18n from '../../i18n'

export function useAboutAnimation(sectionRef: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const section = sectionRef.current
      if (!section) return

      const header = section.querySelector<HTMLElement>('[data-about-anim="header"]')
      const digital = section.querySelector<HTMLElement>('[data-about-anim="digital"]')
      const title = section.querySelector<HTMLElement>('[data-about-anim="title"]')
      if (!header || !digital || !title) return

      const motion = gsap.matchMedia(sectionRef)
      const topLine = section.querySelector<HTMLElement>('[data-about-line="top"]')
      const headerLine = section.querySelector<HTMLElement>('[data-about-line="header"]')
      const dividerLine = section.querySelector<HTMLElement>('[data-about-line="divider"]')
      const leftLine = section.querySelector<HTMLElement>('[data-about-line="left"]')
      const rightLine = section.querySelector<HTMLElement>('[data-about-line="right"]')

      const animateHorizontalLine = (line: HTMLElement) => {
        gsap.fromTo(
          line,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1,
            duration: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: line,
              start: 'top 85%',
              end: 'top 35%',
              scrub: 0.35,
            },
          },
        )
      }

      motion.add('(prefers-reduced-motion: no-preference)', () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: header,
              start: 'top 85%',
              end: 'top 35%',
              scrub: 0.35,
            },
          })
          .fromTo(digital, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'none' }, 0)
          .fromTo(
            title,
            { x: -60, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: 'none' },
            0,
          )
      })

      motion.add('(prefers-reduced-motion: no-preference)', () => {
        if (headerLine) animateHorizontalLine(headerLine)
        if (!leftLine || !rightLine) return

        gsap.fromTo(
          [leftLine, rightLine],
          { scaleY: 0, transformOrigin: 'center top' },
          {
            scaleY: 1,
            duration: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              end: 'bottom bottom',
              scrub: 0.35,
            },
          },
        )
      })

      motion.add('(min-width: 601px) and (prefers-reduced-motion: no-preference)', () => {
        if (dividerLine) animateHorizontalLine(dividerLine)
      })

      motion.add('(max-width: 600px) and (prefers-reduced-motion: no-preference)', () => {
        if (topLine) animateHorizontalLine(topLine)
      })

      motion.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(digital, { opacity: 1 })
        gsap.set(title, { x: 0, opacity: 1 })
        gsap.set([topLine, headerLine, dividerLine].filter(Boolean), { scaleX: 1 })
        gsap.set([leftLine, rightLine].filter(Boolean), { scaleY: 1 })
      })

      const composition = section.querySelector<HTMLElement>(
        '[data-about-anim="portrait-composition"]',
      )
      if (!composition) return () => motion.revert()

      const backgroundPanel = composition.querySelector<HTMLElement>(
        '[data-about-anim="portrait-background-panel"]',
      )
      const pattern = composition.querySelector<HTMLElement>('[data-about-anim="portrait-pattern"]')
      const semicircle = composition.querySelector<HTMLElement>(
        '[data-about-anim="portrait-semicircle"]',
      )
      const horizontalLine = composition.querySelector<HTMLElement>(
        '[data-about-anim="portrait-horizontal-line"]',
      )
      const verticalLine = composition.querySelector<HTMLElement>(
        '[data-about-anim="portrait-vertical-line"]',
      )
      const rightBar = composition.querySelector<HTMLElement>('[data-about-anim="portrait-right-bar"]')
      const portrait = composition.querySelector<HTMLImageElement>('[data-about-anim="portrait-photo"]')
      const leftOverlay = composition.querySelector<HTMLElement>(
        '[data-about-anim="portrait-left-overlay"]',
      )
      const lowerOverlay = composition.querySelector<HTMLElement>(
        '[data-about-anim="portrait-lower-overlay"]',
      )
      const circle = composition.querySelector<HTMLElement>('[data-about-anim="portrait-circle"]')
      if (
        !backgroundPanel || !pattern || !semicircle || !horizontalLine || !verticalLine ||
        !rightBar || !portrait || !leftOverlay || !lowerOverlay || !circle
      ) return () => motion.revert()

      motion.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.set(backgroundPanel, { scaleY: 0, transformOrigin: 'bottom center' })
        gsap.set(pattern, { opacity: 0 })
        gsap.set(semicircle, { scale: 0, transformOrigin: 'bottom right' })
        gsap.set(horizontalLine, { scaleX: 0, transformOrigin: 'left center' })
        gsap.set(verticalLine, { scaleY: 0, transformOrigin: 'center top' })
        gsap.set(rightBar, { scaleY: 0, transformOrigin: 'bottom center' })
        gsap.set(portrait, { clipPath: 'inset(100% 0 0 0)' })
        gsap.set(leftOverlay, { scaleY: 0, transformOrigin: 'top center' })
        gsap.set(lowerOverlay, { scaleX: 0, transformOrigin: 'left center' })
        gsap.set(circle, { scale: 0, transformOrigin: 'center center' })

        gsap
          .timeline({
            defaults: { ease: 'none' },
            scrollTrigger: {
              trigger: composition,
              start: 'top 85%',
              end: 'center 35%',
              scrub: 0.35,
              onRefresh: (trigger) => trigger.animation?.progress(trigger.progress),
            },
          })
          .to(backgroundPanel, { scaleY: 1, duration: 0.3 }, 0)
          .to(pattern, { opacity: 1, duration: 0.2 }, 0.15)
          .to(semicircle, { scale: 1, duration: 0.2 }, 0.2)
          .to(horizontalLine, { scaleX: 1, duration: 0.25 }, 0.25)
          .to(verticalLine, { scaleY: 1, duration: 0.25 }, 0.25)
          .to(rightBar, { scaleY: 1, duration: 0.2 }, 0.35)
          .to(portrait, { clipPath: 'inset(0% 0 0 0)', duration: 0.35 }, 0.4)
          .to(leftOverlay, { scaleY: 1, duration: 0.2 }, 0.65)
          .to(lowerOverlay, { scaleX: 1, duration: 0.2 }, 0.75)
          .to(circle, { scale: 1, duration: 0.15 }, 0.85)
      })

      motion.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set([backgroundPanel, rightBar, leftOverlay, verticalLine], { scaleY: 1 })
        gsap.set([horizontalLine, lowerOverlay], { scaleX: 1 })
        gsap.set([semicircle, circle], { scale: 1 })
        gsap.set(pattern, { opacity: 1 })
        gsap.set(portrait, { clipPath: 'inset(0% 0 0 0)' })
      })

      const biography = section.querySelector<HTMLElement>('[data-about-anim="biography"]')
      const paragraphs = biography?.querySelectorAll<HTMLElement>(
        '[data-about-anim="biography-paragraph"]',
      )
      if (biography && paragraphs?.length === 3) {
        motion.add('(prefers-reduced-motion: no-preference)', () => {
          gsap.set(paragraphs, { y: 30, opacity: 0 })

          gsap.timeline({
            scrollTrigger: {
              trigger: biography,
              start: 'top 85%',
              end: 'center 35%',
              scrub: 0.35,
              onRefresh: (trigger) => trigger.animation?.progress(trigger.progress),
            },
          }).to(paragraphs, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.2,
            ease: 'none',
          })
        })

        motion.add('(prefers-reduced-motion: reduce)', () => {
          gsap.set(paragraphs, { y: 0, opacity: 1 })
        })
      }

      const education = section.querySelector<HTMLElement>('[data-about-anim="education"]')
      const educationTitle = education?.querySelector<HTMLElement>(
        '[data-about-anim="education-title"]',
      )
      const educationDegree = education?.querySelector<HTMLElement>(
        '[data-about-anim="education-degree"]',
      )
      const educationDownload = education?.querySelector<HTMLElement>(
        '[data-about-anim="education-download"]',
      )

      if (education && educationTitle && educationDegree && educationDownload) {
        motion.add('(prefers-reduced-motion: no-preference)', () => {
          gsap.set(educationTitle, { y: 30, opacity: 0 })
          gsap.set([educationDegree, educationDownload], { y: 20, opacity: 0 })

          gsap
            .timeline({
              defaults: { ease: 'none' },
              scrollTrigger: {
                trigger: education,
                start: 'top 85%',
                end: () => Math.min(
                  education.getBoundingClientRect().top + window.scrollY +
                    education.offsetHeight / 2 - window.innerHeight * 0.35,
                  ScrollTrigger.maxScroll(window),
                  document.documentElement.offsetHeight - window.innerHeight,
                ),
                scrub: 0.35,
                onRefresh: (trigger) => trigger.animation?.progress(trigger.progress),
              },
            })
            .to(educationTitle, { y: 0, opacity: 1, duration: 0.6 }, 0)
            .to([educationDegree, educationDownload], { y: 0, opacity: 1, duration: 0.7 }, 0.3)
        })

        motion.add('(prefers-reduced-motion: reduce)', () => {
          gsap.set([educationTitle, educationDegree, educationDownload], {
            y: 0,
            opacity: 1,
          })
        })
      }

      const experienceTitle = section.querySelector<HTMLElement>(
        '[data-about-anim="experience-title"]',
      )
      const experienceKenlo = section.querySelector<HTMLElement>(
        '[data-about-anim="experience-kenlo"]',
      )
      const experienceMercadocar = section.querySelector<HTMLElement>(
        '[data-about-anim="experience-mercadocar"]',
      )

      if (experienceTitle && experienceKenlo && experienceMercadocar) {
        motion.add('(prefers-reduced-motion: no-preference)', () => {
          gsap.fromTo(
            experienceTitle,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: experienceTitle,
                start: 'top 85%',
                end: 'top 35%',
                scrub: 0.35,
                onRefresh: (trigger) => trigger.animation?.progress(trigger.progress),
              },
            },
          )

          for (const experience of [experienceKenlo, experienceMercadocar]) {
            gsap.fromTo(
              experience,
              { y: 20, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'none',
                scrollTrigger: {
                  trigger: experience,
                  start: 'top 85%',
                  end: () => Math.min(
                    experience.getBoundingClientRect().top + window.scrollY -
                      window.innerHeight * 0.45,
                    ScrollTrigger.maxScroll(window),
                  ),
                  scrub: 0.35,
                  onRefresh: (trigger) => trigger.animation?.progress(trigger.progress),
                },
              },
            )
          }
        })

        motion.add('(prefers-reduced-motion: reduce)', () => {
          gsap.set([experienceTitle, experienceKenlo, experienceMercadocar], {
            y: 0,
            opacity: 1,
          })
        })
      }

      const toolsTitle = section.querySelector<HTMLElement>('[data-about-anim="tools-title"]')
      const toolsGrid = section.querySelector<HTMLElement>('[data-about-anim="tools-grid"]')
      const toolItems = toolsGrid?.querySelectorAll<HTMLElement>('[data-about-anim="tool-item"]')

      if (toolsTitle && toolsGrid && toolItems?.length === 15) {
        motion.add('(prefers-reduced-motion: no-preference)', () => {
          gsap.fromTo(
            toolsTitle,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: 'none',
              scrollTrigger: {
                trigger: toolsTitle,
                start: 'top 85%',
                end: () => Math.min(
                  toolsTitle.getBoundingClientRect().top + window.scrollY -
                    window.innerHeight * 0.35,
                  ScrollTrigger.maxScroll(window),
                  document.documentElement.offsetHeight - window.innerHeight,
                ),
                scrub: 0.35,
                onRefresh: (trigger) => trigger.animation?.progress(trigger.progress),
              },
            },
          )

          gsap.set(toolItems, { y: 20, opacity: 0 })
          gsap.timeline({
            scrollTrigger: {
              trigger: toolsGrid,
              start: 'top 85%',
              end: () => Math.min(
                toolsGrid.getBoundingClientRect().top + window.scrollY +
                  toolsGrid.offsetHeight / 2 - window.innerHeight * 0.35,
                ScrollTrigger.maxScroll(window),
                  document.documentElement.offsetHeight - window.innerHeight,
              ),
              scrub: 0.35,
              onRefresh: (trigger) => trigger.animation?.progress(trigger.progress),
            },
          }).to(toolItems, {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: 'none',
            stagger: (index) => {
              const row = Math.floor(index / 4)
              const column = index % 4

              return (row + column) * 0.12
            },
          })
        })

        motion.add('(prefers-reduced-motion: reduce)', () => {
          gsap.set([toolsTitle, ...toolItems], { y: 0, opacity: 1 })
        })
      }

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

      return () => {
        i18n.off('languageChanged', refreshAfterTranslation)
        cancelAnimationFrame(firstFrame)
        cancelAnimationFrame(refreshFrame)
        motion.revert()
      }
    },
    { scope: sectionRef },
  )
}
