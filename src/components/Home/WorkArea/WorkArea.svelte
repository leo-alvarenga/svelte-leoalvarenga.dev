<script lang="ts">
	import { onMount } from 'svelte';

    let timeline: HTMLDivElement;

    const xp = [
        {
            name: 'Trainee Software Developer',
            place: 'Vetta',
            time: '2023, Mar - current',
            info: '',
        },
        {
            name: 'Intern Software Developer',
            place: 'Vetta ',
            time: '2022, Oct - 2023, Mar',
            info: 'Lorem',
        },
        {
            name: 'Intern DevOps Engineer',
            place: 'Vetta',
            time: '2022, Mar - 2022, Oct',
            info: 'Lorem',
        }
    ];

    onMount(() => {
        timeline.addEventListener('wheel', (event) => {
            event.preventDefault();
            timeline.scrollLeft += event.deltaY + event.deltaX;
        });
    });
</script>

<h1 id="work">Work experience</h1>

<div id="work-experience">
    {#each xp as { info, name, time }}
        <div class="work-xp-item">
            <h5>{time}</h5>
            
            <div class="work-xp-item-content">
                <h3>{name}</h3>
                <p>{info}</p>
            </div>
        </div>
    {/each}
</div>

<style>
    #work {
        font-family: 'Major Mono Display', monospace;
    }

    #work {
        text-align: center;
    }

    #work-experience, .work-xp-item-content {
        width: 100%;

        display: flex;
        flex-direction: column;

        align-items: center;
    }

    .work-xp-item {
        width: 60%;
        display: flex;
        flex-direction: row;

        gap: calc(var(--four) * 4);
    }

    .work-xp-item-content {
        width: unset;
        margin-right: auto;
        align-items: start;
    }

    @media (max-width: 1100px) {
        .work-xp-item {
            width: 90%;
        }
    }
</style>
