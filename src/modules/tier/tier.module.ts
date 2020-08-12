import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TierEntity } from './tier.entity'
import { TierService } from './tier.service'

import { HooksModule } from '@nestpack/hooks';
import { ProvideActiveTiers } from './tier.action'

@Module({
    imports:[TypeOrmModule.forFeature([TierEntity]), HooksModule],
    providers: [TierService, ProvideActiveTiers]
})
export class TierModule {}
