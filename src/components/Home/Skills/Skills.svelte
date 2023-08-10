<script>

	import { skills } from "$lib";
	import Header from "../../Header.svelte";

</script>
<Header id="skills">Skills</Header>

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
        <span class="p-2 rounded border-[1px] border-primary border-opacity-40">{s}</span>
    {/each}
</div>
