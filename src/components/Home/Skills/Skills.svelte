<script>

	import { skillClass, skills } from "$lib";
    import { t } from "../../../store";
	import Header from "../../Header.svelte";

</script>
<Header id="skills">{$t('section.skills.title')}</Header>

<div
    class={`
        w-[70%] lg:w-[55%] rounded 
        border-[1px] border-text 
        border-opacity-40 flex
        flex-row flex-wrap gap-4
        p-8 justify-center
    `}
>
    {#each skills as s}
        <span class={skillClass}>{s}</span>
    {/each}
</div>
