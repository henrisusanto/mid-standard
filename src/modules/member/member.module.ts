import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MemberController } from './member.controller';
import { MemberService } from './member.service';
import { MemberRepository } from './member.repository';
import { Member } from './member.entity'

@Module({
    imports: [TypeOrmModule.forFeature([Member])],
    controllers: [MemberController],
    providers: [MemberService, MemberRepository],
})
export class MemberModule { }