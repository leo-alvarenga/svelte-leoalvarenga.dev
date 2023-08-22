<script lang="ts">
	import type { Project, ViewMode } from "$lib";

    export let viewMode: ViewMode = 'GRID';
    export let data: Project[] = [];

    $: containerClass = viewMode === 'GRID' ? '' : '';
</script>

<div class={`w-full ${containerClass}`}>
    a
</div>
