"use client"

import { useState, useEffect } from "react"
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
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  // Set up autoplay
  useEffect(() => {
    if (!api || !autoplay) return

    const autoplayInterval = setInterval(() => {
      api.scrollNext()
    }, interval)

    return () => clearInterval(autoplayInterval)
  }, [api, interval, autoplay])

  return (
    <div className="space-y-4">
      <Carousel className={`w-full ${className}`} opts={{ loop: true, align: "start" }} setApi={setApi}>
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <img
                src={`/calv_heetos/${src}`}
                alt={`${altPrefix} ${index + 1}`}
                className="object-contain transition-transform rounded-lg aspect-square"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious className="left-2" /> */}
        {/* <CarouselNext className="right-2" /> */}
      </Carousel>

      {/* Thumbnail navigation */}
      <div className="flex justify-center gap-2 py-2 overflow-x-auto">
        {images.map((src, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            className={`relative flex-shrink-0 border-2 rounded overflow-hidden transition-all ${
              current === index ? "border-primary" : "border-transparent"
            }`}
          >
            <img
              src={`/calv_heetos/${src}` || "/product.png"}
              alt={`${altPrefix} thumbnail ${index + 1}`}
              className="object-cover w-16 h-16"
            />
          </button>
        ))}
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