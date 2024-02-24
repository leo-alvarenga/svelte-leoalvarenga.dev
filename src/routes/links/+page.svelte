<script lang="ts">
	import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";

	import explore from "$lib/assets/undraw_explore.svg";
	
	import { contactsForLinkPage } from "$lib";
	import { t } from "../../store";
	import Link from "../../components/Link.svelte";
	import Subheader from "../../components/Subheader.svelte";
	import Header from '../../components/Header.svelte';
</script>

<img 
	class="h-28 -mt-14"
	src={explore}
	alt="Explore the links"
/>

<Header mt={false}>{$t('links.title')}</Header>
<div class="flex flex-col gap-8 w-full text-lg md:text-xl items-center">
	{#each contactsForLinkPage as { icon, href, title }}
	<Link className="!w-full flex flex-row px-8 py-4 gap-4 items-center min-w-[30vw]" {href} sameTab>
			<Fa {icon} />
			<Subheader>
				{$t(title)}
			</Subheader>
			<Fa class="ml-auto" icon={faArrowUpRightFromSquare} />
		</Link>
	{/each}
</div>
