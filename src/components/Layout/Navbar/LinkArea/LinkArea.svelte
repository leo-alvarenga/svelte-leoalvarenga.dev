<script lang="ts">
	import type { NavbarLink } from "$lib/types";

    export let links: NavbarLink[] = [];
</script>

<ul
    class={`
        group
        flex flex-row 
        list-none gap-4
        justify-between text-md
        m-0 p-0 w-full
        
        lg:text-lg lg:ml-auto
        lg:gap-16 mobile
    `}
>
    {#each links as { title, href }}
        <a
            class={`
                transition group-hover:opacity-60
                hover:animate-nav hover:!opacity-100
                hover:text-text
            `}
            {href}
        >
            {`// ${title.toLowerCase()}_`}
        </a>
    {/each}
</ul>

<style>
    @media (min-width: 1100px) {
        .mobile {
            width: unset;
        }
    }
</style>
