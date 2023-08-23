<script lang="ts">
    export let className = '';
</script>

<span
    class={`
        relative p-2 rounded border border-primary
        transition-all duration-500
        hover:text-background
        hover:border-opacity-0 border-opacity-40

        before:w-0 hover:before:w-full
        before:h-full before:absolute
        before:left-0 before:bottom-0
        before:-z-[1] before:bg-gradient-to-r
        before:from-primary before:to-blueLight
        before:transition-all before:duration-500
        before:rounded ${className}
    `}
>
    <slot></slot>
</span>
