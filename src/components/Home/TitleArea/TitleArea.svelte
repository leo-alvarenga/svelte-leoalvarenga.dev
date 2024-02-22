<script>
    import { t } from "../../../store";
</script>

<div class="tracking-in-contract w-[90%] lg:w-[80%] font-major text-center text-text sm:text-start">    
    <h1 class="mt-10 lg:mt-0 text-5xl md:text-6xl lg:text-8xl">
        Leonardo Alvarenga
    </h1>
    <h3 class="text-xl md:text-3xl lg:text-5xl">{$t('section.titleArea.subheader')}</h3>
</div>

<style>
    @-webkit-keyframes tracking-in-contract {
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
    @keyframes tracking-in-contract {
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
    .tracking-in-contract {
        -webkit-animation: tracking-in-contract 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
                animation: tracking-in-contract 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    }
</style>
