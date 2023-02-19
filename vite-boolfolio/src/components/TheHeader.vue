<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-black ">
            <a class="navbar-brand ms-5 text-light bg-black" href="#">Progetto BootFolio</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center text-light" id="navbarNav">
                <ul class="navbar-nav ">
                    <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
                        <a class="nav-link text-light" :href="item.index">{{ item.label }}</a>
                        <!-- <router-link :to="{ name: 'item.routeName' }" class="nav-link text-light" :href="item.index">{{ item.label }}</router-link>> -->
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                menuItems: [
                    {
                        label: "Home",
                        routeName: "home",
                    },
                    {
                        label:"Projects",
                        routeName:"projects",
                    },
                    {
                        label:"Chi siamo",
                        routeName: "about",
                    },
                    {
                        label:"Contatti",
                        routeName:"contacts",
                    },
                ],
            };
            
        },
    };
</script>

<style scoped lang="scss">
</style>