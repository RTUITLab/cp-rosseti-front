export const baseURL = "https://realitygaze.rtuitlab.dev/api/dron"

export enum StatusCodesEnum {
    Crated = 201,
    Success = 200,
    NotFound = 404,
    BadRequest = 400,
    Forbidden = 403,
    ServerError = 500,
}

export type ErrorResponceType<Message = '', Status = StatusCodesEnum> = {
    message: Message
    status: Status
}