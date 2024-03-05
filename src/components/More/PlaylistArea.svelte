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

    function handleClick(index: number) {
        let val = 0;

        if (index < 0) {
            val = playlists.length - 1;
        } else if (index < playlists.length) {
            val = index;
        }

        current = val;
    }
</script>

<Header>{$t('page.more.playlist.title')}</Header>
<Subtitle>{$t('page.more.playlist.subtitle')}</Subtitle>

<div class="flex flex-row gap-4 w-full p-2 items-center justify-center">
    <button on:click={() => handleClick(current - 1)} disabled={disableButtons}>
        <Fa icon={faCircleChevronLeft} />
    </button>

    {#each playlists as playlist, i}
        <PlaylistCard {playlist} visible={current === i} />
    {/each}

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
