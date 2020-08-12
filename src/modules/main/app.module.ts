import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemberModule } from '../member/member.module'
import { TierModule } from '../tier/tier.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    MemberModule,
    TierModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
