import axios from "axios";
import { ErrorResponceType, baseURL } from "../api";

export type GetModulesReq = {
    offset: Number
    limit: Number
}

export type GetModulesResp = {
    modules: Module[]
}

export type Module = {
    id: Number
    name: String
    subModules: SubModule[]
}

export type SubModule = {
    id: Number
    moduleID: Number
    name: String
    text: String
}

export type GetSubModuleResp = {
    id: Number
    name: String
    text: String
    test?: Test
}

export type Test = {
    id: Number
    practTest?: PractTest
    theoreticalTest?: TheorTest
}

export type PractTest = {
    id: Number
    config: any
}

export type TheorTest = {
    id: Number
    questions: Question[]
}

export type Question = {
    id: Number
    question: String
    answers: Answers[]
}

export type Answers = {
    id: Number
    answer: String
    correct: Boolean
}

export const moduleAPI = {
    getModules(req: GetModulesReq) {
        return axios.get<GetModulesResp & ErrorResponceType>(
            baseURL + `/v1/module?offset=${req.offset}&limit=${req.limit}`,
            {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
                }
            }
        ).then(responce => responce.data)
    },
    getSubModule(id: Number) {
        return axios.get<GetSubModuleResp & ErrorResponceType>(
            baseURL + `/v1/module/submodule/${id}`,
            {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
                }
            }
        ).then(responce => responce.data)
    }
}