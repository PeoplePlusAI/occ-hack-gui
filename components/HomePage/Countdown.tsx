"use client"

import { useState, useEffect } from 'react'
import { Box, Text, VStack, HStack,Image,Flex } from '@chakra-ui/react'

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
    <Box p={10} borderWidth={1} borderRadius="lg" as="section" py={12}  display="flex" alignItems="center" alignSelf='center' width="80vw">
      <VStack justifyContent={"space-between"}>
        
        <Flex direction={{base: 'column', md: 'row'}} justifyContent={{base: 'start', md: 'space-around'}} width="80vw" alignItems={{base: 'flex-start', md: 'center'}}>
        <VStack width={"75%"} alignItems={"start"}>
        <Text fontSize="3xl" fontWeight="bold">The OCC team presents its first Hackathon in partnership with PES University, Electronic City Campus</Text>
        <Text fontSize="2xl" fontWeight="bold">Countdown to the Hackathon</Text>
        <HStack spacing={10} color={"button1"}>
          <VStack>
            <Text fontSize={{base: '3xl', md: '6xl'}} fontWeight="bold">{timeLeft.days}</Text>
            <Text fontSize={{base: 'lg', md: 'xl'}}>Days</Text>
          </VStack>
          <VStack>
            <Text fontSize={{base: '3xl', md: '6xl'}} fontWeight="bold">{timeLeft.hours}</Text>
            <Text fontSize={{base: 'lg', md: 'xl'}}>Hours</Text>
          </VStack>
          <VStack>
            <Text fontSize={{base: '3xl', md: '6xl'}} fontWeight="bold">{timeLeft.minutes}</Text>
            <Text fontSize={{base: 'lg', md: 'xl'}}>Minutes</Text>
          </VStack>
          <VStack>
            <Text fontSize={{base: '3xl', md: '6xl'}} fontWeight="bold">{timeLeft.seconds}</Text>
            <Text fontSize={{base: 'lg', md: 'xl'}}>Seconds</Text>
          </VStack>
        </HStack>
        </VStack>
        <Image
          src={'/PESlogo.png'}
          alt={`pes logo`}
          width="300px"
          height="300px"
          borderRadius="full"
          fallbackSrc="/placeholder.png"
        />
        </Flex>
      </VStack>
    </Box>
  )
}