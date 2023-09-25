<span
    class="border-pic pic-wrapper"
>
    <img
        class="border-pic"
        src="https://avatars.githubusercontent.com/u/49699932?v=4"
        alt="Profile"
    />
</span>

<style>
    @keyframes blob {
        0% {
            border-radius: 30% 70% 70% 30% / 69% 30% 70% 31%;
        }
        100% {
            border-radius: 53% 47% 40% 60% / 48% 59% 41% 52%;
        }
    }

    @keyframes blobAlt {
        0% {
            border-radius: 53% 47% 40% 60% / 48% 59% 41% 52%;
        }
        100% {
            border-radius: 30% 70% 70% 30% / 69% 30% 70% 31%;
        }
    }

    .pic-wrapper {
        position: relative;
        width: 16rem;

        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
        animation: blob 5s linear infinite alternate;
    }

    .pic-wrapper::before {
        content: '';
        position: absolute;
        top: 0.5rem;
        left: 0.5rem;

        width: 16rem;
        opacity: 0.2;
        height: 16rem;

        z-index: -10;
        animation: blob 5s linear infinite alternate;
    }

    .pic-wrapper::after {
        content: '';
        position: absolute;
        left: -0.5rem;
        bottom: 0.5rem;

        width: 16rem;
        opacity: 0.2;
        height: 16rem;

        z-index: -20;
        animation: blobAl6s linear infinite alternate;
    }

    .border-pic {
        -webkit-shape-outside: circle();
        shape-outside: circle();
        animation: blob 5s linear infinite alternate;
    }

    .border-pic::before, .border-pic::after {
        background: var(--primary);
        background: linear-gradient(90deg, var(--primary) 0%, var(--blueLight) 100%);
        animation: blob 5s linear infinite alternate;
    }
</style>
