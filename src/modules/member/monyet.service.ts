import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from './member.entity'

@Injectable()
export class MonyetService {

    constructor(
        @InjectRepository(Member)
        private readonly userRepository: Repository<Member>,
    ) { }

    getHello(): string {
        return 'Hello Member!';
    }
}