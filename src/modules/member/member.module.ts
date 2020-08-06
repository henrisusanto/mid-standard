import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MemberController } from './member.controller';
import { MemberService } from './member.service';
import { MonyetService } from './monyet.service';
import { MonyetRepository } from './monyet.repository';
import { MemberRepository } from './member.repository';
import { Member } from './member.entity'
import { User } from './user.entity'

@Module({
    imports: [TypeOrmModule.forFeature([Member, User])],
    controllers: [MemberController],
    providers: [MemberService, MemberRepository, MonyetService, MonyetRepository],
})
export class MemberModule { }