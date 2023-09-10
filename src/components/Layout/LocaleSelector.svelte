<script lang="ts">
    import { faXmark } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";

	import { availableLocales, locale, setLocale, t } from "../../store";
    
    let showOptions = false;

    function handleLocaleChange(l: string) {
        setLocale(l);
    }

    function toogleVisibility() {
        showOptions = !showOptions;
    }
</script>

<button
    on:click={toogleVisibility}
    class={`
        locale-selector
        
    `}
>
    <span class="t-7">
        {#if showOptions}
            <Fa class="locale-selector-x" icon={faXmark} />
        {:else}
            <span>{$t(`common.language.${$locale}`)}</span>
        {/if}
    </span>

    <div
        class={`
            locale-selector-body t-7
            ${showOptions ? 'locale-selector-body-open' : ''}
        `}
    >
        {#each availableLocales as l}
            <button
                class={`
                    locale-selector-option t-7
                    ${$locale === l
                        ? 'locale-selector-option-selected'
                        : 'locale-selector-option-other'}
                `}
                on:click={() => handleLocaleChange(l)}
            >
                {$t(`common.language.${l}`)}
            </button>
        {/each}
    </div>
</button>

<style>
    .locale-selector {
        position: fixed;

        display: flex;
        align-items: center;
        flex-direction: column;
        
        left: 1.25rem;
        bottom: 1.25rem;
        z-index: 20;

        padding: 0.5rem;
        width: fit-content;
        background-color: var(--dark);

        border: 1px solid var(--light);
        border-radius: 0.375rem;

        font-size: 0.875rem;
        line-height: 1.25rem;
    }

    .locale-selector:hover .locale-selector-current {
        opacity: 0.4;
    }

    .t-7 {
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 700ms;
    }

    .locale-selector-x {
        font-size: 1.25rem;
        line-height: 1.75rem;
    }

    .locale-selector-body {
        max-height: 0px;
        overflow: hidden;

        gap: 0.5rem;
        display: flex;
        flex-direction: column;
    }

    .locale-selector-body-open {
        max-height: 12rem;
        margin-top: 0.5rem;
    }

    .locale-selector-option {
        padding: 0.5rem 0.25rem;
        border-radius: 0.375rem;
        border: 1px solid rgb(var(--light-rgb) / 0.2);
    }

    .locale-selector-option-other:hover {
        border-color: var(--blueLight);
    }

    .locale-selector-option-selected {
        border-color: var(--blueLight);
    }
</style>
