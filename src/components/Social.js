import Icon from '@chakra-ui/icon'
import { HStack } from '@chakra-ui/layout'
import React from 'react'
import { FaFacebookF, FaGoogle, FaTwitter, FaPinterest } from 'react-icons/fa'

export default function Social() {
    return (
        <HStack spacing="24">
            <Icon as={FaFacebookF} boxSize="50" />
            <Icon as={FaGoogle} boxSize="50" />
            <Icon as={FaTwitter} boxSize="50" />
            <Icon as={FaPinterest} boxSize="50" />
        </HStack>
    )
}

