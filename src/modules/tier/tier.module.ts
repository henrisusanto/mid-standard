import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TierEntity } from './tier.entity'
import { TierService } from './tier.service'

import { HooksModule } from '@nestpack/hooks';
import { TrippleValueAction } from './tripple-value.action';

@Module({
    imports:[TypeOrmModule.forFeature([TierEntity]), HooksModule],
    providers: [TierService, TrippleValueAction]
})
export class TierModule {}
