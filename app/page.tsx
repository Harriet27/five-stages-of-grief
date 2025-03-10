"use client"

import { useState } from "react"
import Image from "next/image"
import { Users, Home, ShoppingBag, Phone } from "lucide-react"
import CharacterDisplay from "@/components/character-display"
import characterData from "@/data/characters.json"

export default function HomePage() {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-emerald-700/20">
      {/* Header */}
      <header className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={() => setSelectedCharacter(null)} className="text-3xl font-bold text-emerald-800">
            <Image
              src="/placeholder.svg?height=50&width=50"
              alt="Logo"
              width={50}
              height={50}
              className="filter brightness-0 invert opacity-80"
            />
          </button>
        </div>

        <div className="flex gap-2">
          <div className="flex space-x-2">
            {[Users, Home, ShoppingBag, Phone].map((Icon, index) => (
              <button
                key={index}
                className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white hover:bg-emerald-700 transition-colors"
              >
                <Icon size={20} />
              </button>
            ))}
            <div className="relative">
              <button className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white hover:bg-emerald-700 transition-colors">
                <ShoppingBag size={20} />
              </button>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                1
              </span>
            </div>
            <button className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white hover:bg-emerald-700 transition-colors">
              EN
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main
        // className="container mx-auto px-4 mt-4"
        className="container mx-auto px-4 pb-8 mt-4"
      >
        <div className="flex flex-col md:flex-row rounded-xl overflow-x-scroll">
          <CharacterDisplay
            character="boy"
            data={characterData.boy}
            isSelected={selectedCharacter === "boy"}
            onSelect={() => setSelectedCharacter(selectedCharacter === "boy" ? null : "boy")}
          />
          <CharacterDisplay
            character="girl"
            data={characterData.girl}
            isSelected={selectedCharacter === "girl"}
            onSelect={() => setSelectedCharacter(selectedCharacter === "girl" ? null : "girl")}
          />
          <CharacterDisplay
            character="boy"
            data={characterData.boy}
            isSelected={selectedCharacter === "boy"}
            onSelect={() => setSelectedCharacter(selectedCharacter === "boy" ? null : "boy")}
          />
          <CharacterDisplay
            character="girl"
            data={characterData.girl}
            isSelected={selectedCharacter === "girl"}
            onSelect={() => setSelectedCharacter(selectedCharacter === "girl" ? null : "girl")}
          />
          <CharacterDisplay
            character="girl"
            data={characterData.girl}
            isSelected={selectedCharacter === "girl"}
            onSelect={() => setSelectedCharacter(selectedCharacter === "girl" ? null : "girl")}
          />
        </div>

        {/* BOYGIRL Text Overlay */}
        {/* {!selectedCharacter && (
          <div className="relative">
            <h1 className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[280px] text-8xl font-bold text-amber-100 tracking-widest opacity-90 whitespace-nowrap">
              BOYGIRL
            </h1>
          </div>
        )} */}
      </main>
    </div>
  )
}
