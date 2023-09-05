<script lang="ts">
    export let id = '';
    export let mt = true;
</script>

<h3 {id} class={`custom-header ${mt ? 'mt' : ''}`}>
    <slot></slot>
</h3>

<style>
    .custom-header {
        position: relative;
        padding: 0 0.25rem;

        font-weight: 700;
        font-size: 1.5rem;
        line-height: 2rem;
        text-shadow: var(--background) 2px 2px;
        font-family: Major Mono Display, monospace;
    }

    .custom-header::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;

        opacity: 0.5;
        z-index: -10;

        width: 100%;
        height: 30%;
        background: linear-gradient(90deg, rgba(255,10,120,1) 0%, rgba(74,103,247,1) 100%);
    }

    .mt {
        margin-top: 1.25rem;
    }

    @media (min-width: 768px) {
        .custom-header {
            font-size: 2.25rem;
            line-height: 2.5rem;
        }
    }

    @media (min-width: 1024px) {
        .mt {
            margin-top: 5rem;
        }
    }
</style>
