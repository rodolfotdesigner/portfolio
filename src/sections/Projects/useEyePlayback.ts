import type { RefObject } from 'react'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function useEyePlayback(
  sectionRef: RefObject<HTMLElement | null>,
  videoRef: RefObject<HTMLVideoElement | null>,
) {
  const hasAttemptedPlayback = useRef(false)

  useGSAP(
    () => {
      const motion = gsap.matchMedia(sectionRef)

      motion.add('(prefers-reduced-motion: no-preference)', () => {
        const startPlayback = () => {
          if (hasAttemptedPlayback.current) return

          const video = videoRef.current
          if (!video) return

          hasAttemptedPlayback.current = true

          try {
            video.currentTime = 0
            void video.play().catch((error: unknown) => {
              console.error('Could not play the Projects eye video.', error)
            })
          } catch (error) {
            console.error('Could not play the Projects eye video.', error)
          }
        }

        const trigger = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          onEnter: startPlayback,
          onEnterBack: startPlayback,
        })

        return () => trigger.kill()
      })

      return () => motion.revert()
    },
    { scope: sectionRef },
  )
}
