<script lang="ts">
	import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

    import bgCode from "$lib/assets/bg-code.png";
	import explore from "$lib/assets/undraw_explore.svg";
	
	import { contacts } from "$lib";
	import Link from "../../components/Link.svelte";
	import Subheader from "../../components/Subheader.svelte";
	import Fa from "svelte-fa";
	import Header from '../../components/Header.svelte';
</script>

<img 
	class="absolute w-[80%] max-h-[80vh] left-[20%] opacity-60 -z-10 blur-sm"
	src={bgCode}
	alt="bg-code-img"
/>

<img 
	class="h-28 -mt-4"
	src={explore}
	alt="Explore the links"
/>

<Header mt={false}>Explore my links</Header>
<div class="flex flex-col gap-8 w-full text-lg md:text-xl items-center">
	{#each contacts as { icon, href, title }}
		<Link className="!w-full flex flex-row px-8 py-4 gap-4 items-center min-w-[30vw]" {href} sameTab>
			<Fa {icon} />
			<Subheader>
				{title}
			</Subheader>
			<Fa class="ml-auto" icon={faArrowUpRightFromSquare} />
		</Link>
	{/each}
</div>
