// Tripple-value.action.ts
import { IHookAction, HookAction } from '@nestpack/hooks';
import { ExampleHook } from './example.hook';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

/**
 * Apply the HookAction decorator with a reference to the actions
 * this hook should trigger on. To add more than one action, add them
 * as additional parameters.
 *
 * If no actions are passed, this hook will run for all actions.
 */
@HookAction(ExampleHook)
// This action will Tripple the value of the provided hook.
export class TrippleValueAction implements IHookAction {
    // the handle function can be sync or async
    async handle(hook: ExampleHook) {
        //simulate an async call
        await new Promise(r => setTimeout(r, 1000));
        //Optionally mutate data inside of the privded hook
        // hook.value = hook.value - 3;
        try {
            console.log(`------------- I'm TrippleValueAction`)
            throw new Error (`I'm not works`)
            return hook
        } catch (e) {
            return hook
        }

        /**
         * Optional: return a new value to be passed to the next hook
         *
         * After all hooks are run, the final value is passed back to runHook
         */
        // return hook;
    }
}