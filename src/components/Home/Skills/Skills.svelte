<script>

	import { skills } from "$lib";
    import { t } from "../../../store";
	import Header from "../../Header.svelte";
	import Tag from "../../Tag.svelte";

</script>
<Header id="skills">{$t('section.skills.title')}</Header>

<div class="skills-box">
    {#each skills as s}
        <Tag>{s}</Tag>
    {/each}
</div>

<style>
    .skills-box {
        width: 90%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;

        gap: 1rem;
        padding: 1rem;
        border-radius: 0.25rem;
        border: 1px solid rgb(var(--text-rgb) / 0.5);
    }

    @media (min-width: 768px) {
        .skills-box {
            width: 55%;
            padding: 2rem;
        }
    }
</style>
