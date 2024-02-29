<script lang="ts">
	import { onMount } from "svelte";
    
    import { page } from "$app/stores";

	import { links, routesWithNoDec } from "$lib";
    import bgCode from "$lib/assets/bg-code.png";

	import { getCookieConfigFromLocalStorage, getLocaleFromLocalStorage, getNotificationInfoFromLocalStorage, setAllowCookies, setLocale, setNotificationStatus, visibleNotifications } from "../store";
	import Footer from "../components/Layout/Footer.svelte";
    import Navbar from "../components/Layout/Navbar.svelte";

    import '../app.css';
	import FloatingArea from "../components/Layout/FloatingArea/FloatingArea.svelte";

    let innerWidth: number;

    onMount(() => {
        setLocale(getLocaleFromLocalStorage());
        setAllowCookies(getCookieConfigFromLocalStorage());
        setNotificationStatus(getNotificationInfoFromLocalStorage());
    });

    $: bgImgClass = $page.error || $page.url.pathname === '/links' ? 'max-h-[80vh] top-[10%]' : '';
    $: decorationEnabled = !$page.error && !routesWithNoDec.includes($page.url.pathname);
</script>

<svelte:head>
    <title>Leonardo Alvarenga - Software Engineer, Frontend Dev</title>
</svelte:head>

<svelte:window bind:innerWidth />

<FloatingArea notifications={$visibleNotifications} />

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
