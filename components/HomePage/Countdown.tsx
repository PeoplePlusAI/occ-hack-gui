"use client"

import { useState, useEffect } from 'react'
import { Box, Text, VStack, HStack } from '@chakra-ui/react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime()
      const target = new Date(targetDate).getTime()
      const difference = target - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      } else {
        clearInterval(intervalId)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(intervalId)
  }, [targetDate])

  return (
    <Box p={10} borderWidth={1} borderRadius="lg" as="section" py={12}  display="flex" alignItems="center" alignSelf='center' >
      <VStack>
        <Text fontSize="4xl" fontWeight="bold">Countdown to Open Coud Compute PES Hackathon</Text>
        <HStack spacing={4}>
          <VStack>
            <Text fontSize="5xl" fontWeight="bold">{timeLeft.days}</Text>
            <Text fontSize="xl">Days</Text>
          </VStack>
          <VStack>
            <Text fontSize="5xl" fontWeight="bold">{timeLeft.hours}</Text>
            <Text fontSize="xl">Hours</Text>
          </VStack>
          <VStack>
            <Text fontSize="5xl" fontWeight="bold">{timeLeft.minutes}</Text>
            <Text fontSize="xl">Minutes</Text>
          </VStack>
          <VStack>
            <Text fontSize="5xl" fontWeight="bold">{timeLeft.seconds}</Text>
            <Text fontSize="xl">Seconds</Text>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  )
}