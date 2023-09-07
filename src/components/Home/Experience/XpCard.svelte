<script lang="ts">
    import { faAngleDown, faArrowUpRightFromSquare, faLocationDot } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";
    
	import type { Experience } from "$lib";
    import { t } from "../../../store";
    import Tag from "../../Tag.svelte";

    export let xp: Experience;
    export let selected = false;
</script>

<div class="xp-card">
    <div
        class="xp-card-header"
        role="button"
        tabindex="0"
        on:keypress
        on:click
    >
        <h3><span class="xp-card-title">{$t(xp.name)}</span>{` @ ${$t(xp.place.name)}`}</h3>

        <span class="xp-card-header-end">
            <span class="xp-card-header-time">{xp.time}</span>
            <Fa
                class={`
                    xp-card-header-arrow
                   ${selected ? 'xp-card-header-arrow-rotate' : ''}
                `}
                icon={faAngleDown}
            />
        </span>
    </div>

    <div
        class={`xp-card-body ${selected ? 'xp-card-body-open' : ''}`}
    >
        <div class="xp-card-info">
            <span class="xp-row xp-card-meta">
                <span class="xp-row">
                    <Fa class="text-primary" icon={faLocationDot} />
                    {$t(xp.place.location)}
                </span>
                <a class="xp-link" href={xp.place.page}>
                    {xp.place.page.split('//')[1]}
                    <Fa icon={faArrowUpRightFromSquare} />
                </a>
            </span>

            <p>{$t(xp.info)}</p>

            <div class="xp-row xp-card-skills">
                {#each xp.stack as tech}
                    <Tag>{tech}</Tag>
                {/each}
            </div>
        </div>

        <img src={xp.place.icon} alt={`${xp.place.name}'s logo`} />
    </div>
</div>

<style>
    .xp-card {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: start;
        
        width: 100%;
        border-radius: 0.25rem;
        border: 1px solid var(--text);

        position: relative;
    }

    .xp-card::before {
        content: '';
        position: absolute;

        width: 0.5rem;
        height: 0.5rem;

        background-color: var(--primary);

        top: 50%;
        left: -2.28rem;

        border-radius: 9999px;
    }

    .xp-card-header {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        flex-direction: row;

        gap: 1rem;
        width: 100%;

        font-size: 1.125rem;
        line-height: 1.75rem;
    }

    .xp-card-title {
        font-weight: 700;
    }

    .xp-card-header-end {
        margin-left: auto;
        
        display: flex;
        align-items: center;
        flex-direction: row;
        
        width: 100%;
        gap: 0.5rem;
    }

    .xp-card-header-time {
        font-size: italic;
        min-width: fit-content;
    }

    .xp-card-header-arrow {
        margin-left: auto;
        transform: rotate(0deg);
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 500ms;
    }

    /* todo fix rotate */
    .xp-card-header-arrow-no-rotate {
        transform: rotate(0deg);
    }

    .xp-card-header-arrow-rotate {
        transform: rotate(-90deg);

        color: var(--background);
        background-color: var(--background);
    }

    .xp-card-body {
        width: 100%;
        max-height: 0px;

        display: flex;
        flex-direction: column-reverse;

        gap: 2rem;

        overflow: hidden;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 500ms;
    }

    .xp-card-body img:last-child {
        width: 13rem;
        height: 13rem;
    }

    .xp-card-body-open {
        margin-top: 0.5rem;
        max-height: 4000px;
    }

    .xp-card-info {
        display: flex;
        flex-direction: column;

        gap: 1rem;
        width: auto;
        align-items: start;
    }

    .xp-row {
        gap: 0.5rem;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
    }

    .xp-card-skills {
        overflow: hidden;
    }

    .xp-card-meta {
        gap: 1rem;
        opacity: 0.6;
    }

    .xp-card-meta span:first-child {
        width: auto;
        align-items: center;
    }

    .xp-link {
        padding: 0 0.25rem;
        position: relative;
        
        display: flex;
        align-items: center;
        flex-direction: row;

        gap: 0.5rem;
        font-style: italic;

        min-width: fit-content;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 500ms;
    }

    .xp-link span:last-child {
        margin-left: auto;
    }

    .xp-link::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;

        z-index: -1;

        width: 100%;
        height: 10%;
        background: linear-gradient(90deg, rgba(255,10,120,1) 0%, rgba(74,103,247,1) 100%);

        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 500ms;
    }

    .xp-link:hover {
        color: #0e141b;
    }

    .xp-link:hover::before {
        height: 100%;
    }

    @media (min-width: 768px) {
        .xp-card-header-end {
            width: auto;
        }
    }

    @media (min-width: 1024px) {
        .xp-card-body {
            flex-direction: row;
        }

        .xp-card-body img:last-child {
            margin-left: auto;
        }
    }
</style>
