<script lang="ts">
    import Fa from 'svelte-fa';
	import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

	import { playlists } from "$lib/static/playlists";
    import { t } from '../../store';
	import Header from "../Header.svelte";
	import PlaylistCard from './PlaylistCard.svelte';
    import Subtitle from '../Subtitle.svelte';

    let current = 0;
    
    const disableButtons = playlists.length <= 1;
    let disableLeft = true;
    let disableRight = disableButtons || current === playlists.length - 1;

    function handleClick(index: number) {
        disableLeft = false;
        disableRight = false;

        if (index === playlists.length - 1) {
            disableRight = true;
        } else if (index === 0) {
            disableLeft = true;
        }

        current = index;
    }
</script>

<hgroup class="w-[80%] md:w-[70%] p-2 flex flex-col gap-8 items-center">
    <Header>{$t('page.more.playlist.title')}</Header>
    <Subtitle>{$t('page.more.playlist.subtitle')}</Subtitle>
</hgroup>

<div class="flex flex-row gap-4 w-full p-2 items-center justify-center">
    <button on:click={() => handleClick(current - 1)} disabled={disableButtons || disableLeft}>
        <Fa icon={faCircleChevronLeft} />
    </button>

    {#each playlists as playlist, i}
        <PlaylistCard {playlist} visible={current === i} />
    {/each}

    <button on:click={() => handleClick(current + 1)} disabled={disableButtons || disableRight}>
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
