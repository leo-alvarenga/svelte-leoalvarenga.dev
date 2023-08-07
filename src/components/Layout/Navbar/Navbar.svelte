<script lang="ts">
	import type { NavbarLink } from "$lib";
	import LinkArea from "./LinkArea/LinkArea.svelte";

    export let links: NavbarLink[] = [];
</script>

<nav
    class={`
        flex items-center
        justify-center py-4 pb-0 px-2 gap-1
        flex-col-reverse w-full relative

        lg:flex-row lg:flex-wrap
        lg:w-full lg:px-16 lg:mt-4
        lg:gap-8
    `}
>
    <a
        class={`
            brand text-center
            text-[1000%]
            font-brand m-0 font-bold
            hover:text-text active:text-text
            hover:animate-brand active:animate-brand
        `}
        href="/"
    >
        {'</>'}
    </a>

    <LinkArea {links} />
</nav>

<style lang="postcss">
    .brand:hover, .brand:active {
        text-shadow: theme(scale.50)rem theme(scale.50)rem theme(colors.primary), theme(scale.100)rem theme(scale.100)rem theme(colors.accentDark2);
    }
</style>
