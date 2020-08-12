import { Controller, Get, Post, Body, Query } from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { MemberService } from './member.service'
import {
    MemberRegistrationRequest,
    MemberRegistrationResponse,
    MemberQueryRequest,
    MemberQueryResponse
} from './member.dto'
import { Member } from './member.domain'

import { HooksService } from '@nestpack/hooks';
import { ExampleHook } from './example.hook';

@Controller('member')
@ApiTags('Member')
export class MemberController {

    constructor(
        private readonly service: MemberService,
        private readonly hooksService: HooksService
    ) { }

    @Get('hook')
    async getValue() {
        // Run the hook by passing an instance of the defined hook
        const result = await this.hooksService.runHook(new ExampleHook());

        return result.value;
    }

    @Post('register')
    @ApiResponse({ status: 201, type: MemberRegistrationResponse })
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
                message: error.toString(),
                member_id: 0
            }
        }

    }

    @Get('query')
    @ApiResponse({ status: 201, type: MemberQueryResponse })
    async MemberQuery(@Query() payload: MemberQueryRequest): Promise<MemberQueryResponse> {
        payload.limit = payload.limit || 5
        payload.offset = payload.offset || 0
        payload.order_field = payload.order_field || 'member_id'
        payload.order_type = payload.order_type || 'ASC'
        payload.search = payload.search || ''
        payload.status = payload.status || true

        try {
            let members: Member[] = await this.service.find(payload)
            return {
                status: true,
                message: 'Query Member Success',
                current_page: 1,
                total_page: 1,
                data: members.map(member => {
                    let json = member.toJSON()
                    return {
                        member_id: json.MemberID,
                        full_name: `${json.FirstName} ${json.LastName}`,
                        email: json.Email,
                        mobile_phone: json.MobilePhone,
                        dob: json.DateOfBirth,
                        tier: '' + json.TierLevel,
                        point_balance: json.PointBalance
                    }
                })
            }
        } catch (error) {
            return {
                status: false,
                message: error.toString(),
                current_page: 0,
                total_page: 0,
                data: []
            }
        }

    }
}
