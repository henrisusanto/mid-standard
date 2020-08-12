import { Module } from '@nestjs/common'
import { HooksModule } from '@nestpack/hooks'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MemberController } from './member.controller'
import { MemberService } from './member.service'
import { MemberEntity } from './member.entity'

@Module({
    controllers:[MemberController],
    imports:[TypeOrmModule.forFeature([MemberEntity]), HooksModule],
    providers: [MemberService]
})
export class MemberModule {}
