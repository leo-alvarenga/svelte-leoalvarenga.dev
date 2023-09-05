<script lang="ts">
	import { onMount } from "svelte";
    
    import { page } from "$app/stores";
	import { links, routesWithNoDec } from "$lib";
	import { getLocaleFromLocalStorage, setLocale } from "../store";
	import Footer from "../components/Layout/Footer.svelte";
    import Navbar from "../components/Layout/Navbar.svelte";
	import LocaleSelector from "../components/Layout/LocaleSelector.svelte";

    import '../app.css';

    $: innerWidth = 0;

    onMount(() => {
        setLocale(getLocaleFromLocalStorage());
    });

    $: decorationEnabled = !$page.error && !routesWithNoDec.includes($page.url.pathname);
</script>   

<svelte:head>
    <title>Leonardo Alvarenga - Software Engineer, Frontend Dev</title>
</svelte:head>

<svelte:window bind:innerWidth />

<LocaleSelector />

{#if decorationEnabled}
    <Navbar {links} {innerWidth} />
    
    <div class="flex flex-col h-full items-center gap-8 my-10 pt-10">
        <slot></slot>
    </div>
    
    <Footer />
{:else}
    <div class="flex flex-col h-full items-center gap-8 my-10 pt-10">
        <slot></slot>
    </div>
{/if}
