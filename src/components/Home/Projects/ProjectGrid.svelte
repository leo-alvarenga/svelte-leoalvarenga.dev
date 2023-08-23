<script lang="ts">
    import error404 from '$lib/assets/undraw_404.svg';
	import type { Project } from "$lib";

    import { t } from '../../../store';
    import ProjectCard from "./ProjectCard/ProjectCard.svelte";

    export let data: Project[];
</script>

{#if data.length}
    <div class={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`}>
        {#each data as project, index (project.title)}
            <ProjectCard {project} {index} />
        {/each}
    </div>
{:else}
    <div class="w-full flex flex-col items-center gap-8">
        <img 
            class="h-64 mt-12"
            src={error404}
            alt="Not found"
        />

        <h4 class="text-lg">{$t('common.notFound')}</h4>
    </div>
{/if}
