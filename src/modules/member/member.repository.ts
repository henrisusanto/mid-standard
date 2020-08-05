import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from './member.entity'

@Injectable()
export class MemberRepository {

  constructor(
    @InjectRepository(Member)
    private readonly userRepository: Repository<Member>,
  ) { }

  sayHenri(): string {
    return 'Hello Repository!';
  }

}