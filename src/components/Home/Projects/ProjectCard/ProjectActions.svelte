<script lang="ts">
	import { faArrowUpRightFromSquare, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
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
        <Link 
            className={`${commonClasses} p-1`}
            href={repo}
        >
            {$t('common.repo')}
            <Fa icon={faCodeBranch} />
        </Link>
    </div>
</div>
