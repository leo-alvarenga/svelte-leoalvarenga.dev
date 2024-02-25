<script lang="ts">
    export let className = '';
    export let action: () => void | undefined;
    export let variant: 'SUCCESS' | 'FALUIRE' = 'SUCCESS';
</script>

<button
    on:click={action}
    class={`
        px-2 w-fit z-30
        relative hover:before:h-full hover:text-background
        active:before:h-full active:text-background
        transition-all duration-500 before:h-[10%]
        before:w-full before:absolute
        before:left-0 before:bottom-0
        before:-z-[20] ${variant === 'SUCCESS' ? 'before:bg-blueLight' : 'before:bg-red-600'}
        before:transition-all before:duration-500
        ${className}
    `}
>
    <slot></slot>
</button>
