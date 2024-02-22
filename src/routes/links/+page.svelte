<script lang="ts">
	import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";

    import bgCode from "$lib/assets/bg-code.png";
	import explore from "$lib/assets/undraw_explore.svg";
	
	import { contactsForLinkPage } from "$lib";
	import { t } from "../../store";
	import Link from "../../components/Link.svelte";
	import Subheader from "../../components/Subheader.svelte";
	import Header from '../../components/Header.svelte';
</script>

<img class="bg-code-alt" src={bgCode} alt="bg-code-img" />

<img
	height="112"
	src={explore}
	alt="Explore the links"
/>

<Header mt={false}>{$t('links.title')}</Header>
<div class="flex-col items-center links-container">
	{#each contactsForLinkPage as { icon, href, title }}
		<Link sameTab large {href}>
			<Fa {icon} />
			<Subheader>
				{$t(title)}
			</Subheader>
			<span class="link-icon">
				<Fa icon={faArrowUpRightFromSquare} />
			</span>
		</Link>
	{/each}
</div>

<style>
	img:nth-child(2) {
		height: 7rem;
		margin-top: -1rem;
	}

	.links-container {
		gap: 2rem;
		width: 100%;
		font-size: 1.125rem;
    	line-height: 1.75rem;
	}

	.link-icon {
		margin-left: auto;
	}

	@media (min-width: 768px) {
		.links-container {
			font-size: 1.25rem/* 20px */;
			line-height: 1.75rem/* 28px */;
		}
	}
</style>
