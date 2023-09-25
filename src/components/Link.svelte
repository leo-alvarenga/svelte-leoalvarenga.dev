<script lang="ts">
    export let href = '/';
    export let className = '';
    export let sameTab = false;
    export let large = false;
</script>

<a
    class={`
        t t-before link-default
        ${large ? 'link-large' : ''}
        ${className}
    `}
    target={sameTab ? undefined : '_blank'}
    {href}
>
    <slot></slot>
</a>

<style>
    .link-default {
        position: relative;
        width: fit-content;
        padding: 0.25rem;
    }

    .link-default::before {
        left: 0;
        bottom: 0;
        width: 100%;
        height: 10%;
        z-index: -1;
        content: '';
        position: absolute;
        background: linear-gradient(90deg, rgba(255,10,120,1) 0%, rgba(74,103,247,1) 100%);
    }

    .link-default:hover {
        color: var(--background);
    }

    .link-default:hover::before {
        height: 100%;
    }

    .link-large {
        gap: 1rem;
        width: 100%;
        display: flex;
        min-width: 30vw;
        padding: 1rem 2rem;
        align-items: center;
        flex-direction: row;
    }
</style>
