<script lang="ts">
    import error404 from '$lib/assets/undraw_404.svg';
	import type { Project } from '$lib';

    import { t } from '../../../store';
    import ProjectCard from "./ProjectCard/ProjectCard.svelte";

    export let data: Project[];
</script>

{#if data.length}
    <div class="project-grid">
        {#each data as project, index (project.title)}
            <ProjectCard {project} {index} />
        {/each}
    </div>
{:else}
    <div class="project-grid-empty">
        <img
            width="256"
            src={error404}
            alt="Not found"
        />

        <h4>{$t('common.notFound')}</h4>
    </div>
{/if}

<style>
    .project-grid {
        gap: 2rem;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }

    .project-grid-empty {
        gap: 2rem;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .project-grid-empty img {
        margin-top: 3rem;
    }

    .project-grid-empty h4 {
        font-size: 1.125rem;
        line-height: 1.75rem;
    }

    @media (min-width: 768px) {
        .project-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    @media screen and (min-width: 1024px) {
        .project-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    }
</style>
