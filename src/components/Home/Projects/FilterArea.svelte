<script lang="ts">
    import { projectTypes, techInUse } from '$lib';
	import type { ProjectFilter } from "$lib";
	import SearchBar from '../../SearchBar.svelte';
    import Select from '../../Select.svelte';

    export let onChange = (_: ProjectFilter) => {};

    let tech: number[] = [];
    let type: number = -1;
    
    export let onSearchTermChange: (val: string) => void;
    
    const handleFilterChange = (values: ProjectFilter) => onChange(values);

    const handleStackChange = (val: number[]) => {
        tech = val;

        handleFilterChange({
            stack: val.length ? val.map((i) => techInUse[i]) : undefined,
            type: type ? projectTypes[type % projectTypes.length] : undefined,
        });
    }

    const handleTypeChange = (val: number[]) => {
        const curr = val.length ? val[0] : -1;
        type = curr;

        handleFilterChange({
            stack: tech.length ? tech.map((i) => techInUse[i]) : undefined,
            type: val.length ? projectTypes[curr % projectTypes.length] : undefined,
        });
    }
</script>

<div class="ml-auto flex flex-row flex-wrap gap-4 items-center justify-stretch">
    <SearchBar onChange={onSearchTermChange} />

    <Select
        className="w-[10rem]"
        title="type..."
        value={[type]}
        options={projectTypes}
        onChange={handleTypeChange}
    />

    <Select
        className="w-[10rem]"
        title="Tech in use"
        value={tech}
        options={techInUse}
        onChange={handleStackChange}
        multiple
    />
</div>
