<script lang="ts">
    import { faAngleUp, faLanguage, faXmark } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";

	import { availableLocales, locale, setLocale } from "../../store";
    
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
        bg-dark p-2 w-14
        border border-primary
        rounded-md
        fixed bottom-5 left-5 z-20
        flex flex-col items-center
    `}
>
    <button class="w-full justify-center flex flex-row gap-2 items-center transition-all duration-500 hover:opacity-40" on:click={toogleVisibility}>
        <Fa class="text-xl" icon={showOptions ? faXmark : faLanguage} />
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
                        ? 'border-primary'
                        : 'border-blueLight border-opacity-20 hover:border-primary'}
                    border px-2 py-1
                    rounded-md
                `}
                on:click={() => handleLocaleChange(l)}
            >
                {l.toLowerCase()}
            </button>
        {/each}
    </div>
</div>
