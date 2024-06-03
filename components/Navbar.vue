<template>
    <div>
        <header
            class="bg-slate-950/75 backdrop-blur border-0 border-b border-solid border-slate-800 sticky top-0 z-50 overflow-hidden">
            <div class="relative mx-auto h-[64px] px-8 flex items-center justify-between gap-4">
                <div class="flex-1">
                    <div class="relative logo-cont w-10 h-10 flex items-center justify-center">
                        <div class="w-10 h-10 rounded-full logo-bkg absolute top-0 left-0" />
                        <NuxtImg src="/logo.png"
                            class="w-8 h-8 transform-gpu transition-all duration-500 ease-in-out" />
                    </div>
                </div>
                <div class="w-auto h-full items-center justify-center hidden md:flex">
                    <div class="mr-6"><a href="#"
                            class="font-sans text-sm/6 font-semibold decoration-none hover:text-accent-500 transition-colors duration-200">Home</a>
                    </div>
                    <div class="mr-6"><a href="#"
                            class="font-sans text-sm/6 font-semibold decoration-none hover:text-accent-500 transition-colors duration-200">Blog</a>
                    </div>
                    <div class="mr-6"><a href="#"
                            class="font-sans text-sm/6 font-semibold decoration-none hover:text-accent-500 transition-colors duration-200">Tutorial
                            Series</a></div>
                    <div><a href="#"
                            class="font-sans text-sm/6 font-semibold decoration-none hover:text-accent-500 transition-colors duration-200">About</a>
                    </div>
                </div>
                <div class="flex-1 flex items-center justify-end">
                    <a href="https://github.com/anantnrg"
                        class="flex items-center justify-center p-1.5 border border-transparent rounded-md transition-all duration-200 hover:bg-slate-800 hover:border-slate-700">
                        <Icon name="octicon:mark-github-24" class="text-slate-200" size="20px" />
                    </a>
                </div>
                <button class="md:hidden flex items-center p-2 text-slate-200" @click="toggleMenu">
                    <Icon :name="isMenuOpen ? 'material-symbols:close' : 'material-symbols:menu-rounded'" size="20px" />
                </button>
            </div>
        </header>
        <transition name="slide-fade">
            <div v-if="isMenuOpen"
                class="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center z-40 transition-all duration-500 ease-in-out">
                <a href="#"
                    class="py-2 text-sm font-semibold decoration-none hover:text-accent-500 transition-colors duration-200">Home</a>
                <a href="#"
                    class="py-2 text-sm font-semibold decoration-none hover:text-accent-500 transition-colors duration-200">Blog</a>
                <a href="#"
                    class="py-2 text-sm font-semibold decoration-none hover:text-accent-500 transition-colors duration-200">Tutorial
                    Series</a>
                <a href="#"
                    class="py-2 text-sm font-semibold decoration-none hover:text-accent-500 transition-colors duration-200">About</a>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isMenuOpen: false
        };
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        handleResize() {
            if (window.innerWidth >= 768 && this.isMenuOpen) {
                this.isMenuOpen = false;
            }
        }
    }
};
</script>

<style lang="scss">
.logo-bkg {
    background-image: linear-gradient(45deg, #835CF6, 20%, #4721B6);
    filter: blur(15px);
    opacity: 0.5;
    transition: opacity 386ms ease-in-out;
}

.logo-cont:hover .logo-bkg {
    opacity: 1;
}

.logo-cont:hover>img {
    scale: 1.3;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.5s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
    transform: translateY(-10%);
    opacity: 0;
}
</style>