<script lang="ts">
	import type { Notification } from "$lib";
	import NotificationCard from "./NotificationCard.svelte";

    export let notifications: Notification[] = [];
</script>
 
<div 
    class={`
        h-fit w-full md:w-[40%] z-20
        flex flex-col items-center gap-2
    `}
>
    {#each notifications as notification}
        <NotificationCard {notification} />
    {/each}
</div>
