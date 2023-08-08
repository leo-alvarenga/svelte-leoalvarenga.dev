<script>

	import { skills } from "$lib";

</script>
<h1 id="skills" class="mt-20 font-major text-2xl md:text-4xl">Skills</h1>

<div
    class={`
        w-[70%] rounded 
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
