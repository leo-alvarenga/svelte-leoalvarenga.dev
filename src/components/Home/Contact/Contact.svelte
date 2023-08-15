<script>
    import { contacts } from "$lib";
	import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";
	import Header from "../../Header.svelte";
    import Subheader from "../../Subheader.svelte";
	import Link from "../../Link.svelte";
	import ContactCard from "./ContactCard.svelte";
	import Profile from "./Profile.svelte";
</script>

<Header id="contact">Contact me!</Header>

<Profile />

<div class="flex flex-row flex-wrap justify-center w-[80%] items-center gap-2 text-lg md:text-xl">
    {#each contacts as { href, icon, title }}
        <Link className="!p-4 min-w-fit flex-1 flex flex-row items-center gap-4" {href}>
            <Fa {icon} />
            <Subheader>
                {title}
            </Subheader>
            <Fa class="ml-auto" icon={faArrowUpRightFromSquare} />
        </Link>
    {/each}
</div>
