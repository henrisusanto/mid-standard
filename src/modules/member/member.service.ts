import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from './member.entity'
import { User } from './user.entity'

@Injectable()
export class MemberService {

    constructor(
        @InjectRepository(User)
        private readonly memberRepository: Repository<User>,
    ) { }

    getHello(): string {
        return 'Hello Member!';
    }

    getByEmail(email: string) {
        return this.memberRepository
            .createQueryBuilder('user')
            .where('user.email = :email')
            .setParameter('email', email)
            .getOne();
    }
}