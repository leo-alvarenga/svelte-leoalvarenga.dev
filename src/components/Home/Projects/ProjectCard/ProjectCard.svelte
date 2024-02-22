<script lang="ts">
	import { t } from "../../../../store";
	import Tag from "../../../Tag.svelte";
	import type { Project } from "$lib";
    import code from "$lib/assets/bg-code.png";

	import ProjectDecorator from "./ProjectDecorator.svelte";
	import ProjectActions from "./ProjectActions.svelte";

    export let index: number;
    export let project: Project;
    let { thumbnail, title, inProgress, info, tags, stack, preview, repo } = project;

    $: span = index > 0 && index % 3 === 0 ? 'md:row-span-2' : '';
</script>

<div
    class={`
        relative group
        p-4 flex flex-col gap-2
        border border-text
        rounded-md ${span}
        transition-all duration-500
        hover:border-primary
    `}
>
    <ProjectDecorator {inProgress} {tags} />

    <span class={`${thumbnail ? '' : 'relative'} h-36 overflow-hidden rounded-md`}>
        <img
            alt={title}
            src={thumbnail ?? code}
            class={`
                ${thumbnail ? '' : 'blur-[2px]'}
                w-full -mt-24 transition-all
                duration-500 group-hover:scale-125
            `}
        />
    </span>
    
    <h4
        class={`
            relative w-fit p-1 mb-2
            font-bold text-2xl
            after:bg-gradient-to-r
            after:from-primary
            after:to-blueLight after:absolute
            after:left-0 after:bottom-1
            after:w-full after:h-[5%] after:z-10
        `}
    >
        {$t(title)}
    </h4>

    <p>{$t(info)}</p>

    <div class="w-[90%] flex flex-row gap-2 flex-wrap">
        {#each stack as tech}
            <Tag className="text-sm">
                {`#${$t(tech)}`}
            </Tag>
        {/each}
    </div>

    <ProjectActions {preview} {repo} />
</div>
