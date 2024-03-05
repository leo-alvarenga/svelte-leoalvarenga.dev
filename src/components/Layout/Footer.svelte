<script>
    import { version } from '$app/environment';
    import { t } from "../../store";
</script>

<footer
    class={`
        mt-auto relative
        flex flex-col flex-wrap lg:flex-row items-center
        justify-center p-4 w-full
        bg-light bg-opacity-40 border-t border-t-light
        backdrop-filter backdrop-blur-lg
    `}
>
    <h4 class="text-center">{$t('layout.footer.text')}</h4>

    <span class="absolute right-2 bottom-1 text-sm opacity-40">
        {version}
    </span>
</footer>
