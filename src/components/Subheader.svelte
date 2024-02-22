<script lang="ts">
    export let id = '';
</script>

<h3
    {id}
    class={`
        font-major text-lg md:text-xl
        relative font-bold before:bottom-0
        before:h-[30%] before:w-full
        before:absolute before:left-0
        before:bg-opacity-70 before:transition-all
        before:duration-500 before:-z-10
    `}
>
    <slot></slot>
</h3>
