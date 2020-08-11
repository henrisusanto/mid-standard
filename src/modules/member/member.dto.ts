import { ApiProperty } from '@nestjs/swagger';

export class MemberRegistrationRequest {
    @ApiProperty({ required: true })
    first_name: string

    @ApiProperty({ required: true })
    last_name: string

    @ApiProperty({ required: true })
    email: string

    @ApiProperty({ required: true })
    mobile_phone: string

    @ApiProperty({ required: true, example: '1988-01-18' })
    date_of_birth: Date

    @ApiProperty({ required: true })
    password: string

    @ApiProperty({ required: true })
    confirm_password: string
}

export class MemberRegistrationResponse {
    @ApiProperty()
    status: boolean

    @ApiProperty()
    message: string

    @ApiProperty()
    member_id: number
}