<script lang="ts">
    import { t } from "../../store";
</script>

<footer class="footer">
    <h4>{$t('layout.footer.text')}</h4>
</footer>

<style>
    .footer {
        margin-top: auto;
        position: relative;

        width: 100%;
        padding: 1rem 0;

        backdrop-filter: blur(16px);
        border-top: 1px solid var(--light);
        background-color: rgb(var(--light-rgb) / 0.4);

        display: flex;
        flex-wrap: wrap;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }

    @media (min-width: 1024px) {
        .footer {
            flex-direction: row;
        }
    }
</style>
