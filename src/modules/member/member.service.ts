import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { MemberEntity } from './member.entity'
import { Member } from './member.domain'

@Injectable()
export class MemberService {

    constructor(
        @InjectRepository(MemberEntity)
        private readonly repo: Repository<MemberEntity>,
    ) { }

    async save(member: Member): Promise<number> {
        let entity = this.repo.create(member.toJSON())
        let record = await this.repo.save(entity)
        return record.MemberID
    }
}