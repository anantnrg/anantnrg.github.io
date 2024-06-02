<template>
    <header
        class="bg-slate-950/75 backdrop-blur border-0 border-b border-solid border-slate-800 sticky top-0 z-50 overflow-hidden">
        <div class="relative mx-auto h-[64px] px-8 flex items-center justify-between gap-4 ">
            <div class="flex-1">
                <div class="relative logo-cont w-10 h-10 flex items-center justify-center">
                    <div class="w-10 h-10 rounded-full logo-bkg absolute top-0 left-0" />
                    <NuxtImg src="/logo.png" class="w-7 h-7 hover:scale-110 transition-all" />
                </div>
            </div>
            <div class="w-auto h-full items-center justify-center flex">
                <div class="mr-6"><a href="#"
                        class="font-sans text-sm/6 font-semibold decoration-none hover:text-accent-500 transition-colors duration-200">Home</a>
                </div>
                <div class="mr-6"><a href="#"
                        class="font-sans text-sm/6 font-semibold decoration-none hover:text-accent-500 transition-colors duration-200">Blog</a>
                </div>
                <div class="mr-6"><a href="#"
                        class="font-sans text-sm/6 font-semibold decoration-none hover:text-accent-500 transition-colors duration-200">Project
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
        </div>
    </header>
</template>

<style lang="scss">
.logo-bkg {
    background-image: linear-gradient(45deg, #835CF6, 20%, #4721B6);
    filter: blur(20px);
    opacity: 0.5;
    transition: opacity 386ms ease-in-out;
}

.logo-cont:hover .logo-bkg {
    opacity: 1;
}
</style>