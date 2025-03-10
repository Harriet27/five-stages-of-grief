import Image from "next/image"
import Link from "next/link"

interface CharacterData {
  name: string
  description: string
  image: string
  backgroundClass: string
  textClass: string
  character: string
  chineseCharacters: {
    top: string
    bottom: string
  }
  issues: {
    name: string
    icon: string
  }[]
}

interface CharacterDisplayProps {
  character: string
  data: CharacterData
  isSelected: boolean
  onSelect: () => void
}

/*
{
  "boy": {
    "name": "BOY",
    "description": "In the tapestry of Chinese Traditional Medicine, men are revered as carriers of resilient Yang energy, embodying strength and vitality in harmony with the natural rhythms of life.",
    "issues": ["Headache", "Insomnia", "Common Cold"],
    "chineseCharacters": {
      "top": "男",
      "bottom": "生"
    },
    "backgroundColor": "bg-emerald-100",
    "circleColor": "bg-emerald-200"
  },
  "girl": {
    "name": "GIRL",
    "description": "In Chinese Traditional Medicine, women are celebrated as bearers of nurturing Yin energy, representing the essence of creation, intuition, and the cyclical nature of life's journey.",
    "issues": ["Menstrual Pain", "Fatigue", "Skin Concerns"],
    "chineseCharacters": {
      "top": "女",
      "bottom": "生"
    },
    "backgroundColor": "bg-amber-50",
    "circleColor": "bg-amber-100"
  }
}
*/

export default function CharacterDisplay({ character, data, isSelected, onSelect }: CharacterDisplayProps) {
  return (
    <div
      // className={`w-full md:w-1/2 ${data.backgroundColor} p-8 relative min-h-[500px] flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${isSelected ? "md:w-full" : ""}`}
      className={`w-full md:w-1/2 ${data.backgroundClass} p-8 relative min-h-[500px] flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${isSelected ? "md:w-full" : ""}`}
    >
      {/* <div
        className={`absolute ${isSelected ? "left-4 md:left-auto md:right-4" : character === "boy" ? "left-4" : "right-4"} top-1/2 -translate-y-1/2 bg-emerald-600/80 text-white py-3 px-2 rounded-lg flex flex-col items-center`}
      >
        <span className="writing-vertical-lr text-lg">{data.chineseCharacters.top}</span>
        <span className="writing-vertical-lr mt-2 text-lg">{data.chineseCharacters.bottom}</span>
      </div> */}

      <div
        className={`cursor-pointer transition-all duration-500 ease-in-out z-20 ${
          isSelected ? "scale-150 opacity-70" : "scale-100 hover:scale-105"
        }`}
        onClick={onSelect}
      >
        <div className="relative w-[300px] h-[400px] overflow-hidden">
          <Image
            src={data.image}
            alt={`${character.charAt(0).toUpperCase() + character.slice(1)} Character`}
            width={600}
            height={800}
            className={`absolute top-0 left-0 w-full h-auto ${isSelected ? "scale-150 origin-top" : ""}`}
          />
        </div>
      </div>

      {isSelected && (
        <div className="mt-24 text-center">
          <h1 className="text-6xl font-bold text-emerald-700 mb-6">{data.name}</h1>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">{data.description}</p>

          <h2 className="text-xl font-medium text-gray-700 mb-4">Some common issues:</h2>

          <div className="flex flex-wrap justify-center gap-4">
            {data.issues.map((issue, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mb-2">
                  <Image
                    src={issue.icon}
                    alt={issue.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                <span className="text-sm text-gray-600">{issue.name}</span>
              </div>
            ))}

            <div className="flex flex-col items-center">
              <Link
                href={`/${character}/issues`}
                className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mb-2 text-white hover:bg-emerald-700 transition-colors"
              >
                more...
              </Link>
              <span className="text-sm text-transparent">More</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
