import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MemberController } from './member.controller'
import { MemberService } from './member.service'
import { MemberEntity } from './member.entity'

import { HooksModule } from '@nestpack/hooks';
import { DoubleValueAction } from './double-value.action';

@Module({
    controllers:[MemberController],
    imports:[TypeOrmModule.forFeature([MemberEntity]), HooksModule],
    providers: [MemberService]
})
export class MemberModule {}
