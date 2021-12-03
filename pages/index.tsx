import Link from 'next/link'
import { useDispatch } from 'react-redux'
import Layout from '../components/Layout'
import { login } from './redux/store/auth-reducer'
import {
    Text,
    Box
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Module } from './../components/Module/Module'
import { Module as ModuleModel, moduleAPI } from './api/module'

const IndexPage = () => {
    const moduleId: Number = 4294967296
    const [modules, setModules] = useState<ModuleModel[]>()
    const dispatch = useDispatch()

    useEffect(
        () => {
            dispatch(login("root", "root"))
        },
        [],
    )

    useEffect(
        () => {
            async function getModules() {
                let modules = await moduleAPI.getModules({offset: 1, limit: 0})
                setModules(modules.modules)
            }
            getModules()
        },
        []
    )

    

    return (
        <Box>
            <Module
                modules={modules}
            />
        </Box>
    )
}

export default IndexPage
