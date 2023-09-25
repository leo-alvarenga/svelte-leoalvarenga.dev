<script lang="ts">
	import { experience } from "$lib";
    import { t } from "../../../store";
	import Header from "../../Header.svelte";
	import XpCard from "./XpCard.svelte";

    let current = 0;

    function handleClick(n: number) {
        current = current === n ? -1 : n;
    }
</script>

<Header id="xp">{$t('section.experience.title')}</Header>

<div class="xp-wrapper">
    {#each experience as xp, i}
        <XpCard {xp} selected={i === current} on:click={() => handleClick(i)} />
    {/each}
</div>

<style>
    .xp-wrapper {
        display: flex;
        flex-direction: column;

        gap: 1rem;
        width: 90%;
        padding-left: 2rem;
        align-items: center;

        position: relative;
    }

    .xp-wrapper::before {
        content: '';
        position: absolute;
        background-color: var(--text);
        opacity: 0.4;

        left: 0;
        
        width: 1px;
        height: 100%;
    }

    @media (min-width: 1024px) {
        .xp-wrapper {
            width: 60%;
        }
    }
</style>
