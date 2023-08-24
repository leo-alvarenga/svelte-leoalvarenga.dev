<script lang="ts">
    import { faAngleDown, faArrowUpRightFromSquare, faLocationDot } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";
    
	import type { Experience } from "$lib";
    import { t } from "../../../store";
	import Link from "../../Link.svelte";
	import Tag from "../../Tag.svelte";

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
    <div
        class="flex flex-row flex-wrap gap-4 w-full text-lg sm:text-md items-center"
        role="button"
        tabindex="0"
        on:keypress
        on:click
    >
        <h3><span class="font-bold">{$t(xp.name)}</span>{` @ ${$t(xp.place.name)}`}</h3>

        <span class="ml-auto flex flex-row gap-2 items-center w-full md:w-auto">
            <span class="italic min-w-fit">{xp.time}</span>
            <Fa
                class={`
                    ml-auto transition-all duration-500 transform
                    ${selected ? '-rotate-90' : 'rotate-0'}
                `}
                icon={faAngleDown}
            />
        </span>
    </div>

    <div
        class={`
            max-h-0 overflow-hidden
            duration-500 transition-all
            ${selected ? 'max-h-[3000px] mt-2' : ''}
            flex flex-col-reverse lg:flex-row gap-8 w-full
        `}
    >
        <div class="flex flex-col items-start w-auto gap-4">
            <span class="opacity-60 w-full flex flex-row flex-wrap gap-2">
                <span class="flex flex-row gap-2 items-center">
                    <Fa class="text-primary" icon={faLocationDot} />
                    {$t(xp.place.location)}
                </span>
                <Link className="flex flex-row gap-1 items-center italic" href={xp.place.page}>
                    {xp.place.page.split('//')[1]}
                    <Fa icon={faArrowUpRightFromSquare} />
                </Link>
            </span>

            <p>{$t(xp.info)}</p>

            <div class="flex flex-row flex-wrap overflow-hidden w-full gap-2">
                {#each xp.stack as tech}
                    <Tag>{tech}</Tag>
                {/each}
            </div>
        </div>

        <img class="w-52 h-52 lg:ml-auto" src={xp.place.icon} alt={`${xp.place.name}'s logo`} />
    </div>
</div>
