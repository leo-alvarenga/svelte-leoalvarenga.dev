<script lang="ts">
	import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";
	import { t } from "../../../../store";

    export let tags: string[];
    export let inProgress: boolean | undefined = false;

    $: hasTooManyTags = tags.length > 3;
    $: slicedTags = hasTooManyTags ? [...tags.slice(3), '...'] : tags;
</script>

<span
    class="project-card-decorator t">
    {#each slicedTags as tag}
        <h5
            class={`
                t project-card-decorator-tag
                ${inProgress ? '' : 'project-card-decorator-tag-alt'}
            `}
        >
            {$t(tag)}
        </h5>    
    {/each}

    {#if inProgress}
        <span class="project-card-decorator-in-progress">
            <Fa icon={faPersonDigging} />
            
            <p>{$t('common.inProgress')}</p>
        </span>
    {/if}
</span>

<style>
    .project-card-decorator {
        top: -1.5rem;
        left: -0.5rem;
        position: absolute;

        border-radius: 0.375rem;
        border: 1px solid var(--text);
        background-color: var(--background);

        display: flex;
        align-items: center;
        flex-direction: row;
    }

    .project-card-decorator-tag {
        padding: 0.25rem 0.5rem;
        border-right: 1px solid var(--text);
    }

    .project-card-decorator-tag-alt:last-child {
        border-right: none;
    }

    .project-card-decorator-in-progress {
        padding: 0 0.5rem;

        gap: 0.5rem;
        display: flex;
        align-items: center;
        flex-direction: row;
    }
</style>
