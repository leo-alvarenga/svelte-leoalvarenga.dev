<script lang="ts">
	import { onMount } from "svelte";
    
    import { page } from "$app/stores";
	import { links, routesWithNoDec } from "$lib";
    import ogImage from '$lib/assets/OpenGraphImage.png';
    import ogImageSquare from '$lib/assets/OpenGraphImageSquare.png';
	import { getLocaleFromLocalStorage, setLocale } from "../store";
	import Footer from "../components/Layout/Footer.svelte";
    import Navbar from "../components/Layout/Navbar.svelte";
	import LocaleSelector from "../components/Layout/LocaleSelector.svelte";

    import '../app.css';

    onMount(() => {
        setLocale(getLocaleFromLocalStorage());
    });

    $: decorationEnabled = !$page.error && !routesWithNoDec.includes($page.url.pathname);
</script>   

<svelte:head>
    <title>Leonardo Alvarenga - Software Engineer, Frontend Dev</title>

    <meta property="og:title" content="Leonardo Alvarenga's portfolio" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://leoalvarenga.dev" />

    <meta property="og:image" content={ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="627" />
    <meta property="og:image:alt" content="leoalvarenga.dev" />

    <meta property="og:image" content={ogImageSquare} />
    <meta property="og:image:width" content="400" />
    <meta property="og:image:height" content="400" />
    <meta property="og:image:alt" content="leoalvarenga.dev" />
</svelte:head>

<LocaleSelector />

{#if decorationEnabled}
    <Navbar {links} />
    
    <div class="flex flex-col h-full items-center gap-8 my-10 pt-10">
        <slot></slot>
    </div>
    
    <Footer />
{:else}
    <div class="flex flex-col h-full items-center gap-8 my-10 pt-10">
        <slot></slot>
    </div>
{/if}

<style lang="postcss">
    :global(body) {
        margin: 0;
        padding: 0;

        display: flex;
        flex-direction: column;
        align-items: center;

        min-height: 100vh;

        background-color: theme(colors.background);
        color: theme(colors.text);

        user-select: none;
    }
</style>
