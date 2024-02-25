<script>
	import { visibleNotifications } from "../../../store";
	import LocaleSelector from "./LocaleSelector.svelte";
	import NotificationArea from "./NotificationArea/NotificationArea.svelte";

</script>

<div
    class={`
        fixed bottom-0 left-0 w-full
        flex flex-row flex-wrap-reverse
        z-20 p-4 gap-4
    `}
>
    <LocaleSelector />
    <NotificationArea notifications={$visibleNotifications} />
</div>
