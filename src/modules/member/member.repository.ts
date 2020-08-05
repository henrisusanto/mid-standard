import { Injectable } from '@nestjs/common';

@Injectable()
export class MemberRepository {
  sayHenri(): string {
    return 'Hello Repository!';
  }
}