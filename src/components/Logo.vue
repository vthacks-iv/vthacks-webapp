<template>
    <div class="container">
        <svg viewBox="114 105 968 778" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <polygon id="Path-6" stroke="#979797" stroke-width="1" fill="#FFFFFF" fill-rule="evenodd" points="601.439453 881.119141 114.996094 105.890625 1081.02344 107.375"></polygon>
            <path class="logo" d="M1024.89062,153.914063 L614.148438,380.488281 L614,791.59375 L614.148438,821 L1024.89062,153.914063 Z M1008.5,131.990947 L601.484375,361 L183.117188,130.09375 L1008.5,131.990947 Z M589.488281,821.699219 L588.613083,381 L176.785156,158.660156 L589.488281,821.699219 Z" id="Combined-Shape" stroke="#979797" stroke-width="1" fill="#B2DFDB" fill-rule="evenodd"></path>
        </svg>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    .container {
        width: 20vh; // 25em
        margin: 2em auto;
        margin-bottom: 0;
    }

    .logo {
        animation: bounceIn 2s cubic-bezier(0.8, 1, 1, 1);
        transform-origin: center;
    }
    @media (width: 320px) {
        .container {
            width: 20em;
        }
    }
    @keyframes bounceIn {
        0% {
            opacity: 1;
            transform: scale(0.3) translateX(50px);
        }

        40% {
            opacity: 1;
            transform: scale(1.3);
        }

        80% {
            opacity: 1;
            transform: scale(0.9);
        }

        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
</style>
