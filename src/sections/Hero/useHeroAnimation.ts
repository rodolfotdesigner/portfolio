import type { RefObject } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export function useHeroAnimation(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const motion = gsap.matchMedia(scope)

      motion.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.set('[data-hero-anim="name"]', { clipPath: 'inset(0 100% 0 0)' })
        gsap.set('[data-hero-anim="role"]', { y: 12, opacity: 0 })
        gsap.set('[data-hero-anim="contact"]', { y: 16, opacity: 0 })
        gsap.set('[data-hero-anim="title"]', { y: 24, opacity: 0 })
        gsap.set('[data-hero-anim="description"]', { y: 24, opacity: 0 })

        const timeline = gsap.timeline()

        timeline
          .fromTo(
            '[data-hero-anim="decorative-frame"]',
            { clipPath: 'inset(100% 0 0 0)' },
            { clipPath: 'inset(0% 0 0 0)', duration: 0.55, ease: 'power2.out' },
            0,
          )
          .fromTo(
            '[data-hero-anim="profile-frame"]',
            { clipPath: 'inset(0 0 0 100%)' },
            { clipPath: 'inset(0 0 0 0%)', duration: 0.55, ease: 'power2.out' },
            0.15,
          )
          .fromTo(
            '[data-hero-anim="circle"]',
            { scale: 0.92, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.75, ease: 'power2.out', transformOrigin: 'center center' },
            0.18,
          )
          .fromTo(
            '[data-hero-anim="pattern"]',
            { opacity: 0 },
            { opacity: 1, duration: 0.4, ease: 'power2.out' },
            0.35,
          )
          .fromTo(
            '[data-hero-anim="card"]',
            { clipPath: 'inset(0 100% 0 0)' },
            { clipPath: 'inset(0 0% 0 0)', duration: 0.6, ease: 'power2.out' },
            0.5,
          )
          .fromTo(
            '[data-hero-anim="portrait"]',
            { clipPath: 'inset(100% 0 0 0)', scale: 0.92 },
            {
              clipPath: 'inset(0% 0 0 0)',
              scale: 1,
              transformOrigin: 'bottom center',
              duration: 0.8,
              ease: 'power3.out',
            },
            0.65,
          )
          .fromTo(
            '[data-hero-anim="accent"]',
            { clipPath: 'inset(100% 0 0 0)' },
            { clipPath: 'inset(0% 0 0 0)', duration: 0.4, ease: 'power2.out' },
            1.35,
          )
          .to(
            '[data-hero-anim="name"]',
            { clipPath: 'inset(0 0% 0 0)', duration: 0.45, ease: 'power2.out' },
            1.55,
          )
          .to(
            '[data-hero-anim="role"]',
            { y: 0, opacity: 1, duration: 0.45, ease: 'power2.out' },
            1.75,
          )
          .to(
            '[data-hero-anim="contact"]',
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power2.out' },
            1.95,
          )
          .to(
            '[data-hero-anim="title"]',
            { y: 0, opacity: 1, duration: 0.75, ease: 'power2.out' },
            1.55,
          )
          .to(
            '[data-hero-anim="description"]',
            { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' },
            1.75,
          )
          .fromTo(
            '[data-hero-anim="horizontal-line"]',
            { clipPath: 'inset(0 100% 0 0)' },
            { clipPath: 'inset(0 0% 0 0)', duration: 0.55, ease: 'power2.out' },
            2.69,
          )
          .fromTo(
            '[data-hero-anim="vertical-line"]',
            { clipPath: 'inset(0 0 0 100%)' },
            { clipPath: 'inset(0 0 0 0%)', duration: 0.55, ease: 'power2.out' },
            2.85,
          )
      })

      return () => motion.revert()
    },
    { scope },
  )
}
