<script lang="ts">
    export let href = '/';
    export let className = '';
</script>

<a
    class={`
        px-1 ${className}
        relative hover:before:h-full hover:text-background
        transition-all duration-500 before:h-[10%]
        before:w-full before:absolute
        before:left-0 before:bottom-0
        before:bg-primary before:-z-10
        before:transition-all before:duration-500
    `}
    target="_blank"
    {href}
>
    <slot></slot>
</a>
