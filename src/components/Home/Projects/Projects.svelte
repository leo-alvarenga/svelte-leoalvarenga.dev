<script lang="ts">
	import { projects, type ProjectFilter, type ViewMode } from "$lib";
    import Header from "../../Header.svelte";
	import FilterArea from "./FilterArea.svelte";
	import ProjectGrid from "./ProjectGrid.svelte";
	import ViewSelector from "./ViewSelector.svelte";

    let viewMode: ViewMode = 'GRID';
    let filter: ProjectFilter | undefined = undefined;

    let searchTerm = '';

    function filterProjects(filter: ProjectFilter | undefined) {
        if (!filter) return [...projects];
        console.log(filter);

        let out = projects.filter(({ title, info }) => 
            title.includes(searchTerm)
                || info.match(searchTerm)
        );

        return out.filter(
            ({ stack, type }) =>
            (!filter?.type || type === filter.type)
            && (!filter?.stack ||
                stack.find((tech) => filter?.stack?.includes(tech)))
        );
    }

    function handleViewChange(mode: ViewMode) {
        viewMode = mode;
    }

    function handleFilterChange(values: ProjectFilter) {
        filter = values;
    }

    function handleSearchChange(value: string) {
        searchTerm = value;
    }

    $: data = filterProjects(filter);
</script>

<Header id="projects">Projects</Header>

<div class="flex flex-col items-center w-full lg:w-[80%] p-8">
    <div class="w-full flex flex-row flex-wrap gap-4">
        <ViewSelector {viewMode} onChange={handleViewChange} />
        <FilterArea onChange={handleFilterChange} onSearchTermChange={handleSearchChange} />
    </div>
    
    <ProjectGrid {data} {viewMode} />
</div>
