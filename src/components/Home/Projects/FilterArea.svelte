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

<div class="filter-area">
    <div class="filter">
        <h4>{$t('section.projects.filter')}</h4>
    
        <button
            name="clear-filter"
            on:click={() => tag && onChange('', 'tag')}
            class="clear-filter t"
        >
            <Fa icon={tag ? faFilterCircleXmark : faFilter} />
        </button>
        
        <div class="filter-option-container">
            {#each options as _tag, index}
                <button
                    class={`
                        t
                        filter-option-button
                        ${_tag === tag || !tag && index === 0 ? 'filter-option-button-selected' : ''}
                    `}
                    on:click={() => onChange(index === 0 ? '' : _tag, 'tag')}
                >
                    {$t(_tag)}
    
                    {#if index > 0}
                        <span class="filter-option-count">{getOccurrencesOfTag(_tag)}</span>
                    {/if}
    
                    <span class="filter-option-bar"></span>
                </button>
                
            {/each}
        </div>
    </div>

    <SearchBar
        placeholder="section.projects.search"
        onChange={(s) => onChange(s, 'search')}
        {busy}
    />
</div>

<style>
    .t {
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 500ms;
    }

    .filter-area {
        gap: 1rem;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: col;
        justify-content: stretch;
    }

    .filter {
        gap: 1rem;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        flex-direction: row;
        justify-content: stretch;
    }

    .filter h4 {
        font-size: 1.125rem;
        line-height: 1.75rem;
    }

    .clear-filter {
        margin-left: -0.5rem;
    }

    .clear-filter:hover {
        opacity: 0.4;
    }

    .filter-option-container {
        gap: 0.5rem;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        flex-direction: row;
    }

    .filter-option-button {
        /** flex flex-row gap-1 items-center
                        h-full hover:opacity-100
                        transition-all duration-500*/
        gap: 0.25rem;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: row;

        opacity: 0.4;
    }

    .filter-option-button:hover {
        opacity: 1;
    }

    .filter-option-button-selected {
        opacity: 1;
    }

    .filter-option-bar {
        width: 1px;
        height: 0.75rem;
        margin-left: 0.25rem;
        transform: rotate(15deg);
        background-color: var(--text);
    }

    .filter-option-count {
        padding: 0 0.25rem;
        border-radius: 0.375rem;
        border: 1px solid var(--text);

        line-height: 1rem;
        font-size: 0.75rem;
    }

    @media (min-width: 1024px) {
        .filter-area {
            flex-direction: row;
        }
    }
</style>
