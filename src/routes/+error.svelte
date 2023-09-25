<script>
    import { page } from "$app/stores";

	import bgCode from "$lib/assets/bg-code.png";
    import serverDown from "$lib/assets/undraw_server_down.svg";
    import error404 from "$lib/assets/undraw_404.svg";
	import Header from "../components/Header.svelte";
	import Subheader from "../components/Subheader.svelte";
	import Link from "../components/Link.svelte";
	import { t } from "../store";

    $: notFound = $page.status === 404;

    $: title = notFound
        ? 'page.error.404.title'
        : 'page.error.default.title';

    $: description = notFound
        ? 'page.error.404.subheader'
        : 'page.error.default.subheader';
</script>

<img 
    class="bg-code-alt"
    src={bgCode}
    alt="bg-code-img"
/>

<img 
    height="256"
    src={notFound ? error404 : serverDown}
    alt="Not found"
/>

<div class="flex-col items-center error-container">
    <Header mt={false}>{$t(title)}</Header>
    <Subheader>{$t(description)}</Subheader>
    <Link href="/" sameTab>Click here to go back</Link>
</div>

<style>
    img:nth-child(2) {
        left: 20%;
        height: 16rem;
    }

    .error-container {
        gap: 1.5rem;
        width: 100%;
        padding: 1rem0 ;
        text-align: center;
    }
</style>
