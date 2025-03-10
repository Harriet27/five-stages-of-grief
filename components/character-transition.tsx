"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

interface CharacterTransitionProps {
  character: "boy" | "girl"
  imageSrc: string
}

export default function CharacterTransition({ character, imageSrc }: CharacterTransitionProps) {
  const [isZoomed, setIsZoomed] = useState(false)
  const router = useRouter()

  const handleClick = () => {
    setIsZoomed(true)

    // Navigate after zoom animation completes
    setTimeout(() => {
      router.push(`/${character}`)
    }, 500)
  }

  return (
    <div
      className={`cursor-pointer transition-all duration-500 ease-in-out z-20 ${
        isZoomed ? "scale-150 opacity-70" : "scale-100 hover:scale-105"
      }`}
      onClick={handleClick}
    >
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={`${character.charAt(0).toUpperCase() + character.slice(1)} Character`}
        width={300}
        height={400}
        className="z-10 mb-8"
      />
    </div>
  )
}

