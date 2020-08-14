import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MemberController } from './member.controller'
import { MemberService } from './member.service'
import { MemberEntity } from './member.entity'

import { HooksModule } from '@nestpack/hooks';
import { DoubleValueAction } from './double-value.action';
import { TrippleValueAction } from './tripple-value.action'

@Module({
    controllers:[MemberController],
    imports:[TypeOrmModule.forFeature([MemberEntity]), HooksModule],
    providers: [MemberService, DoubleValueAction, TrippleValueAction]
})
export class MemberModule {}
