<script lang="ts">
    export let checked = false;
</script>

<input
    type="checkbox"
    bind:checked
    class={`
        appearance-none
        rounded w-4 h-4
        border border-primary
        indeterminate:bg-black
        checked:bg-primary default:bg-black
    `}
/>
