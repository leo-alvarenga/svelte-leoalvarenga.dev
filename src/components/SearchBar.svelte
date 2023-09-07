<script lang="ts">
	import { faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";
	import { t } from "../store";

    export let busy = false;
    export let placeholder = '';
    export let className = '';
    export let onChange: (val: string) => void;

    let value = '';
    let border = '';

    function applyBorder(focus?: boolean) {
        border = focus ? 'searchbar-wrapper-primary' : ''
    }
</script>

<div
    class={`
        searchbar-wrapper
        ${border} ${className}
    `}
>
    <Fa class={`searchbar-icon ${busy ? 'searchbar-icon-loading' : ''}`} icon={busy ? faSpinner : faSearch} />

    <input
        bind:value
        type="text"
        name="searchbar"
        placeholder={$t(placeholder)}
        on:focus={() => applyBorder(true)}
        on:focusout={() => applyBorder()}
        on:input={() => onChange(value)}
        class="searchbar"
    />
</div>

<style>
    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }

    .searchbar-wrapper {
        position: relative;
        padding: 0.25rem 0.5rem;

        border-radius: 0.375rem;
        border: 1px solid var(--text);

        gap: 0.5rem;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-items: center;
    }

    .searchbar-wrapper-primary {
        border-color: var(--primary);
    }

    .searchbar-icon {
        opacity: 0.4;
    }

    .searchbar-icon-loading {
        animation: spin 1s linear infinite;
    }

    .searchbar {
        width: 100%;
        color: var(--text);
        align-self: stretch;
        background-color: var(--background);

        outline-offset: 2px;
        outline: 2px solid transparent;
    }
</style>
