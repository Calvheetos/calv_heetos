"use client"

import { useState, useEffect } from "react"
import { Carousel, CarouselContent, CarouselItem } from "./carousel"

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

  // Set up autoplay
  useEffect(() => {
    if (!api) return

    const autoplayInterval = setInterval(() => {
      api.scrollNext()
    }, interval)

    return () => clearInterval(autoplayInterval)
  }, [api, interval])

  return (
    <Carousel className={`w-full mb-4 ${className}`} opts={{ loop: true, align: "start" }} setApi={setApi}>
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <img
              src={src || "/placeholder.svg"}
              alt={`${altPrefix} ${index + 1}`}
              className={`w-full ${height} object-cover rounded-lg shadow-md`}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

