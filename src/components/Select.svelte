<script lang="ts">
	import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";

    import { t } from "../store";
	import Checkbox from "./Checkbox.svelte";

    export let title = '';
    export let className = '';
    export let multiple = false;
    export let value: number[] = [];
    export let options: string[] = [];
    export let onChange = (_: number[]) => {};

    let open = false;

    function handleOpen() {
        open = !open;
    }

    function handleChange(option: number) {
        if (!multiple) {
            const updated = value.length && value[0] === option ? [] : [option];

            value = updated;
            onChange(updated);

            return;
        }

        const v = value.includes(option);
        
        const updated = v ? value.filter((val) => val !== option) : [...value, option];

        value = updated;
        onChange(updated);
    }
</script>

<span class="relative">
    <button
        class={`
            border border-primary rounded-md
            py-1 px-2 min-w-[4rem]
            flex flex-row gap-2 ${className}
            items-center
        `}
        on:click={handleOpen}
    >
        {#if value.length && value[0] >= 0}
            <span class="flex flex-row gap-2 overflow-hidden">
                <span class="overflow-hidden text-ellipsis">
                    {$t(options[value[0]])}
                </span>

                {#if value.length > 1 && multiple}
                    <span class="flex items-center p-1 rounded-md text-xs border border-primary">{`+${value.length - 1}`}</span>
                {/if}
            </span>
        {:else}
            {$t(title)}
        {/if}
        <Fa class={`ml-auto text-xs transition-all duration-500 ${open ? '-rotate-90' : 'rotate-0'}`} icon={faAngleDown} />
    </button>

    <span
        class={`
            border border-primary rounded-md
            absolute flex flex-col items-start
            w-full px-2
            max-h-0 overflow-hidden mt-1
            transition-all duration-500
            ${open ? 'py-1 max-h-fit' : 'opacity-0'}
        `}
    >
        {#each options as label, index}
            <button
                on:click={() => handleChange(index)}
                class={`
                    w-full text-start overflow-hidden
                    flex flex-row gap-1 items-center
                `}
            >
                {#if multiple}
                    <Checkbox checked={value.includes(index)} />
                {/if}

                <span class="max-w-[80%] overflow-hidden text-ellipsis">
                    {$t(label)}
                </span>
            </button>
        {/each}
    </span>
</span>
