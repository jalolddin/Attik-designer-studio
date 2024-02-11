<template>
<div class="navbar">
    <div class="navbar__container">
        <img class="navbar__container-logo" src="@/assets/images/logo.svg" @click="pushRoute('')" alt="" />
        <div class="navbar__container-links">
            <span v-for="link in links" :key="link" @click="pushRoute(link.slug)">{{ link.title }}</span>
        </div>
        <div class="navbar__container-phone">
            <span>+7 999 720 20 50</span>
        </div>
    </div>
</div>  
</template>

<script>
export default {
data(){
    return {
        links: [
            {
                title: 'Проекты',
                slug: 'projects'
            },
            {
                title: 'Услуги',
                block: 'services'
            },
            {
                title: 'Этапы работы',
                block: 'steps'
            },
            {
                title: 'Контакты',
                block: 'contacts'
            },
            {
                title: 'Статьи',
                slug: 'articles'
            },
        ]
    }
},
methods: {
    pushRoute(slug){
        if(slug){
            this.$router.push('/' + slug)
        }
    }
}
}
</script>

<style>

</style>