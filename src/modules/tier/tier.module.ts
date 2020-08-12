import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TierEntity } from './tier.entity'
import { TierService } from './tier.service'

@Module({
    imports:[TypeOrmModule.forFeature([TierEntity])],
    providers: [TierService]
})
export class TierModule {}
