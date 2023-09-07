<script lang="ts">
    import Fa from 'svelte-fa';

    import { expertise } from "$lib";
    import { t } from '../../../store';
	import Header from '../../Header.svelte';
</script>

<Header id="expertise">{$t('section.expertise.title')}</Header>

<div class="expertise-wrapper">
    {#each expertise as { icon, info, title }}
        <div class="expertise-item">
            <div class="expertise-item-title">
                <Fa {icon} />
            
                <h3>{$t(title)}</h3>
            </div>
            <div class="expertise-item-body">
                <p class="expertise-item-info">
                    {$t(info)}
                </p>
            </div>
        </div>
    {/each}
</div>

<style>
    .expertise-wrapper {
        display: flex;
        flex-direction: column;

        gap: 1rem;
        width: 80%;
        align-items: stretch;
    }

    .expertise-item {
        display: flex;
        align-items: end;
        flex-direction: column;
        justify-content: space-between;

        border: 1px solid var(--text);

        flex: 1;
        gap: 3rem;
        padding: 1rem;
        padding-bottom: 3rem;
    }

    .expertise-item-title {
        /**flex flow-row gap-4 items-start justify-between w-full text-2xl md:text-4xl*/

        display: flex;
        align-items: start;
        flex-direction: row;
        justify-content: space-between;

        gap: 1rem;
        width: 100%;

        font-size: 1.5rem;
        line-height: 2rem;
    }

    .expertise-item-title h3 {
        text-align: end;
    }

    .expertise-item-body {
        display: flex;
        flex-direction: column;

        text-align: right;
        padding-left: 1rem;
    }

    .expertise-item-info {
        color: var(--textGrey);

        font-size: 1.125rem;
        line-height: 1.75rem;

        position: relative;
        padding-left: 1rem;
        border-left: 1px solid rgb(var(--textGrey-rgb) / 0.4);
    }

    .expertise-item-info::before {
        content: '<p>';
        position: absolute;

        top: -1.75rem;
        left: -0.75rem;

        opacity: 0.4;
        font-size: 0.875rem;
        line-height: 1.25rem;
    }

    .expertise-item-info::after {
        content: '</p>';
        position: absolute;

        left: -1rem;
        bottom: -1.5rem;

        opacity: 0.4;
        font-size: 0.875rem;
        line-height: 1.25rem;
    }

    @media (min-width: 768px) {
        .expertise-wrapper {
            gap: 0px;
        }

        .expertise-item-title {
            font-size: 2.25rem;
            line-height: 2.5rem;
        }

        .expertise-item-info {
            font-size: 1.125rem;
            line-height: 1.75rem;
        }
    }

    @media (min-width: 1024px) {
        .expertise-wrapper {
            flex-direction: row;
        }

        .expertise-item {
            border-left: none;
        }

        .expertise-item:first-child {
            border-left: 1px solid var(--text);
        }
    }
</style>
