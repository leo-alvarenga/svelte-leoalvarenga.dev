<script lang="ts">
	import { projects, type Project } from "$lib";
	import { onMount } from "svelte";
	import { t } from "../../../store";

    import Header from "../../Header.svelte";
	import FilterArea from "./FilterArea.svelte";
	import ProjectGrid from "./ProjectGrid.svelte";

    let type = '';
    let searchTerm = '';
    let mapped: Project[] = [];
    let data = mapped;

    let busy = false;
    let reloadTimer: NodeJS.Timeout | undefined = undefined

    onMount(() => {
        mapped = projects.map(({ info, title, ...p }) => ({
            ...p,
            info: $t(info),
            title: $t(title),
        }));

        data = mapped;
    });

    function handleFilterChange(value: string, kind: 'search' | 'type') {
        if (kind === 'type') {
            type = type === value ? '' : value;
            
            return;
        }

        searchTerm = value;
    }

    $: {
        if (reloadTimer) clearTimeout(reloadTimer);

        reloadTimer = setTimeout(() => {
            if (!searchTerm && !type) return data = mapped;

            busy = true;
            let out = mapped;

            if (type) {
                out = out.filter(({ type: t }) => t === type);
            }

            if (searchTerm) {
                out = out.filter(({ info, title, stack }) => (
                    info.toLowerCase().includes(searchTerm)
                    || title.toLowerCase().includes(searchTerm)
                    || stack.find((s) => s.toLowerCase().includes(searchTerm))
                ));
            }

            data = out;
            setTimeout(() => busy = false, 500);
        }, 800);
    }
</script>

<Header id="projects">{$t('section.projects.title')}</Header>

<div class="flex flex-col items-center w-full lg:w-[90%] p-8 gap-8">
    <FilterArea {type} {busy} onChange={handleFilterChange} />
    <ProjectGrid {data} />
</div>
