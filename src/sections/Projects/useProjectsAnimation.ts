import type { RefObject } from 'react'
import { useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function useProjectsAnimation(
  heroIntroComplete: boolean,
  sectionRef: RefObject<HTMLElement | null>,
  videoRef: RefObject<HTMLVideoElement | null>,
  titleRef: RefObject<HTMLHeadingElement | null>,
) {
  const heroReadyRef = useRef(heroIntroComplete)
  const hasRevealedRef = useRef(false)
  const startRef = useRef<(() => void) | null>(null)
  const startLinesRef = useRef<(() => void) | null>(null)
  const startCardsRef = useRef<(() => void) | null>(null)

  useGSAP(
    () => {
      const video = videoRef.current
      const title = titleRef.current
      const section = sectionRef.current
      if (!video || !title || !section) return

      const motion = gsap.matchMedia(sectionRef)

      motion.add('(prefers-reduced-motion: reduce)', () => {
        hasRevealedRef.current = true
        video.pause()
      })

      motion.add('(prefers-reduced-motion: no-preference)', () => {
        let active = true
        let frameId: number | null = null
        let timeline: gsap.core.Timeline | null = null

        const playVideo = (restart = false) => {
          try {
            if (restart) video.currentTime = 0
            void video.play().catch((error: unknown) => {
              if (active) console.error('Could not play the Projects eye video.', error)
            })
          } catch (error) {
            if (active) console.error('Could not play the Projects eye video.', error)
          }
        }

        if (!hasRevealedRef.current) {
          gsap.set(video, { opacity: 0 })
          gsap.set(title, { clearProps: 'clipPath', x: -60, opacity: 0 })

          timeline = gsap.timeline({
            paused: true,
            onStart: () => playVideo(true),
          })

          timeline
            .to(video, { opacity: 1, duration: 0.6, ease: 'power2.out' }, 0)
            .to(title, { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, 0)
        }

        const start = () => {
          if (!heroReadyRef.current || frameId !== null) return

          frameId = requestAnimationFrame(() => {
            frameId = null
            if (!active || !heroReadyRef.current) return

            if (hasRevealedRef.current) {
              playVideo()
              return
            }

            hasRevealedRef.current = true
            timeline?.play(0)
          })
        }

        startRef.current = start
        start()

        return () => {
          active = false
          if (frameId !== null) cancelAnimationFrame(frameId)
          startRef.current = null
          video.pause()
          timeline?.kill()
        }
      })

      motion.add('(prefers-reduced-motion: no-preference)', () => {
        const top = section.querySelector<HTMLElement>('[data-projects-line="top"]')
        const header = section.querySelector<HTMLElement>('[data-projects-line="header"]')
        const bottom = section.querySelector<HTMLElement>('[data-projects-line="bottom"]')
        const left = section.querySelector<HTMLElement>('[data-projects-line="left"]')
        const right = section.querySelector<HTMLElement>('[data-projects-line="right"]')
        if (!top || !header || !bottom || !left || !right) return

        gsap.set([top, header, bottom], { scaleX: 0 })
        gsap.set([left, right], { scaleY: 0 })

        const scrub = 0.35
        const animations = [
          gsap.to(top, {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'top center',
              scrub,
            },
          }),
          gsap.to(header, {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: header,
              start: 'top bottom',
              end: 'top center',
              scrub,
            },
          }),
          gsap.to(bottom, {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'bottom bottom',
              end: 'bottom center',
              scrub,
            },
          }),
          gsap.to([left, right], {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom bottom',
              scrub,
            },
          }),
        ]

        animations.forEach((animation) => {
          animation.scrollTrigger?.disable(false)
          animation.progress(0)
        })

        let linesStarted = false
        const startLines = () => {
          if (!heroReadyRef.current || linesStarted) return

          linesStarted = true
          animations.forEach((animation) => animation.scrollTrigger?.enable())
          ScrollTrigger.refresh()
        }

        startLinesRef.current = startLines
        startLines()

        return () => {
          startLinesRef.current = null
        }
      })

      const prepareCards = (columns: number) => {
        const cards = Array.from(section.querySelectorAll<HTMLElement>('[data-projects-card]'))
        const animations: gsap.core.Timeline[] = []

        for (let index = 0; index < cards.length; index += columns) {
          const group = cards.slice(index, index + columns)
          if (group.length === 0) continue

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: group[0],
              start: 'top 85%',
              end: 'top 35%',
              scrub: 0.35,
            },
          })
          group.forEach((card, position) => {
            timeline.fromTo(
              card,
              { y: 40, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.8, ease: 'none' },
              columns === 2 ? position * 0.12 : 0,
            )
          })

          timeline.scrollTrigger?.disable(false)
          timeline.progress(0)
          animations.push(timeline)
        }

        let cardsStarted = false
        const startCards = () => {
          if (!heroReadyRef.current || cardsStarted) return

          cardsStarted = true
          animations.forEach((animation) => animation.scrollTrigger?.enable())
          ScrollTrigger.refresh()
        }

        startCardsRef.current = startCards
        startCards()

        return () => {
          startCardsRef.current = null
        }
      }

      motion.add(
        '(min-width: 901px) and (prefers-reduced-motion: no-preference)',
        () => prepareCards(2),
      )
      motion.add(
        '(max-width: 900px) and (prefers-reduced-motion: no-preference)',
        () => prepareCards(1),
      )

      return () => motion.revert()
    },
    { scope: sectionRef },
  )

  useEffect(() => {
    heroReadyRef.current = heroIntroComplete
    if (heroIntroComplete) {
      startRef.current?.()
      startLinesRef.current?.()
      startCardsRef.current?.()
    }
  }, [heroIntroComplete])
}
