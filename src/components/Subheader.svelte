<script lang="ts">
    export let id = '';
</script>

<h3 {id} class="subheader">
    <slot></slot>
</h3>

<style>
    .subheader {
        position: relative;

        font-weight: 700;
        font-size: 1.125rem;
        line-height: 1.75rem;
        font-family: Major Mono Display, monospace;
    }

    @media (min-width: 768px) {
        .subheader {
            font-size: 1.25rem;
            line-height: 1.75rem;
        }
    }
</style>
