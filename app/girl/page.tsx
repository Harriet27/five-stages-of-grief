import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function GirlPage() {
  return (
    <div className="min-h-screen bg-emerald-700/20">
      {/* Header */}
      <header className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-bold text-emerald-800">
            <Image
              src="/placeholder.svg?height=50&width=50"
              alt="Logo"
              width={50}
              height={50}
              className="filter brightness-0 invert opacity-80"
            />
          </Link>
        </div>

        <div className="flex gap-2">
          <div className="flex space-x-2">
            <Link href="/">
              <button className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white hover:bg-emerald-700 transition-colors">
                <ArrowLeft size={20} />
              </button>
            </Link>
            <button className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white hover:bg-emerald-700 transition-colors">
              EN
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 mt-4">
        <div className="bg-amber-50 rounded-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Side - Character */}
            <div className="w-full md:w-1/2 relative min-h-[500px] flex items-center justify-center overflow-hidden">
              <div className="absolute w-80 h-80 rounded-full bg-amber-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-0"></div>
              <div className="relative w-[400px] h-[500px] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=1000&width=800"
                  alt="Girl Character"
                  width={800}
                  height={1000}
                  className="absolute top-0 left-0 w-full h-auto scale-150 origin-top"
                />
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-emerald-600/80 text-white py-3 px-2 rounded-lg flex flex-col items-center">
                <span className="writing-vertical-lr text-lg">女</span>
                <span className="writing-vertical-lr mt-2 text-lg">生</span>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="w-full md:w-1/2 p-8">
              <h1 className="text-6xl font-bold text-emerald-700 mb-6">GIRL</h1>
              <p className="text-gray-600 mb-8">
                In Chinese Traditional Medicine, women are celebrated as bearers of nurturing Yin energy, representing
                the essence of creation, intuition, and the cyclical nature of life's journey.
              </p>

              <h2 className="text-xl font-medium text-gray-700 mb-4">Some common issues:</h2>

              <div className="flex flex-wrap gap-4">
                {["Menstrual Pain", "Fatigue", "Skin Concerns"].map((issue, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mb-2">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt={issue}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    </div>
                    <span className="text-sm text-gray-600">{issue}</span>
                  </div>
                ))}

                <div className="flex flex-col items-center">
                  <Link
                    href="/girl/issues"
                    className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mb-2 text-white hover:bg-emerald-700 transition-colors"
                  >
                    more...
                  </Link>
                  <span className="text-sm text-transparent">More</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

