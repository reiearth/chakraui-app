import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { DiHtml5, DiCss3, DiBootstrap, DiWordpress, DiJavascript1} from 'react-icons/di'


export default function Profile() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");


    return (
        <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
            maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}>
            <Box alignSelf="center" px="32" py="16">
                <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
                    3+
                </Heading>
                <Text fontSize="2xl" color="gray.400">Years of Experience</Text>
            </Box>
            <Box alignSelf="center" px="32" py="16">
                <Text fontWeight="bold" fontSize="2xl">Freelance Web Designer and Frontend Web Developer.</Text>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
                    <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="18vh" w="18vh" justify="flex-end">
                        <Icon color="white" p="4" as={DiHtml5} w="24" h="24" />
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                            HTML 5
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="18vh" w="18vh" justify="flex-end" _hover={{ bg: "teal.400", }}>
                        <Icon color="black" p="4" as={DiCss3} w="24" h="24" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            CSS 3
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="18vh" w="18vh" justify="flex-end" _hover={{ bg: "teal.400", }}>
                        <Icon color="black" p="4" as={DiJavascript1} w="24" h="24" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Javascript
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="18vh" w="18vh" justify="flex-end"
                        _hover={{ bg: "green.400", }}>
                        <Icon as={DiBootstrap} p="4" w="24" h="24" color="black" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Bootstrap 5
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="18vh" w="18vh" justify="flex-end"
                        _hover={{ bg: "red.400", }}>
                        <Icon as={DiWordpress} p="4" w="24" h="24" color="black" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Wordpress
                        </Text>
                    </Flex>
                </Flex>

            </Box>
        </Flex>
    )
}

