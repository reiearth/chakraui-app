import { Button } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon'
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image';
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { FaHeart } from 'react-icons/fa'
import React from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
  } from '@chakra-ui/react'


export default function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    

    return (
        <Stack>
            <Circle position="absolute" bg="blue.100" opacity="0.1"
                w="300px" h="300px" alignSelf="flex-end" />
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                    <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' >Rei-san</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}><Icon as={FaHeart} w={3} h={3} color="red.600"></Icon> Otaku Designer Developer Dad <Icon as={FaHeart} w={3} h={3} color="red.600"></Icon></Text>
                        <Popover>
                    <PopoverTrigger>
                     <Button mt={8} colorScheme="blue">Hire Me</Button>
                      </PopoverTrigger>
                         <PopoverContent>
                          <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverHeader>Ohayō gozaimasu (おはようございます)!</PopoverHeader>
                            <PopoverBody>Are you sure you want to hire me?</PopoverBody>
                        </PopoverContent>
                        </Popover>

                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" src='https://cutewallpaper.org/21/naruto-profile-pics/naruto-Instagram-naruto.uzmk.79-naruto-Profile-naruto-.jpg' />
            </Flex>

        </Stack>
    )
}

