<script>
	import TitleArea from "../components/Home/TitleArea/TitleArea.svelte";
	import bgCode from "$lib/assets/bg-code.png";
	import Contact from "../components/Home/Contact/Contact.svelte";
	import Experience from "../components/Home/Experience/Experience.svelte";
    import Expertise from "../components/Home/Expertise/Expertise.svelte";
	import Skills from "../components/Home/Skills/Skills.svelte";
</script>

<img 
	class="absolute w-[80%] left-[20%] opacity-60 -z-10 blur-sm"
	src={bgCode}
	alt="bg-code-img"
/>

<TitleArea />
<Expertise />
<Experience />
<Skills />
<Contact />
