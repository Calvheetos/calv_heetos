"use client"

import { useState, useEffect, useCallback } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./carousel"

interface ImageCarouselProps {
  images: string[]
  altPrefix: string
  interval?: number
  height?: number | string
  className?: string
}

export default function ImageCarousel({
  images,
  altPrefix,
  interval = 5000,
  height,
  className = "",
}: ImageCarouselProps) {
  const [api, setApi] = useState<any>(null)
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [carouselHeight, setCarouselHeight] = useState<number | undefined>()

  const updateCarouselHeight = useCallback((index: number) => {
    if (!api || height) return

    const activeImage = api.slideNodes()[index]?.querySelector("img")
    if (activeImage) {
      setCarouselHeight(activeImage.getBoundingClientRect().height)
    }
  }, [api, height])

  // Handle manual navigation
  const handleSelect = (index: number) => {
    if (!api) return
    api.scrollTo(index)
    setCurrent(index)
  }

  // Update current index when carousel changes
  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      const selectedIndex = api.selectedScrollSnap()
      setCurrent(selectedIndex)
      requestAnimationFrame(() => updateCarouselHeight(selectedIndex))
    }

    onSelect()
    api.on("select", onSelect)
    window.addEventListener("resize", onSelect)
    return () => {
      api.off("select", onSelect)
      window.removeEventListener("resize", onSelect)
    }
  }, [api, height, updateCarouselHeight])

  useEffect(() => {
    if (!api) return

    setCurrent(0)
    api.scrollTo(0, true)
    requestAnimationFrame(() => updateCarouselHeight(0))
  }, [api, images, updateCarouselHeight])

  // Set up autoplay
  useEffect(() => {
    if (!api || !autoplay) return

    const autoplayInterval = setInterval(() => {
      api.scrollNext()
    }, interval)

    return () => clearInterval(autoplayInterval)
  }, [api, interval, autoplay])

  return (
    <div className="space-y-1">
      <Carousel
        className={`w-full overflow-hidden transition-[height] duration-300 ease-out ${className}`}
        opts={{ loop: true, align: "start" }}
        setApi={setApi}
        style={{ height: height ?? carouselHeight }}
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <img
                src={`/calv_heetos/${src}`}
                alt={`${altPrefix} ${index + 1}`}
                className="block object-cover transition-transform"
                onLoad={() => {
                  if (index === current) updateCarouselHeight(index)
                }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious className="left-2" /> */}
        {/* <CarouselNext className="right-2" /> */}
      </Carousel>

      {/* Thumbnail navigation */}
      <div className="overflow-x-auto">
        <div className="flex justify-start w-max min-w-full gap-2 px-1 md:justify-center">
          {images.map((src, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              className={`relative flex h-16 flex-shrink-0 items-center justify-center overflow-hidden border-2 rounded transition-all ${
                current === index ? "border-primary" : "border-transparent"
              }`}
            >
              <img
                src={`/calv_heetos/${src}` || "/product.png"}
                alt={`${altPrefix} thumbnail ${index + 1}`}
                className="block w-auto h-full object-contain"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            className={`w-2 h-2 rounded-full transition-all ${current === index ? "bg-primary w-4" : "bg-gray-300"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
