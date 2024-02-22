<script lang="ts">
    export let className = '';
</script>

<span
    class={`
        flex flex-row items-center justify-center
        p-[2px] bg-gradient-to-r
        from-primary to-blueLight rounded-full
    `}
>
    <span
        class={`
            bg-background rounded-full
            px-2 py-1 ${className}
        `}
    >
        <slot></slot>
    </span>
</span>
