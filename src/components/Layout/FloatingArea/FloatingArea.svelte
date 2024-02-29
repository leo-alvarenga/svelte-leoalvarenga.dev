<script lang="ts">
	import type { Notification } from "$lib";
	import { onMount } from "svelte";
	import LocaleSelector from "./LocaleSelector.svelte";
	import NotificationArea from "./NotificationArea/NotificationArea.svelte";

    let hideNotifications = true;
    export let notifications: Notification[];

    onMount(() => {
        setTimeout(() => {
            hideNotifications = false;
        }, 800);
    });
</script>

<div
    class={`
        fixed bottom-0 left-0 w-full
        flex flex-row flex-wrap-reverse
        z-20 p-4 gap-4
    `}
>
    <LocaleSelector />

    {#if !hideNotifications}
        <NotificationArea {notifications} />
    {/if}
</div>
