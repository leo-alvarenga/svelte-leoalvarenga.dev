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
        w-[100vw] flex flex-row
        list-none gap-4 flex-wrap
        justify-between text-xl
        fixed top-0 z-30 items-center
        m-0 p-2 bg-light bg-opacity-60
        backdrop-filter backdrop-blur-lg
        border-b border-b-light
        lg:gap-16 lg:justify-center
        ${smallVersion ? 'flex-row-reverse px-14' : ''}
    `}
>
    <a
        class={`
            text-center
            font-brand m-0 font-bold
            hover:text-text active:text-text
            hover:animate-nav active:animate-nav
        `}
        href="/"
    >
        {'</>'}
    </a>

    {#if smallVersion}
        <button
            on:click={handleMenu}
            class="p-2 rounded border border-light group"
        >
            <Fa
                icon={openMenu ? faXmark : faBars}
                class={`
                    group-hover:opacity-40
                    transition-all duration-500
                `}
            />
            <div
                class={`
                    absolute top-14 left-0
                    flex flex-col min-w-[150px]
                    gap-4 bg-light bg-opacity-95
                    backdrop-filter backdrop-blur-lg
                    border-light overflow-hidden
                    ${openMenu ? 'max-h-64 p-4 border' : 'max-h-0 border-0'}
                    transition-all duration-500
                `}
            >
                {#each links as { title, href }}
                    <a
                        class={`
                            transition hover:animate-nav
                        `}
                        {href}
                    >
                        {`${$t(title).toLowerCase()}_`}
                    </a>
                {/each}
            </div>
        </button>
    {:else}
        {#each links as { title, href }}
            <a
                class={`
                    transition hover:animate-nav
                `}
                {href}
            >
                {`${$t(title).toLowerCase()}_`}
            </a>
        {/each}
    {/if}
</nav>
