<script lang="ts">
    import { t } from "../../store";
</script>

<footer
    class={`
        mt-auto relative
        flex flex-col lg:flex-row items-center
        justify-center py-4 w-full
        bg-light bg-opacity-40 border-t border-t-light
        backdrop-filter backdrop-blur-lg
    `}
>
    <h4>{$t('layout.footer.text')}</h4>
</footer>
