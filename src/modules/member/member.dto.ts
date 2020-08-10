export interface MemberRegistrationRequest {
    first_name: string
    last_name: string
    email: string
    mobile_phone: string
    date_of_birth: Date
    password: string
    confirm_password: string
}

export interface MemberRegistrationResponse {
    status: boolean
    message: string
    member_id: number
}