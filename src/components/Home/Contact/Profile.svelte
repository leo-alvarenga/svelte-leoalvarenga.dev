<span
    class={`
            border-pic group
            relative w-64 transition-all
            before:absolute before:left-2
            before:top-2 before:opacity-20
            before:w-64 before:h-64
            before:-z-10
            before:animate-blob
    
            after:absolute after:-left-2
            after:bottom-2 after:opacity-20
            after:w-64 after:h-64 after:animate-blobAlt
            after:-z-20
    `}
>
    <img
        class="border-pic animate-blob"
        src="https://avatars.githubusercontent.com/u/49699932?v=4"
        alt="Profile"
    />

    <span class="absolute hidden group-hover:visible">a</span>
</span>

<style lang="postcss">
    .border-pic {
        -webkit-shape-outside:circle();
        shape-outside:circle();
    }
    .border-pic::before, .border-pic::after {
        background: theme(colors.primary);
        background: linear-gradient(90deg, theme(colors.primary) 0%, theme(colors.blueLight) 100%);
    }
</style>
