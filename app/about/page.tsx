import VideoPlayer from "@/components/video-player"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-emerald-700/20 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-emerald-800">About Our Characters</h1>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Website Walkthrough</h2>
            <p className="text-gray-600 mb-6">
              Explore our traditional Asian-inspired characters and learn about the cultural elements that influenced
              their design. This video provides a complete walkthrough of our website and the story behind our Boy and
              Girl characters.
            </p>

            <VideoPlayer src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />

            <div className="mt-8">
              <h3 className="text-xl font-medium mb-2">Cultural Inspiration</h3>
              <p className="text-gray-600">
                Our characters draw inspiration from traditional Asian clothing and aesthetics, blending modern 3D
                design with cultural elements to create a unique visual experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

