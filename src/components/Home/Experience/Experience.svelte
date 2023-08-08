<script lang="ts">
	import { experience } from "$lib";
	import XpCard from "./XpCard.svelte";

    let auto = true;
    let current = 0;
    let timer: NodeJS.Timeout | undefined = undefined;

    function handleClick(n: number) {
        auto = false;
        current = current === n ? -1 : n;
    }

    $: {
        if (timer) clearTimeout(timer);
        if (auto) timer = setTimeout(() => {
            if (current === experience.length - 1) {
                current = 0;
                return;
            }

            current = current + 1;
        }, 8000);
    };
</script>

<h1 id="xp" class="mt-20 font-major text-2xl md:text-4xl">Work Experience</h1>

<div
    class={`
        flex flex-col relative
        items-center w-full
        md:w-[60%] gap-4 pl-8
        before:absolute before:h-full
        before:w-[1px] before:bg-text
        before:opacity-40 before:left-0
    `}
>
    {#each experience as xp, i}
        <XpCard {xp} selected={i === current} on:click={() => handleClick(i)} />
    {/each}
</div>
