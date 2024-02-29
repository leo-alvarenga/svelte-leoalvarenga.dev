<script lang="ts">
    import { onMount } from "svelte";
	import Fa from "svelte-fa";
	import { faInfoCircle, faClose } from "@fortawesome/free-solid-svg-icons";

    import type { Notification } from "$lib";
	import { t, updateStatus } from "../../../../store";
	import ActionButton from "./ActionButton.svelte";

    export let notification: Notification;
    $: action = notification.action;
    $: labels = notification.labels;

    let counter = Math.floor((notification.timeout ?? 0) / 1000);

    function handleClick(accept?: boolean) {
        if (action) action(!!accept);

        $updateStatus(notification.id, accept ? 'ok' : 'rejected');
    }

    onMount(() => {
        if (notification.timeout) {
            setInterval(() => {
                counter = counter - 1;    
            }, 1000);

            setTimeout(handleClick, notification.timeout);
        }
    });
</script>

<div
    class={`
        flex flex-col w-full 
        bg-dark border border-light
        rounded-md p-4 h-fit gap-4
    `}
>
    <div class="flex flex-row gap-4 items-center w-full h-auto">
        <Fa class="animate-pulse" icon={notification.icon ?? faInfoCircle} />
        <h3 class="overflow-hidden text-ellipsis">{$t(notification.title)}</h3>

        <button class="ml-auto transition-all duration-500 hover:text-red-600" on:click={() => handleClick(false)}>
            <Fa icon={faClose} />
        </button>
    </div>

    <p class="text-sm">{$t(notification.body)}</p>

    <div class="w-full flex flex-row gap-4 justify-end">

        {#if notification.timeout}
            <span class="text-sm opacity-60">{counter}s</span>
        {:else}
            <ActionButton action={() => handleClick(true)}>
                {$t(labels ? labels.ok : 'common.ok')}
            </ActionButton>
            
            {#if action}
                <ActionButton variant="FALUIRE" action={() => handleClick(false)}>
                    {$t(labels ? labels.cancel : 'common.cancel')}
                </ActionButton>
            {/if}
        {/if}
    </div>
</div>
