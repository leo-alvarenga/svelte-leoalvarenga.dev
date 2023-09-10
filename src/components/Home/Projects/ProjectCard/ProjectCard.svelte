<script lang="ts">
	import { t } from "../../../../store";
	import Tag from "../../../Tag.svelte";
	import type { Project } from "$lib";
    import code from "$lib/assets/bg-code.png";

    import './styles.css';
	import ProjectDecorator from "./ProjectDecorator.svelte";
	import ProjectActions from "./ProjectActions.svelte";

    export let index: number;
    export let project: Project;
    let { thumbnail, title, inProgress, info, tags, stack, preview, repo } = project;

    $: span = index > 0 && index % 3 === 0 ? 'project-card-md' : '';
</script>

<div
    class={`
        project-card
        t
        ${span}
    `}
>
    <ProjectDecorator {inProgress} {tags} />

    <span class={`project-card-thumb ${thumbnail ? '' : 'project-card-thumb-blur'}`}>
        <img
            alt={title}
            src={thumbnail ?? code}
            class="t"
        />
    </span>
    
    <h4 class="project-card-title">
        {$t(title)}
    </h4>

    <p>{$t(info)}</p>

    <div class="project-card-stack">
        {#each stack as tech}
            <Tag>
                {`#${$t(tech)}`}
            </Tag>
        {/each}
    </div>

    <ProjectActions {preview} {repo} />
</div>
