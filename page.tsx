import SingleSpeakerVCard from './single-speaker-vcard'

export default function SpeakerPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-12">E-Summit '25 Featured Speaker</h1>
        <SingleSpeakerVCard
          name="Jane Doe"
          title="CEO"
          company="Tech Innovators Inc."
          description="Join Jane Doe, the visionary CEO of Tech Innovators Inc., as she shares her extraordinary journey from a daring startup founder to leading a Fortune 500 company. In this captivating session, Jane will unveil the challenges she faced, the pivotal decisions that shaped her career, and the innovative strategies that propelled her company to the forefront of the tech industry. Discover how she navigated through uncertain times, fostered a culture of innovation, and consistently stayed ahead in a rapidly evolving market. This talk is not just about success; it's about resilience, foresight, and the power of transformative leadership in the digital age. Whether you're an aspiring entrepreneur, a seasoned business leader, or simply curious about the future of technology and business, Jane's insights will provide you with actionable takeaways and inspiration to pursue your own path to eminence."
          audioSrc="/placeholder.mp3"
          imageSrc="/placeholder.svg?height=400&width=800"
          date="February 1, 2025"
          time="10:00 AM - 11:30 AM"
          venue="Main Auditorium, IIT Bombay"
        />
      </div>
    </div>
  )
}

