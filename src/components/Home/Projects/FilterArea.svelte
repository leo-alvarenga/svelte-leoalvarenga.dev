<script lang="ts">
	import { faFilter, faFilterCircleXmark } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

    import { getOccurrencesOfTag, projectTypesList } from '$lib';
    import { t } from '../../../store';

    import SearchBar from '../../SearchBar.svelte';

    export let onChange = (_: string, __: 'search' | 'tag') => {};
    export let tag: string;
    export let busy = false;

    const options = [ 'common.all', ...projectTypesList ];
</script>

<div class="w-full flex lg:flex-row flex-col gap-4 items-center justify-stretch">
    <div class="w-full flex flex-row flex-wrap gap-4 items-center justify-stretch">
        <h4 class="text-lg">{$t('section.projects.filter')}</h4>
    
        <button
            on:click={() => tag && onChange('', 'tag')}
            class={`
                -ml-2 hover:opacity-40
                transition-all duration-500
            `}
        >
            <Fa icon={tag ? faFilterCircleXmark : faFilter} />
        </button>
        
        <div class="flex flex-row flex-wrap h-full items-center gap-2">
            {#each options as _tag, index}
                <button
                    class={`
                        flex flex-row gap-1 items-center
                        h-full hover:opacity-100
                        transition-all duration-500
                        ${_tag === tag || !tag && index === 0 ? 'hover:opacity-40' : 'opacity-40'}
                    `}
                    on:click={() => onChange(index === 0 ? '' : _tag, 'tag')}
                >
                    {$t(_tag)}
    
                    {#if index > 0}
                        <span class="px-1 rounded-md border border-text text-xs">{getOccurrencesOfTag(_tag)}</span>
                    {/if}
    
                    <span class="ml-1 w-[1px] h-3 rotate-[15deg] bg-text"></span>
                </button>
                
            {/each}
        </div>
    </div>

    <SearchBar
        className="lg:ml-auto w-full lg:w-[50%]"
        placeholder="section.projects.search"
        onChange={(s) => onChange(s, 'search')}
        {busy}
    />
</div>
