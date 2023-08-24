<script lang="ts">
    import Fa from 'svelte-fa';

    import { expertise } from "$lib";
    import { t } from '../../../store';
	import Header from '../../Header.svelte';
</script>

<Header id="expertise">{$t('section.expertise.title')}</Header>

<div class="flex flex-col lg:flex-row w-[80%] items-stretch gap-4 md:gap-0">
    {#each expertise as { icon, info, title }}
        <div
            class={`
                flex flex-col gap-12 p-4 pb-12 justify-between
                items-end border border-text flex-1
                md:border-l-0 md:first:border-l
            `}
        >
            <div class="flex flow-row gap-4 items-start justify-between w-full text-2xl md:text-4xl">
                <Fa {icon} />
            
                <h3 class="text-end">{$t(title)}</h3>
            </div>
            <div class="flex flex-col text-right pl-4">
                <p
                    class={`
                        text-textGrey text-lg
                        md:text-xl pl-4 relative 
                        border-l-[1px] border-l-textGrey
                        border-opacity-40

                        before:absolute before:-top-7
                        before:content-['<p>'] before:-left-3
                        before:text-sm before:opacity-40

                        after:absolute after:-left-4
                        after:-bottom-6 after:content-['</p>']
                        after:text-sm after:opacity-40
                    `}
                >
                    {$t(info)}
                </p>
            </div>
        </div>
    {/each}
</div>
