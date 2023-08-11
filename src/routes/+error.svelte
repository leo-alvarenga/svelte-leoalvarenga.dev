<script>
    import { page } from "$app/stores";

	import bgCode from "$lib/assets/bg-code.png";
    import serverDown from "$lib/assets/undraw_server_down.svg";
    import error404 from "$lib/assets/undraw_404.svg";
	import Header from "../components/Header.svelte";
	import Subheader from "../components/Subheader.svelte";
	import Link from "../components/Link.svelte";

    $: notFound = $page.status === 404;

    $: title = notFound
        ? '404'
        : 'Error';

    $: description = notFound
        ? 'It seems like this item has not been found'
        : 'Something unexpected occurred';
</script>

<img 
    class="absolute w-[80%] max-h-[80vh] left-[20%] opacity-60 -z-10 blur-sm"
    src={bgCode}
    alt="bg-code-img"
/>

<img 
    class="h-64 left-[20%]"
    src={notFound ? error404 : serverDown}
    alt="Not found"
/>

<div class="px-4 w-full flex flex-col items-center gap-4 text-center">
    <Header mt={false}>{title}</Header>
    <Subheader>{description}</Subheader>
    <Link href="/" sameTab>Click here to go back</Link>
</div>
