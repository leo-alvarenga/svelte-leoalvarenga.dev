<script>
    import { page } from "$app/stores";

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
    class="h-64 left-[20%]"
    src={notFound ? error404 : serverDown}
    alt="Not found"
/>

<div class="px-4 w-full flex flex-col items-center gap-4 text-center">
    <Header mt={false}>{$t(title)}</Header>
    <Subheader>{$t(description)}</Subheader>
    <Link href="/" sameTab>Click here to go back</Link>
</div>
