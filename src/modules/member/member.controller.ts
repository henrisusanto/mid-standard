import { Controller, Post, Body } from '@nestjs/common'
import { ApiBody } from '@nestjs/swagger';
import { MemberService } from './member.service'
import { MemberRegistrationRequest, MemberRegistrationResponse } from './member.dto'
import { Member } from './member.domain'

@Controller('member')
export class MemberController {

    constructor(
        private readonly service: MemberService
    ) { }

    @Post('register')
    @ApiBody()
    async MemberRegister(@Body() payload: MemberRegistrationRequest): Promise<MemberRegistrationResponse> {
        if (payload.password !== payload.confirm_password) return {
            status: false,
            message: 'Password Not Match',
            member_id: 0
        }

        let member = new Member()
        member.register({
            FirstName: payload.first_name,
            LastName: payload.last_name,
            Email: payload.email,
            MobilePhone: payload.mobile_phone,
            DateOfBirth: payload.date_of_birth,
            Password: payload.password
        })

        try {
            let MemberID = await this.service.save(member)
            return {
                status: true,
                message: 'Member Registration Success',
                member_id: MemberID
            }
        } catch (error) {
            return {
                status: false,
                message: e.toString(),
                member_id: 0
            }
        }
        
    }
}
