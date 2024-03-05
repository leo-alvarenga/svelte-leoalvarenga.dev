<script lang="ts">
	import type { Media } from "$lib";
	import { faImdb } from "@fortawesome/free-brands-svg-icons";
	import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";

    export let media: Media;
    
    let reveal = false;
    let currPreview = 0;
    
    $: preview = media.previews ? media.previews[currPreview % media.previews.length] : media.cover;

    function toggle() {
        if (!reveal) currPreview = currPreview + 1;

        reveal = !reveal;
    }

    function handleHover(over: boolean) {
        if (!over) currPreview = currPreview + 1;

        reveal = over;
    }
</script>

<li class="max-w-full md:max-w-[50%] overflow-hidden border border-light rounded-md">
    <button
        on:click={toggle}
        on:mouseleave={() => handleHover(false)}
        on:mouseenter={() => handleHover(true)}
        class={`
            relative w-full h-[400px] flex items-center justify-center overflow-visible
        `}
    >
    
        
        <img
            alt={media.title}
            class={`absolute z-20 transition-all duration-500 ${reveal ? 'opacity-100' : 'opacity-0'} ${media.previews ? '' : 'h-[80%]'}`}
            src={preview}
        />
    
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <img
            alt={media.title}
            src={media.cover}
            class={`h-full transition-all duration-500 ${reveal ? 'blur-sm' : ''}`}
        />

        <a
            target="_blank"
            href={media.href}
            class={`
                absolute right-0 bottom-0
                flex flex-row flex-nowrap w-full gap-2
                items-center justify-end opacity-90
                p-1 overflow-hidden bg-background
                bg-opacity-60 backdrop-filter
                backdrop-blur-lg border-t border-light
            `}
        >
            <Fa class="ml-auto text-2xl" icon={faImdb} />
            <span class="text-ellipsis overflow-hidden whitespace-nowrap">
                {media.title}
            </span>
            <Fa icon={faArrowUpRightFromSquare} />
        </a>
    </button>
</li>
