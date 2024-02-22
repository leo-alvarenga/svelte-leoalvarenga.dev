<script lang="ts">
	import Fa from "svelte-fa";
	import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

    import type { NavbarLink } from "$lib";
    import { t } from "../../store";

    export let innerWidth: number;
    export let links: NavbarLink[] = [];

    export let openMenu = false;

    function handleMenu() {
        openMenu = !openMenu;
    }

    $: smallVersion = innerWidth < 900;
</script>

<nav
    class={`
        navbar
        ${smallVersion ? 'navbar-sm' : ''}
    `}
>
    <a class="nav-link nav-brand" href="/">
        {'</>'}
    </a>

    {#if smallVersion}
        <button
            on:click={handleMenu}
            class="nav-sm-menu-button"
        >
            <Fa
                icon={openMenu ? faXmark : faBars}
                class="t"
            />
            <div
                class={`
                    nav-sm-menu
                    ${openMenu ? 'nav-sm-menu-open' : 'nav-sm-menu-closed'}
                    t
                `}
            >
                {#each links as { title, href }}
                    <a
                        class="nav-link"
                        {href}
                    >
                        {`${$t(title).toLowerCase()}_`}
                    </a>
                {/each}
            </div>
        </button>
    {:else}
        {#each links as { title, href }}
            <a class="nav-link" {href}>
                {`${$t(title).toLowerCase()}_`}
            </a>
        {/each}
    {/if}
</nav>

<style>
    @keyframes glitch2 {
        0% {
            text-shadow: none;
            color: #f2f5f7 !important;
        }
        10% {
            transform: skew(10deg);
            font-stretch: ultra-expanded;
            color: #f2f5f7 !important;
        }
        20% {
            transform: skew(-10deg);
            color: #f2f5f7 !important;
        }
        25% {
            text-shadow: 0.125rem 0.125rem #ff0a78;
            color: #f2f5f7 !important;
        }
        50% {
            text-shadow: 0.5rem 0.125rem #ff0a78, -1rem -0.5rem #4a67f7;
            color: #f2f5f7 !important;
        }
    }

    .navbar {
        width: 100vw;
        position: fixed;

        top: 0;
        margin: 0;
        z-index: 30;
        padding: 0.5rem;

        backdrop-filter: blur(16px);
        border-bottom: 1px solid var(--light);
        background-color: rgb(var(--light-rgb) / 0.4);

        gap: 1rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;

        list-style: none;
        font-size: 1.25rem;
        line-height: 1.75rem;
    }

    .nav-link {
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
    }

    .nav-link:hover {
        animation: glitch2 1s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .nav-brand {
        margin: 0;
        font-weight: 700;
        text-align: center;
        font-family: Share Tech Mono, monospace;
    }

    .nav-sm-menu {
        position: absolute;
        left: 0;
        top: 3.5rem;

        gap: 1rem;
        display: flex;
        min-width: 150px;
        flex-direction: column;

        overflow: hidden;
        backdrop-filter: blur(16px);
        border: 0px solid var(--light);
        background-color: rgb(var(--light-rgb) / 0.4);
    }

    .nav-sm-menu-open {
        padding: 1rem;
        border-width: 1px;
        max-height: 16rem;
    }

    .nav-sm-menu-closed {
        max-height: 0px;
    }

    .nav-sm-menu-button {
        padding: 0.5rem;
        border-radius: 0.25rem;
        border: 1px solid var(--light);
    }

    .t {
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 500ms;
    }

    .nav-sm-menu-button:hover .nav-sm-menu-icon {
        opacity: 0.4;
    }

    .navbar-sm {
        padding: 0.5rem 1.5rem;
    }

    @media (min-width: 1024px) {
        .navbar {
            gap: 4rem;
            justify-content: center;
        }

        .navbar-sm {
            flex-direction: row-reverse;
            padding: 3.5rem 0;
        }
    }
</style>
