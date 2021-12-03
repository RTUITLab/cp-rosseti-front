import {
    Box, HStack, Spacer, Link, Image, Text ,
    Center,
    Divider,
    Icon
} from '@chakra-ui/react'
import { SearchBar } from '../SearchBar/SearchBar'
import { BsPersonCircle } from 'react-icons/bs'

import headerStyles from "./Header.module.css"

import logo from './../../assets/images/logo.png'
export const Header = () => {


    return (
        <div className={headerStyles.mobileNav}>
        <Box bg="blue.700" h="48px">
            <Box p={1}>
                <HStack>
                    <Image src={logo.src} pl={10}/>
                    <Spacer/>
                    <SearchBar/>
                    <Spacer/>
                    <HStack>
                        <Text
                            fontSize="18px"
                            color="white"
                            as="b"
                        >
                            Кастомный режим
                        </Text>
                        <Center height='20px' w="5px">
                              <Divider orientation='vertical' />
                        </Center>
                        <Icon 
                        as={BsPersonCircle}
                        w="32px"
                        h="32px"
                        color="white"
                        />
                    </HStack>
                    
                </HStack>
            </Box>
        </Box>
        </div>
    )
}