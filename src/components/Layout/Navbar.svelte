<script lang="ts">
	import type { NavbarLink } from "$lib";
    import { t } from "../../store";

    export let links: NavbarLink[] = [];

    const fmtLinkTitle = (link: string) => (`${$t(link).toLowerCase()}_`);
</script>

<nav
    class={`
        w-[100vw] flex flex-row
        list-none gap-4
        justify-between text-xs
        m-0 p-2 bg-light bg-opacity-40
        fixed top-0 z-30 items-center
        backdrop-filter backdrop-blur-lg
        border-b border-b-light
        
        sm:text-sm
        md:text-lg lg:ml-auto
        lg:gap-16 lg:justify-center
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
    {#each links as { title, href }}
        <a
            class={`
                transition hover:animate-nav
            `}
            {href}
        >
            {fmtLinkTitle(title)}
        </a>
    {/each}
</nav>
