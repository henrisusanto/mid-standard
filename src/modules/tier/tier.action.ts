import { IHookAction, HookAction } from '@nestpack/hooks'
import { GetActiveTiers } from '../member/tier.hook'
import { TierService } from './tier.service'

@HookAction(GetActiveTiers)
export class ProvideActiveTiers implements IHookAction {

    constructor(
        private readonly service: TierService,
    ) { }

    async handle(hook: GetActiveTiers) {
        hook.tiers = []
        try {
            hook.tiers = await this.service.getActive()
            return hook;
        } catch (e) {
            return hook;
        }
    }
} 
