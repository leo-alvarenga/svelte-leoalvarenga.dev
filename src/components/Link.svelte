<script lang="ts">
    export let href = '/';
    export let className = '';
    export let sameTab = false;
</script>

<a
    class={`
        px-1 w-fit
        relative hover:before:h-full hover:text-background
        active:before:h-full active:text-background
        transition-all duration-500 before:h-[10%]
        before:w-full before:absolute
        before:left-0 before:bottom-0
        before:-z-[1] before:bg-gradient-to-r
        before:from-primary before:to-blueLight
        before:transition-all before:duration-500
        ${className}
    `}
    target={sameTab ? undefined : '_blank'}
    {href}
>
    <slot></slot>
</a>
