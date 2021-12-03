import {
    Text,
    Box,
    Flex,
    VStack,
    Spacer,
    HStack,
    Icon,
    RadioGroup,
    Radio,
    Stack
} from '@chakra-ui/react'
import {AiOutlineExclamationCircle} from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { moduleAPI, PractTest, TheorTest } from '../../pages/api/module'

export type TheorViewProps = {
    name: String
    subModuleID: Number
}
export const TheorView = (props: TheorViewProps) => {

    const [text, setText] = useState<String>("")
    const [theorTest, setTheorTest] = useState<TheorTest>(null)
    const [practTest, setPractTest] = useState<PractTest>(null)

    useEffect(
        () => {
            async function getSubModule() {
                let data = await moduleAPI.getSubModule(props.subModuleID)
                console.log(data)
                if (data.test) {
                    console.log(data.test.theoreticalTest)
                    setTheorTest(data.test.theoreticalTest)
                    console.log(data.test.practTest)
                    setPractTest(data.test.practTest)
                }
                setText(data.text)
            }
            getSubModule()
        },
        []
    )

    const Theory = () => {
        return (
        <Box
        pb={2}
        >
            <Text>
                {text}
            </Text>
        </Box>
        )
    }

    type DividerProps = {
        text: String
    }
    const Divider = (props: DividerProps) => {
        
        return (
            <Flex
            direction="row"
            border="1px"
            borderWidth="1px"
            borderRadius="lg"
            borderColor="blue.700"
            bg="gray.500"
            >
                    <Box
                        w="5%"
                        h="full"
                        pt={1}
                        pl={1}
                        borderRadius="lg"
                        
                    >
                        <Icon as={AiOutlineExclamationCircle} w={25} h={25} color="white"/>
                    </Box>
                    <Box
                    w="full"
                    bg="white"
                    pl={5}
                    borderRightRadius="lg"
                    >
                        <Text>
                            {props.text}
                        </Text>
                    </Box>

            </Flex>
        )
    }

    const Questions = () => {
        return (
            <VStack pt={5} align="">
            {
                theorTest?.questions?.map(
                    (item, index) => {
                        const [value, setValue] = useState('1')
                        return (
                            <VStack align="">
                                <Text>
                                    {`${index + 1}. ${item.question}`}
                                </Text>
                                <RadioGroup onChange={setValue} value={value}>
                                    <Stack>
                                        {
                                            item.answers.map(
                                                (item, index) => {
                                                    return (
                                                        <Radio colorScheme="blue" value={index}>
                                                            {item.answer}
                                                        </Radio>
                                                    )
                                                }
                                            )
                                        }
                                    </Stack>                                    
                                </RadioGroup>
                            </VStack>
                        )
                    }
                )
            }
            </VStack>
        )
    }

    return (
        <Box
        boxShadow="lg"
        p={2}
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
                    p={2}
                    w="full"
                    >
                        {`${props.name}`}
                    </Text>
                </Box>
                <Box pt={10} pl={4}>
                    <Spacer/>
                    <Theory/>
                    <Divider
                    text="Проверьте своё понимание данной темы, выбрав ЛУЧШИЙ ответ на следующие вопросы."
                    />
                    <Questions/>
                    <Box pb={5}/>
                    <Divider
                        text="Проверка ваших теоретических знаний на практике"
                    />
                    <Box pb={3}/>
                    <Box
                        direction="row"
                        border="1px"
                        borderWidth="1px"
                        borderRadius="lg"
                        borderColor="blue.700"
                        alignContent="center"
                        h="100%"
                        w="100%"
                    >
                        <iframe 
                        src="/unity/index.html"
                        height="800px"
                        width="100%"
                        >

                        </iframe>
                    </Box>
                    <Spacer/>
                    <Box p={10}>
                    </Box>
                </Box>
            </VStack>
        </Box>
    )
}