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

<div
    class={`
        bg-dark p-2 w-fit
        border border-light
        rounded-md text-sm
        fixed bottom-5 left-5 z-20
        flex flex-col items-center
    `}
>
    <button class="w-full justify-center flex items-center transition-all duration-500 hover:opacity-40" on:click={toogleVisibility}>
        {#if showOptions}
            <Fa class="text-xl" icon={faXmark} />
        {:else}
            <span>{$t(`common.language.${$locale}`)}</span>
        {/if}
    </button>
    <div
        class={`
            max-h-0 transition-all
            overflow-hidden duration-700
            flex flex-col gap-2
            ${showOptions ? 'max-h-40 mt-2' : ''}
        `}
    >
        {#each availableLocales as l}
            <button
                class={`
                    transition-all duration-700
                    ${$locale === l
                        ? 'border-blueLight'
                        : 'border-light border-opacity-20 hover:border-blueLight'}
                    border px-2 py-1
                    rounded-md
                `}
                on:click={() => handleLocaleChange(l)}
            >
                {$t(`common.language.${l}`)}
            </button>
        {/each}
    </div>
</div>
