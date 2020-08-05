import { Controller, Get } from '@nestjs/common';
import { MemberService } from './member.service';

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get('hello')
  getHello(): string {
    return this.memberService.getHello();
  }

}
