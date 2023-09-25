<script lang="ts">
	import { faArrowUpRightFromSquare, faCodeBranch, faKey } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";
	import { t } from "../../../../store";
	import Link from "../../../Link.svelte";

    export let repo = '';
    export let preview = '';

    const commonClasses = 'flex-row items-center gap-2';
</script>

<div class={`${commonClasses} project-card-actions`}>
    <div class={commonClasses}>
        {#if preview}
            <Link 
                className="flex-row items-center gap-2 project-preview"
                href={preview}
            >
                {$t('common.preview')}
                <Fa icon={faArrowUpRightFromSquare} />
            </Link>
        {/if}

        {#if repo}
            <Link 
                className={commonClasses}
                href={repo}
            >
                {$t('common.repo')}
                <Fa icon={faCodeBranch} />
            </Link>
        {:else}
            <span class={`${commonClasses} project-repo-private`}>
                {$t('common.repo.private')}
                <Fa icon={faKey} />
            </span>
        {/if}
    </div>
</div>

<style>
    .project-card-actions {
        font-size: 0.875rem;
        line-height: 1.25rem;

        margin-top: auto;
    }

    .project-card-actions div {
        margin-left: auto;
    }

    .project-repo-private {
        opacity: 0.4;
        border: 1px solid var(--text);
        padding: 0.25rem 0.5rem;
        border-radius: 0.375rem;
    }
</style>
