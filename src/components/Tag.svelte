<span class="tag">
    <span>
        <slot></slot>
    </span>
</span>

<style>
    .tag {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;

        padding: 2px;
        border-radius: 9999px;
        background: linear-gradient(90deg, rgba(255,10,120,1) 0%, rgba(74,103,247,1) 100%);
    }

    .tag span {
        padding: 0.25rem 0.5rem;
        border-radius: 9999px;
        background-color: var(--background);
    }
</style>
