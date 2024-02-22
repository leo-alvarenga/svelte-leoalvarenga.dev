<script>
	import { skills } from "$lib";

    import { t } from "../../../store";
	import Header from "../../Header.svelte";
	import Tag from "../../Tag.svelte";
</script>

<Header id="skills">{$t('section.skills.title')}</Header>

<div
    class={`
        w-[90%] lg:w-[55%] rounded 
        border-[1px] border-text 
        border-opacity-40 flex
        flex-row flex-wrap gap-4
        p-4 md:p-8 justify-center
    `}
>
    {#each skills as s}
        <Tag>{s}</Tag>
    {/each}
</div>
