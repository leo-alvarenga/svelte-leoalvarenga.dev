<script lang="ts">
    import { expertise } from "$lib";
</script>

<h1 id="expertise" class="mt-20 font-major text-2xl md:text-4xl">Expertise</h1>

<div class="flex flex-col md:flex-row w-full items-stretch gap-4 md:gap-0">
    {#each expertise as { alt, info, src, title }}
        <div
            class={`
                flex flex-col gap-12 p-4 pb-12 justify-between
                items-end border-2 border-text flex-1
            `}
        >
            <div class="flex flow-row gap-4 items-start justify-between w-full">
                <img class="w-12" {src} {alt}>
                <h3 class="text-2xl md:text-4xl text-end">{title}</h3>
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
                    {info}
                </p>
            </div>
        </div>
    {/each}
</div>
