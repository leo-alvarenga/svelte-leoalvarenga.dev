<script lang="ts">
	import type { Experience } from "$lib";
	import { faAngleDown, faArrowUpRightFromSquare, faLocationDot } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";

    export let xp: Experience;
    export let selected = false;
</script>

<div
    class={`
        flex flex-col items-start
        w-full border p-4
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
        <button 
            on:click
            class={`
                transition-all duration-500 transform
                ${selected ? '-rotate-90' : 'rotate-0'}
            `}
        >
            <Fa icon={faAngleDown} />
        </button>
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
            <span class="opacity-60 w-full flex flex-col lg:flex-row gap-2">
                <span class="flex flex-row gap-2 items-center">
                    <Fa icon={faLocationDot} />
                    {xp.place.location}
                </span>
                <a class="flex flex-row gap-1 items-center italic" href={xp.place.page}>
                    {xp.place.page.split('//')[1]}
                    <Fa icon={faArrowUpRightFromSquare} />
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
