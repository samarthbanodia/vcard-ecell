'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2 } from 'lucide-react'

interface SpeakerVCardProps {
  name: string
  title: string
  company: string
  description: string
  audioSrc: string
  imageSrc: string
}

export default function SpeakerVCard({
  name,
  title,
  company,
  description,
  audioSrc,
  imageSrc
}: SpeakerVCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = React.useRef<HTMLAudioElement>(null)

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <Card className="w-full max-w-md bg-gray-900 text-white border-purple-500 border-2">
      <CardHeader className="relative">
        <img src={imageSrc} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4">
          <CardTitle className="text-2xl font-bold">{name}</CardTitle>
          <p className="text-sm text-purple-300">{title} at {company}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm">{description}</p>
        <div className="flex items-center space-x-2">
          <Button
            onClick={toggleAudio}
            variant="outline"
            size="icon"
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
          <div className="flex-1 bg-gray-700 h-1 rounded-full overflow-hidden">
            <div className="bg-purple-500 h-full w-0" style={{ width: '0%' }}></div>
          </div>
          <Volume2 className="h-4 w-4 text-purple-300" />
        </div>
        <audio ref={audioRef} src={audioSrc} className="hidden" />
      </CardContent>
    </Card>
  )
}

