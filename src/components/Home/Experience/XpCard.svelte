<script lang="ts">
	import type { Experience } from "$lib";

    export let xp: Experience;
    export let selected = false;
</script>

<div
    class={`
        flex flex-col items-start
        w-full border-[1px] p-4
        border-text rounded
        relative before:absolute
        before:top-[50%] before:-left-9
        before:rounded-full before:w-2
        before:h-2 before:bg-primary
    `}
>
    <div class="flex flex-row gap-4 w-full text-lg">
        <h3><span class="font-bold">{xp.name}</span>{` @ ${xp.place.name}`}</h3>

        <span class="ml-auto italic">{xp.time}</span>
        <button on:click class={selected ? 'transform -rotate-90' : ''}>v</button>
    </div>

    <div
        class={`
            max-h-0 overflow-hidden
            duration-500 transition-all
            ${selected ? 'max-h-80 mt-2' : ''}
            flex flex-row gap-4 w-full justify-center
        `}
    >
        <div class="flex flex-col items-start w-[90%] gap-4">
            <span class="opacity-60 w-full">
                {xp.place.location}
                <a href={xp.place.page}>
                    {xp.place.page.split('//')[1]}
                </a>
            </span>
            <p>
                {xp.info}
            </p>
            <div class="flex flex-row flex-wrap overflow-hidden w-full gap-2">
                {#each xp.stack as tech}
                    <span
                        class={`
                            p-2 rounded 
                            border-[1px] border-primary 
                            border-opacity-60
                        `}
                    >
                        {tech}
                    </span>
                {/each}
            </div>
        </div>
        <img class="w-20 h-20 ml-auto" src={xp.place.icon} alt={`${xp.place.name}'s logo`} />
    </div>
</div>
