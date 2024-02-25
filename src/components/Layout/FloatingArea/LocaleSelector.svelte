<script lang="ts">
    import { faXmark } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";

    import { allowCookies, availableLocales, locale, setLocale, t } from "../../../store";
    
    let showOptions = false;

    function handleLocaleChange(l: string) {
        setLocale(l, $allowCookies);
    }

    function toogleVisibility() {
        showOptions = !showOptions;
    }
</script>

<button
    on:click={toogleVisibility}
    class={`
        bg-dark p-2 w-fit mr-auto
        border border-light h-fit
        rounded-md text-sm group
        flex flex-col items-center
    `}
>
    <span class="group-hover:opacity-40 transition-all duration-500">
        {#if showOptions}
            <Fa class="text-xl" icon={faXmark} />
        {:else}
            <span>{$t(`common.language.${$locale}`)}</span>
        {/if}
    </span>

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
                    rounded-md ${showOptions ? '' : 'opacity-0'}
                `}
                on:click={() => handleLocaleChange(l)}
            >
                {$t(`common.language.${l}`)}
            </button>
        {/each}
    </div>
</button>
