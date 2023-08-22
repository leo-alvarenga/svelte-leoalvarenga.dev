<script lang="ts">
	import Fa from "svelte-fa";
	import { faGrip, faList } from "@fortawesome/free-solid-svg-icons";

    import type { ViewMode } from "$lib";

    export let viewMode: ViewMode = 'GRID';
    export let onChange = (_: ViewMode) => {};

    const viewClass = 'p-2 border rounded-md transition-all duration-500';
    const activeClass = 'border-primary hover:opacity-40 hover:border-text';
    const defaultClass = 'hover:border-primary';

    $: className = (target: ViewMode) => target === viewMode ? activeClass : defaultClass;
</script>

<span class="flex flex-row gap-1">
    <button class={`${viewClass} ${className('GRID')}`} on:click={() => onChange('GRID')}>
        <Fa icon={faGrip} />
    </button>
    <button class={`${viewClass} ${className('LIST')}`} on:click={() => onChange('LIST')}>
        <Fa icon={faList} />
    </button>
</span>
