<script lang="ts">
	import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";
	import { t } from "../../../../store";

    export let tags: string[];
    export let inProgress: boolean | undefined = false;

    $: hasTooManyTags = tags.length > 3;
    $: slicedTags = hasTooManyTags ? [...tags.slice(3), '...'] : tags;
</script>

<div
    class={`
        absolute -top-6
        -left-2 list-none
        border border-text
        rounded-md bg-background
        transition-all duration-500
        group-hover:border-primary
        flex flex-row items-center
    `}
>
    {#each slicedTags as tag}
        <h5
            class={`
                px-2 py-1
                border-r group-hover:border-primary
                transition-all duration-500
                ${inProgress ? '' : 'last:border-r-0'}
            `}
        >
            {$t(tag)}
        </h5>    
    {/each}

    {#if inProgress}
        <span class="flex flex-row px-2 gap-2 items-center">
            <Fa icon={faPersonDigging} />
            
            <p>{$t('common.inProgress')}</p>
        </span>
    {/if}
</div>
