<script>
	import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";
    
    import { contacts } from "$lib";
    import { t } from '../../../store';
	import Header from "../../Header.svelte";
    import Subheader from "../../Subheader.svelte";
	import Profile from "./Profile.svelte";
</script>

<Header id="contact">{$t('section.contact.title')}</Header>

<Profile />

<div class="contact-wrapper">
    {#each contacts as { href, icon, title }}
        <a class="contact-link" {href}>
            <Fa {icon} />
            <Subheader>
                {title}
            </Subheader>
            <span>
                <Fa icon={faArrowUpRightFromSquare} />
            </span>
        </a>
    {/each}
</div>

<style>
    .contact-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        gap: 0.5rem;

        width: 80%;

        /* text-lg */
        font-size: 1.125rem;
        line-height: 1.75rem;
    }

    .contact-link {
        padding: 1rem;
        position: relative;
        
        flex: 1;
        display: flex;
        align-items: center;
        flex-direction: row;

        gap: 1rem;

        min-width: fit-content;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 500ms;
    }

    .contact-link span:last-child {
        margin-left: auto;
    }

    .contact-link::before {
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

    .contact-link:hover {
        color: #0e141b;
    }

    .contact-link:hover::before {
        height: 100%;
    }

    @media (min-width: 768px) {
        .contact-wrapper {
            /* text-xl */
            font-size: 1.25rem;
            line-height: 1.75rem;
        }
    }
</style>
