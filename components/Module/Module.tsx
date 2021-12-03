import {
    Text,
    Box,
    Flex,
    VStack,
    Spacer
} from '@chakra-ui/react'
import { useEffect, useState } from "react"
import List from "../List"
import { ModuleView } from './ModuleView'

export type ModuleModel = {
    id: Number
    name: String
    subModules?: SubModule[]
}

export type SubModule = {
    id: Number
    moduleID: Number
    name: String
    text: String
}

export type ModuleProps = {
    modules: ModuleModel[]
}

export type ModuleTabProps = {
    id: Number
    name: String
    bg?: String
}

export const Module = (props: ModuleProps) => {
    const [selected, setSelected] = useState<ModuleModel>()
    useEffect(
        () => {
            if (props.modules?.length > 0) {
                setSelected(props.modules[0])
            }
        },
        [props.modules],
    )
    const SubModuleList = () => {
        return (
            <VStack
            alignItems=""
                p={1}
            >
                {
                props?.modules?.map(
                    (m, i) => {
                        return (
                            <SubModuleTab
                                id={m.id}
                                name={`${i+1} ${m.name}`}
                            />
                        )
                        }
                    )
                }
            </VStack>
        )
    }

    const SubModuleTab = (model: ModuleTabProps) => {
        const onClick = () => {
            {
                props?.modules?.forEach(
                    (item, index) => {
                        if (item.id == model.id) {
                            setSelected(props?.modules[index])
                        }
                    }
                )
            }
        }

        return (
            <Box
            border="1px"
            borderWidth="1px"
            borderRadius="lg"
            borderColor="blue.700"
            p={1}
            onClick={onClick}
            bg={selected?.id == model.id ? "blue.500" : "white"}
            >
                <Text
                color="blue.900"
                as="b"
                >
                    {model.name}
                </Text>
            </Box>
        )
    }

    const subModuleName = () => {
        if (selected?.subModules?.length > 0) {
            return selected?.subModules[0].name
        } else {
            return "Тут можно пройти теорию"
        }
    }

    const subModuleID = (): Number => {
        if (selected?.subModules?.length > 0) {
            return selected?.subModules[0].id
        } else {
            return null
        }
    }

    return (
        <Box>
            <Flex direction="row">
                <Box 
                p={5}
                >
                    <SubModuleList/>
                </Box>
                <Spacer/>
                <Box
                w="80%"
                p={5}
                >
                    <ModuleView
                        id={selected?.id}
                        name={selected?.name}
                        subModuleName={
                            subModuleName()
                        }
                        subModuleID={
                            subModuleID()
                        }
                    />
                </Box>
                <Spacer/>
            </Flex>
        </Box>
    )
}