import {Box, HStack, Spacer, Link, Image, Text, Input, InputGroup, InputRightAddon, Icon } from '@chakra-ui/react'
import {AiOutlineSearch} from 'react-icons/ai'

export const SearchBar = () => {

    return (
        <Box p={1}>
            <InputGroup>
                <Input
                bg="white"
                h="32px"
                placeholder="Поиск по модулям"
                w="360px"
                border="1px"
                borderWidth="1px"
                borderRadius="lg"
                >
                </Input>
                <InputRightAddon
                w="32px"
                h="32px"
                bg="gray.400"
                pr="8"
                >
                    <Icon as={AiOutlineSearch}/>
                </InputRightAddon>
            </InputGroup>
        </Box>
    )
}