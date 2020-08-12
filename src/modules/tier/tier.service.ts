import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { TierEntity } from './tier.entity'
import { TierJSON } from './tier.domain'

@Injectable()
export class TierService {

    constructor(
        @InjectRepository(TierEntity)
        private readonly repo: Repository<TierEntity>,
    ) { }

    async getActive (): Promise<TierJSON[]> {
        return await this.repo.find()
    }
}