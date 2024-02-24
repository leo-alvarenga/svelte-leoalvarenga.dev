<script lang="ts">
	import { onMount } from "svelte";
    
    import { page } from "$app/stores";

	import { links, routesWithNoDec } from "$lib";
    import bgCode from "$lib/assets/bg-code.png";

	import { getLocaleFromLocalStorage, setLocale } from "../store";
	import Footer from "../components/Layout/Footer.svelte";
    import Navbar from "../components/Layout/Navbar.svelte";
	import LocaleSelector from "../components/Layout/LocaleSelector.svelte";

    import '../app.css';

    let innerWidth: number;

    onMount(() => {
        setLocale(getLocaleFromLocalStorage());
    });

    $: bgImgClass = $page.error || $page.url.pathname === '/links' ? 'max-h-[80vh] top-[10%]' : '';
    $: decorationEnabled = !$page.error && !routesWithNoDec.includes($page.url.pathname);
</script>   

<svelte:head>
    <title>Leonardo Alvarenga - Software Engineer, Frontend Dev</title>
</svelte:head>

<svelte:window bind:innerWidth />

<LocaleSelector />

<img 
	class={`absolute w-[80%] left-[20%] opacity-60 -z-10 blur-sm ${bgImgClass}`}
	src={bgCode}
	alt="bg-code-img"
/>

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
