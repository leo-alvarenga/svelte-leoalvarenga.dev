<script lang="ts">
	import { experience } from "$lib";
	import Header from "../../Header.svelte";
	import XpCard from "./XpCard.svelte";

    let current = 0;

    function handleClick(n: number) {
        current = current === n ? -1 : n;
    }
</script>

<Header id="xp">Work Experience</Header>

<div
    class={`
        flex flex-col relative
        items-center w-[80%]
        md:w-[50%] gap-4 pl-8
        before:absolute before:h-full
        before:w-[1px] before:bg-text
        before:opacity-40 before:left-0
    `}
>
    {#each experience as xp, i}
        <XpCard {xp} selected={i === current} on:click={() => handleClick(i)} />
    {/each}
</div>
