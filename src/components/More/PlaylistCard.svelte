<script lang="ts">
	import { afterUpdate, beforeUpdate, onMount } from "svelte";
    import Fa from "svelte-fa";
	import { faSpotify } from "@fortawesome/free-brands-svg-icons";
	import { faExclamationCircle, faSpinner } from "@fortawesome/free-solid-svg-icons";
    
    import { t } from '../../store';
	import type { Playlist } from "$lib";

    export let visible = false;
    export let playlist: Playlist;

    let ready = false;
    let error = false;
    let loading = true;

    function handleLoad() {
        loading = false;
    }

    afterUpdate(async () => {
        if (ready) return;

        const { status } = await fetch(playlist.src, { mode: 'no-cors' });
        error = status > 204;

        ready = true;
    });
</script>

<section
    class={`
        h-[360px] w-[80vw] md:w-[60vw] lg:w-[40vw]
        ${visible ? 'flex' : 'hidden'}
        flex-col gap-4 items-center justify-center
        rounded-lg bg-background relative
    `}
>
    {#if error}
        <Fa class="text-6xl" icon={faExclamationCircle} />
        <span>{$t('page.error.404.subheader')}</span>
    {:else if ready}
        <!-- svelte-ignore a11y-missing-attribute -->
        <iframe
            width="100%"
            height="100%"
            loading="lazy"
            frameBorder="0"
            src={playlist.src}
            on:load={handleLoad}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
    {/if}

    {#if loading && !error}
        <span class="absolute top-0 left-0 flex flex-col gap-4 w-full h-full items-center justify-center">
            <Fa class="text-6xl opacity-40" icon={faSpotify} />
            <Fa class={`opacity-40 animate-spin text-4xl`} icon={faSpinner} />
        </span>
    {/if}
</section>