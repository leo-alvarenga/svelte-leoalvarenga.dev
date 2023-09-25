<script lang="ts">
    import { t } from "../../../store";
</script>

<div class="title-area-wrapper">    
    <h1 class="title-in">
        Leonardo Alvarenga
    </h1>
    <h3 class="title-in">{$t('section.titleArea.subheader')}</h3>
</div>

<style>
    @-webkit-keyframes title-in {
        0% {
            letter-spacing: 1em;
            opacity: 0;
        }
        40% {
            opacity: 0.6;
        }
        100% {
            letter-spacing: normal;
            opacity: 1;
        }
    }

    @keyframes title-in {
        0% {
            letter-spacing: 1em;
            opacity: 0;
        }
        40% {
            opacity: 0.6;
        }
        100% {
            letter-spacing: normal;
            opacity: 1;
        }
    }

    .title-area-wrapper {
        width: 90%;
        color: var(--text);
        text-align: center;
        font-family: Major Mono Display, monospace;
    }

    .title-area-wrapper h1 {
        margin-top: 2.5rem;

        font-size: 3rem;
        line-height: 1;
    }

    .title-area-wrapper h3 {
        font-size: 1.25rem;
        line-height: 1.75rem;
    }

    @media (min-width: 640px) {
        .title-area-wrapper {
            text-align: start;
        }
    }

    @media (min-width: 768px) {
        .title-area-wrapper h1 {
            font-size: 3.75rem;
            line-height: 1;
        }

        .title-area-wrapper h3 {
            font-size: 1.875rem;
            line-height: 2.25rem;
        }
    }

    @media (min-width: 1024px) {
        .title-area-wrapper {
            width: 80%;
        }

        .title-area-wrapper h1 {
            margin-top: 0;
            font-size: 6rem;
            line-height: 1;
        }

        .title-area-wrapper h3 {
            font-size: 3rem/* 48px */;
            line-height: 1;
        }
    }

    .title-in {
        -webkit-animation: title-in 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
                animation: title-in 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;

        animation-delay: 0.8ms;
    }

    .title-in:last-child {
        animation-delay: 1.2s;
    }
</style>
