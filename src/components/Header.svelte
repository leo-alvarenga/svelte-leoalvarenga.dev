<script lang="ts">
    export let id = '';
    export let mt = true;
</script>

<h3
    {id}
    class={`
        custom-header
        ${mt ? 'mt-5 lg:mt-20' : ''} font-major
        text-2xl md:text-4xl
        relative font-bold
        before:h-[30%] before:w-full
        before:absolute before:left-0
        before:bottom-0 before:bg-primary
        before:bg-opacity-70 before:transition-all
        before:duration-500 before:-z-10
    `}
>
    <slot></slot>
</h3>

<style lang="postcss">
    .custom-header {
        text-shadow: 0 4px 2px theme(colors.background);
    }
</style>
