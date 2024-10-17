import React from 'react'
import { Button, Icon, Text } from '@chakra-ui/react'
import { IconType } from "react-icons";


interface SelectionIconProps {
  isActive? : boolean
  text? : string 
  icon? : IconType
  onClick?: () => void
}

export default function SelectionIconButton({ text, icon, onClick, isActive }: SelectionIconProps = {}) {
  return (
    <Button
      px={4}
      py={2}
      color="white"
      bg="#111827"
      borderRadius="md"
      shadow="0 0 0 1px #3b82f6"
      _hover={{ bg: "#1f2937" }}
      _active={{ bg: "#374151" }}
      isActive = {isActive}
      leftIcon={
        <Icon
          as={icon}
          w="30px"
          h="30px"
          p="4px"
          color="black"
          bg="#4ade80"
          borderRadius="md"
        />
      }
      onClick={onClick}
    >
      <Text fontSize="md" fontWeight="medium">
        {text}
      </Text>
    </Button>
  )
}