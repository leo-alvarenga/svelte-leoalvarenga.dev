<script>
	import { media } from "$lib";
	import { t } from "../../store";
	import Header from "../Header.svelte";
	import Subtitle from "../Subtitle.svelte";
	import MediaCard from "./MediaCard.svelte";
</script>

<hgroup class="w-[80%] md:w-[70%] p-2 flex flex-col gap-8 items-center">
    <Header>{$t('page.more.media.title')}</Header>
    <Subtitle>{$t('page.more.media.subtitle')}</Subtitle>
</hgroup>

<ul
    class={`
        -mt-4 list-none w-full
        items-center justify-center
        p-4 flex flex-row
        flex-wrap gap-8
    `}
>
    {#each media as m}
        <MediaCard media={m} />
    {/each}
</ul>
