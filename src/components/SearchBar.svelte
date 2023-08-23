<script lang="ts">
	import { faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";
	import { t } from "../store";

    export let busy = false;
    export let placeholder = '';
    export let className = '';
    export let onChange: (val: string) => void;

    let border = 'border-text';

    let value = '';

    function applyBorder(focus?: boolean) {
        border = focus ? 'border-primary' : 'border-text'
    }
</script>

<div
    class={`
        relative justify-items-center
        flex flex-row gap-2 items-center
        bg-background px-2 py-1 border
        border-primary rounded-md
        ${border} ${className}
    `}
>
    <Fa class={`opacity-40 ${busy ? 'animate-spin' : ''}`} icon={busy ? faSpinner : faSearch} />

    <input
        bind:value
        type="text"
        name="searchbar"
        placeholder={$t(placeholder)}
        on:focus={() => applyBorder(true)}
        on:focusout={() => applyBorder()}
        on:input={() => onChange(value)}
        class={`
            text-text bg-background 
            outline-none self-stretch
            w-full
        `}
    />
</div>
