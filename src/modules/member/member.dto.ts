import { ApiProperty } from '@nestjs/swagger';

interface MemberPublic {
    member_id: number
    full_name: string
    email: string
    mobile_phone: string
    dob: Date
    tier: string
    point_balance: number
}

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

export class MemberQueryRequest {
    @ApiProperty({ required: false })
    limit: number

    @ApiProperty({ required: false })
    offset: number

    @ApiProperty({ enum: ['member_id', 'dob', 'tier'] })
    order_field: string

    @ApiProperty({ enum: ['ASC', 'DESC'] })
    order_type: string

    @ApiProperty({ required: false })
    search: string

    @ApiProperty({ required: false })
    status: boolean

    @ApiProperty({ example: 'Silver', required: false })
    tier: string

    @ApiProperty({ required: false })
    start_date: Date

    @ApiProperty({ required: false })
    end_date: Date
}

export class MemberQueryResponse {
    @ApiProperty()
    status: boolean

    @ApiProperty()
    message: string

    @ApiProperty()
    current_page: number

    @ApiProperty()
    total_page: number

    @ApiProperty()
    data: MemberPublic[]
}