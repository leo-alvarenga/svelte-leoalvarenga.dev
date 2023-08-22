<script lang="ts">
	import { faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";

    export let busy = false;
    export let onChange: (val: string) => void;

    let value = '';

    $: onChange && onChange(value);
</script>

<div class="relative justify-items-center flex flex-row gap-2 items-center bg-background px-2 py-1 border border-primary rounded-md">
    <Fa class={`opacity-40 ${busy ? 'animate-spin' : ''}`} icon={busy ? faSpinner : faSearch} />

    <input
        bind:value
        placeholder="Type in..."
        type="text"
        name="searchbar"
        class={`
            text-text bg-background 
            outline-none
        `}
    />
</div>
