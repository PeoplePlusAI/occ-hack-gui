/* eslint-disable chakra-ui/props-order */
/* eslint-disable @next/next/no-img-element */
import React, { useRef } from 'react'
import {
  Button,
  Flex,
  Box,
  Text,
  Slide,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  Icon, Image
} from '@chakra-ui/react'
import OCCLogo from '/public/OCCLogo.png'
import NextLink from 'next/link'
import styled from '@emotion/styled'
import useMediaQuery from '../hook/useMediaQuery'
import { AiOutlineMenu } from 'react-icons/ai'
// import Image from 'next/image'
import { HamburgerIcon } from '@chakra-ui/icons'

export default function Navbar({ enableTransition }) {
  const isLargerThan768 = useMediaQuery(768)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = useRef()
  const Bracket = styled.span`
    color: #8f9094;
    font-weight: 600;
  `
  const NavbarDrawer = () => (
    <>
      <Drawer
        initialFocusRef={firstField}
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
      >
        <DrawerOverlay />
        <DrawerContent bgColor="secondary">
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
          <Flex align="center" mr={5}>
        <Button
          as="a"
          href="/"
          variant="unstyled"
          display="flex"
          alignItems="center"
          _hover={{ opacity: 0.8 }}
        >
          <Image
            src="public/logo.svg?height=40&width=40"
            alt="Logo"
            boxSize="40px"
            objectFit="contain"
          />
        </Button>
      </Flex>
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <NextLink passHref href="/">
                <Button as="a" fontSize="16px" variant="ghost">
                  Home
                </Button>
              </NextLink>
              <NextLink passHref href="/resources">
                <Button as="a" fontSize="16px" variant="ghost">
                  Resources
                </Button>
              </NextLink>
              <NextLink passHref href="/about">
                <Button as="a" fontSize="16px" variant="ghost">
                  About Us
                </Button>
              </NextLink>
              <NextLink passHref href="/blog">
                <Button as="a" fontSize="16px" variant="ghost">
                  Blog
                </Button>
              </NextLink>
              {/* <NextLink passHref href="/projects">
                <Button as="a" fontSize="16px" variant="ghost">
                  Projects
                </Button>
              </NextLink> */}
              <NextLink passHref href="/blog">
                <Button as="a" fontSize="16px" variant="ghost">
                  Blog
                </Button>
              </NextLink>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )

  return (
    <Box pos="sticky" zIndex={99}>
      <Slide
        direction="top"
        bg="black"
        transition={
          enableTransition
            ? { enter: { duration: 0.5, delay: 0.01 } }
            : { enter: { duration: 0, delay: 0 } }
        }
        in={true}
        reverse
      >
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          direction="row"
          w={{ base: '100%', lg: '75rem' }}
          mx="auto"
          px="22px"
          py="3"
          bg="black"
          borderBottom="0.5px solid #1e2029"
        >
          <NextLink passHref href="/">
            <Text
              color="displayColor"
              fontSize="32px"
              fontWeight="bold"
              cursor="pointer"
            >
              <Flex align="center" mr={5}>
        <Button
          as="a"
          href="/"
          variant="unstyled"
          display="flex"
          alignItems="center"
          _hover={{ opacity: 0.8 }}
        >
          <Image
            src="/OCCLogo.png?height=90&width=90"
            alt="Logo"
            boxSize="150px"
            objectFit="contain"
          />
        </Button>
      </Flex>
            </Text>
          </NextLink>
          {isLargerThan768 ? (
            <Box mr={7} color="displayColor">
              <NextLink passHref href="/">
                <Button as="a" p="4" fontSize="16px" variant="ghost">
                  Home
                </Button>
              </NextLink>
              <NextLink passHref href="/resources">
                <Button as="a" p="4" fontSize="16px" variant="ghost">
                  Resources
                </Button>
              </NextLink>
              <NextLink passHref href="/about">
                <Button as="a" p="4" fontSize="16px" variant="ghost">
                  About Us
                </Button>
              </NextLink>
              {/* <NextLink passHref href="/projects">
                <Button as="a" p="4" fontSize="16px" variant="ghost">
                  Projects
                </Button>
              </NextLink> */}
              <NextLink passHref href="/blog">
                <Button as="a" p="4" fontSize="16px" variant="ghost">
                  Blog
                </Button>
              </NextLink>{' '}
            </Box>
          ) : (
            <Icon as={AiOutlineMenu} w={7} h={7} onClick={onOpen} />
          )}
        </Flex>
      </Slide>
      <NavbarDrawer />
    </Box>
  )
}
