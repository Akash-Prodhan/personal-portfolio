'use client'

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export default function LenisProvider() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t: number) => t,
      lerp: 0.06,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.2,
      gestureOrientation: 'vertical',
    })

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      if (target.tagName === 'A') {
        const anchor = target.getAttribute('href')

        if (anchor && anchor.startsWith('#')) {
          const el = document.querySelector(anchor)
          if (el instanceof HTMLElement) {
            e.preventDefault()
            lenis.scrollTo(el, {
              duration: 0.5,
              easing: (t) => t,
            })
          }
        }
      }
    }


    document.addEventListener('click', handleAnchorClick)

    let animationFrameId: number
    const raf = (time: DOMHighResTimeStamp) => {
      lenis.raf(time)
      animationFrameId = requestAnimationFrame(raf)
    }
    animationFrameId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(animationFrameId)
      document.removeEventListener('click', handleAnchorClick)
      lenis.destroy()
    }
  }, [])

  return null
}
