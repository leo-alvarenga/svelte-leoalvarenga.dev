<script lang="ts">
    import Navbar from "../components/Layout/Navbar.svelte";
	import Footer from "../components/Layout/Footer.svelte";
	import type { NavbarLink } from "../lib";

    import '../app.css';

    const links: NavbarLink[] = [
        {
            title: 'Home',
            href: '/',
        },
        {
            title: 'Expertise',
            href: '#expertise',
        },
        {
            title: 'Experience',
            href: '#xp',
        },
        {
            title: 'Skills',
            href: '#xp',
        },
        {
            title: 'Contact',
            href: '#xp',
        }
    ];
</script>

<svelte:head>
    <title>Leonardo Alvarenga - Software Engineer, Frontend Dev</title>
</svelte:head>

<Navbar {links} />
<div class="flex flex-col h-full items-center gap-8 my-10 pt-10">
    <slot></slot>
</div>
<Footer />

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

    :global(a, a:visited, a:hover, a:active) {
        text-decoration: none;
        cursor: pointer;

        color: theme(colors.text);
        -webkit-transition: all 550ms ease-out;
        -moz-transition: all 550ms ease-out;
        -o-transition: all 550ms ease-out;
        transition: all 550ms ease-out;
    }

    :global(a:active, a:hover) {
        color: theme(colors.primary);
    }
</style>
