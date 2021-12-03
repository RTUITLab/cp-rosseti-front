import {
    Text,
    Box,
    Flex,
    VStack,
    Spacer,
    HStack
} from '@chakra-ui/react'

import {
    CheckIcon
} from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import { TheorView } from './TheorView'

type ModuleViewProps = {
    id: Number
    name: String
    subModuleName?: String
    subModuleID?: Number
}

export const ModuleView = (props: ModuleViewProps) => {

    const [theor, setTheor] = useState(false)
    useEffect(
        () => {
            setTheor(false)
        },
        [props]
    )

    const getGetTheorText = () => {
        if(props.subModuleName != null) {
            return props.subModuleName
        } else {
            return "Тут можно пройти Теорию"
        }
    }

    const Main = () => {
        if (theor && props.subModuleID != null) {
            return (
                <TheorView
                    subModuleID={props.subModuleID}
                    name={props.name}
                />
            )
        } else {
            return (
                <Box
                boxShadow="lg"
                >
                    <VStack align="" spacing={0}>
                        <Box
                            h="2px"
                            bg="green.300"
                        >
                        </Box>
                        <Box
                        bg="gray.100"
                        >
                            <Text 
                            p={2 }
                            w="full"
                            >
                                {`${props.name}`}
                            </Text>
                        </Box>
                        <Box pt={10} pl={4}>
                            <Spacer/>
                            <HStack align="">
                                <CheckIcon
                                    color="green.300"
                                    margin="1"
                                />
                                <VStack>
                                    <VStack align="">
                                        <HStack>
                                            <Text
                                            onClick={
                                                () => {
                                                    setTheor(true)
                                                }
                                            }
                                            >
                                                Теория
                                            </Text>
                                        </HStack>
                                        <Text>
                                            {getGetTheorText()}
                                        </Text>
                                    </VStack>
                                </VStack>
                            </HStack>
                            <HStack align="" pt={4}>
                                <CheckIcon
                                    color="green.300"
                                    margin="1"
                                />
                                <VStack>
                                    <VStack align="">
                                        <HStack>
                                            <Text>
                                                Обучение
                                            </Text>
                                        </HStack>
                                        <Text>
                                            Здесь вы можете потренироваться в подготовленной для этой темы симуляторе
                                        </Text>
                                    </VStack>
                                </VStack>
                            </HStack>
                            <HStack align="" pt={4}>
                                <CheckIcon
                                    color="green.300"
                                    margin="1"
                                />
                                <VStack>
                                    <VStack align="">
                                        <HStack>
                                            <Text>
                                                Тестирование
                                            </Text>
                                        </HStack>
                                        <Text>
                                        В тесте представленно 10 вопросов на 30 минут. Доступно две попытки. Если из-за технического сбоя вы не смогли продолжить сдавать первую попытку, то необходимо приступить ко второй попытке.
                                        </Text>
                                    </VStack>
                                </VStack>
                            </HStack>
                            <HStack align="" pt={4}>
                                <CheckIcon
                                    color="green.300"
                                    margin="1"
                                />
                                <VStack>
                                    <VStack align="">
                                        <HStack>
                                            <Text>
                                                Практический тест
                                            </Text>
                                        </HStack>
                                        <Text>
                                        В тесте представленно 3 задания на 60 минут. Доступно две попытки. Если из-за технического сбоя вы не смогли продолжить сдавать первую попытку, то необходимо приступить ко второй попытке.
                                        </Text>
                                    </VStack>
                                </VStack>
                            </HStack>
                            <Spacer/>
                            <Box p={10}>
                            </Box>
                        </Box>
                    </VStack>
                </Box>
            )
        }
    }

    return (
        <Main/>
    )
}