<script lang="ts">
    import { onMount } from 'svelte';

    import Fa from 'svelte-fa';
	import { faSpotify } from '@fortawesome/free-brands-svg-icons';
	import { faCircleChevronLeft, faCircleChevronRight, faExclamationCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';

	import { playlists } from "$lib/static/playlists";
    import { t } from '../../store';
	import Header from "../Header.svelte";

    let last = 0
    let current = last;
    let loading = true;
    let errors: boolean[] = [];
    
    const disableButtons = playlists.length <= 1;

    $: playlist = playlists[current];
    $: currentHasError = errors[current];
    $: {
        loading = !errors[current] && playlists[last].src !== playlist.src;
    }

    function handleClick(index: number) {
        let val = 0;

        if (index < 0) {
            val = playlists.length - 1;
        } else if (index < playlists.length) {
            val = index;
        }

        last = current;
        current = val;
    }

    function handleLoad() {
        loading = false;
    }

    onMount(async () => {
        loading = true;
        const res = await Promise.all(playlists.map(({ src }) => fetch(src, { mode: 'no-cors' })));

        res.forEach(({ status }) => {
            errors.push(status > 204);
        });

        loading = false;
        currentHasError = errors[0];
    });
</script>

<Header mt={false}>{$t('page.more.playlist.title')}</Header>
<span class="text-md opacity-40 -mt-4">{$t('page.more.playlist.subtitle')}</span>

<div class="flex flex-row gap-4 w-full items-center">
    <button on:click={() => handleClick(current - 1)} disabled={disableButtons}>
        <Fa icon={faCircleChevronLeft} />
    </button>

    <section
        class={`
            h-[360px] w-[80vw] md:w-[60vw] lg:w-[40vw]
            flex flex-col gap-4 items-center justify-center
            rounded-lg bg-background relative
        `}
    >
        {#if currentHasError}
            <Fa class="text-6xl" icon={faExclamationCircle} />
            <span>{$t('page.error.404.subheader')}</span>
        {:else}
            <!-- svelte-ignore a11y-missing-attribute -->
            <iframe
                width="100%"
                height="100%"
                loading="eager"
                frameBorder="0"
                src={playlist.src}
                on:load={handleLoad}
                allowfullscreen={false}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
        {/if}

        {#if loading}
            <span class="absolute top-0 left-0 flex flex-col gap-4 w-full h-full items-center justify-center">
                <Fa class="text-6xl opacity-40" icon={faSpotify} />
                <Fa class={`opacity-40 animate-spin text-4xl`} icon={faSpinner} />
            </span>
        {/if}
    </section>

    <button on:click={() => handleClick(current + 1)} disabled={disableButtons}>
        <Fa icon={faCircleChevronRight} />
    </button>
</div>

<style>
    button {
        @apply w-fit h-fit text-4xl transition-all duration-500;
    }

    button:disabled {
        @apply opacity-40;
    }
</style>
