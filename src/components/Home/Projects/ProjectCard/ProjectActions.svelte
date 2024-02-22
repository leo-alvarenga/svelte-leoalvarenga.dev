<script lang="ts">
	import { faArrowUpRightFromSquare, faCodeBranch, faKey } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";
	import { t } from "../../../../store";
	import Link from "../../../Link.svelte";

    export let repo = '';
    export let preview = '';

    const commonClasses = 'flex flex-row gap-2 items-center';
</script>

<div class={`${commonClasses} mt-auto text-sm`}>
    <div class="ml-auto flex flex-row gap-2">
        {#if preview}
            <Link 
                className={`${commonClasses} ml-auto self-center p-1`}
                href={preview}
            >
                {$t('common.preview')}
                <Fa icon={faArrowUpRightFromSquare} />
            </Link>
        {/if}

        {#if repo}
            <Link 
                className={`${commonClasses} p-1`}
                href={repo}
            >
                {$t('common.repo')}
                <Fa icon={faCodeBranch} />
            </Link>
        {:else}
            <span class={`${commonClasses} px-2 py-1 rounded-md border opacity-40`}>
                {$t('common.repo.private')}
                <Fa icon={faKey} />
            </span>
        {/if}
    </div>
</div>
