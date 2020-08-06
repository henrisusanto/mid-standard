import { Controller, Get } from '@nestjs/common';
import { MemberService } from './member.service';
import { MonyetService } from './monyet.service';
import { MonyetRepository } from './monyet.repository';
import { MemberRepository } from './member.repository'

import { Member } from './member.domain'

@Controller('member')
export class MemberController {
    constructor(
        private readonly memberService: MemberService,
        private readonly monyetService: MonyetService,
        private readonly monyetRepository: MonyetRepository,
        private readonly memberRepository: MemberRepository
    ) { }

    @Get('hello')
    getHello(): string {
        return this.memberService.getHello();
    }

    @Get('henri')
    sayHenri(): string {
        // return this.monyetRepository.getHello()
        let member = new Member()
        member.setFirstName('Duke')
        return member.getFullName()
    }

    @Get('monyetId')
    async monyetId() {
        return await this.memberService.getByEmail('asdasds2@gmail.com')
    }
}
