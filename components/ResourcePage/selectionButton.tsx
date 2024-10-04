/* eslint-disable chakra-ui/props-order */

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
      isActive = {isActive}
      leftIcon={
        <Icon
          as={icon}
          color="black"
          bg="#4ade80"
          w="30px"
          h="30px"
          p="4px"
          borderRadius="md"
        />
      }
      bg="#111827"
      color="white"
      borderRadius="md"
      px={4}
      py={2}
      _hover={{ bg: "#1f2937" }}
      _active={{ bg: "#374151" }}
      shadow="0 0 0 1px #3b82f6"
      onClick={onClick}
    >
      <Text fontSize="md" fontWeight="medium">
        {text}
      </Text>
    </Button>
  )
}