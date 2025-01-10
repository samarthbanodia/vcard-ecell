'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, Calendar, Clock, MapPin } from 'lucide-react'

interface SingleSpeakerVCardProps {
  name: string
  title: string
  company: string
  description: string
  audioSrc: string
  imageSrc: string
  date: string
  time: string
  venue: string
}

export default function SingleSpeakerVCard({
  name,
  title,
  company,
  description,
  audioSrc,
  imageSrc,
  date,
  time,
  venue
}: SingleSpeakerVCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

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

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      const updateProgress = () => {
        const value = (audio.currentTime / audio.duration) * 100
        setProgress(isNaN(value) ? 0 : value)
      }
      audio.addEventListener('timeupdate', updateProgress)
      return () => audio.removeEventListener('timeupdate', updateProgress)
    }
  }, [])

  return (
    <Card className="w-full max-w-4xl mx-auto bg-gray-900 text-white border-purple-500 border-2">
      <CardHeader className="relative p-0">
        <img src={imageSrc} alt={name} className="w-full h-64 object-cover rounded-t-lg" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-6">
          <CardTitle className="text-4xl font-bold">{name}</CardTitle>
          <p className="text-xl text-purple-300 mt-2">{title} at {company}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-6 p-6">
        <div className="flex flex-wrap gap-4 text-sm text-purple-300">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            {date}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            {time}
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            {venue}
          </div>
        </div>
        <p className="text-lg">{description}</p>
        <div className="space-y-2">
          <p className="text-sm text-purple-300">Listen to a preview of the talk:</p>
          <div className="flex items-center space-x-2">
            <Button
              onClick={toggleAudio}
              variant="outline"
              size="icon"
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            <div className="flex-1 bg-gray-700 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-purple-500 h-full transition-all duration-300 ease-in-out" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <Volume2 className="h-4 w-4 text-purple-300" />
          </div>
        </div>
        <audio ref={audioRef} src={audioSrc} className="hidden" />
      </CardContent>
    </Card>
  )
}

