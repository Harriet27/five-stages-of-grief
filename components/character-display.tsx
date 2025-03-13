import Image from "next/image"
import type { CharacterData } from "@/types/character"

interface CharacterDisplayProps {
  character: string
  data: CharacterData
  isSelected: boolean
  onSelect: () => void
}

export default function CharacterDisplay({ character, data, isSelected, onSelect }: CharacterDisplayProps) {
  return (
    <div
      // className={`w-full md:w-1/2 ${data.backgroundClass} py-8 relative min-h-[500px] flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
      //   isSelected ? "md:w-full" : ""
      // }`}
      style={{ backgroundColor: data.backgroundClass }}
      className={`w-full md:w-1/2 py-8 relative min-h-[500px] flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
        isSelected ? "md:w-full" : ""
      }`}
    >
      <div
        className={`cursor-pointer transition-all duration-500 ease-in-out z-20 w-full h-full flex items-center justify-center ${
          isSelected ? "scale-110" : "hover:scale-105"
        }`}
        onClick={onSelect}
      >
        <div className="relative w-full aspect-[3/4] max-w-[80%] overflow-hidden">
          <Image
            src={data.image || "/placeholder.svg"}
            alt={`${character.charAt(0).toUpperCase() + character.slice(1)} Character`}
            fill
            style={{ objectFit: "contain" }}
            className={`transition-all duration-500 ease-in-out ${isSelected ? "scale-120" : ""}`}
          />
        </div>
      </div>

      {isSelected && (
        <div className="mt-8 px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-emerald-700 mb-4">
            {data.name}
          </h1>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto">
            {data.description}
          </p>
          <h2 className="text-lg md:text-xl font-medium text-gray-700 mb-4">
            Some common issues:
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {data.issues.map((issue, index) => (
              <div key={index} className="flex flex-col items-center min-w-[5.5rem]">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-emerald-600 rounded-full flex items-center justify-center mb-2">
                  <Image
                    src={issue.icon || "/placeholder.svg"}
                    alt={issue.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </div>
                <span className="text-xs md:text-sm text-gray-600">
                  {issue.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
