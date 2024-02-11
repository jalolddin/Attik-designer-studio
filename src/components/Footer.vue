<template>
<div class="footer">
    <div class="footer__container">
        <div class="footer__container-logo">
            <img src="@/assets/images/logo.svg" alt="">
            <p>© ATTIK STUDIO, 2024</p>
        </div>
        <div class="footer__container-links">
            <div class="footer__container-links-left">
                <span>Проекты</span>
                <span>Услуги</span>
                <span>Этапы работы</span>
            </div>
            <div class="footer__container-links-right">
                <span>Контакты</span>
                <span>Статьи</span>
            </div>
        </div>
        <div class="footer__container-social">
            <p>+7 999 720 20 50</p>
            <p>attik.interiors@gmail.com</p>
            <p>@attik_des</p>
            <span @click="pushRoute('privacy')">Политика конфиденциальности</span>
        </div>
    </div>
</div>  
</template>

<script>
export default {
methods: {
    pushRoute(slug){
        this.$router.push('/' + slug)
}
}
}
</script>

<style lang="scss">
</style>