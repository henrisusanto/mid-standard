import { Controller, Get } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberRepository } from './member.repository'

@Controller('member')
export class MemberController {
    constructor(
        private readonly memberService: MemberService,
        private readonly memberRepository: MemberRepository
    ) { }

    @Get('hello')
    getHello(): string {
        return this.memberService.getHello();
    }

    @Get('henri')
    sayHenri(): string {
        return this.memberRepository.sayHenri()
    }
}
