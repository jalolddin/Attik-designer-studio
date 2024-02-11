<template>
<div class="faq">
    <h1 class="title">Ответы на частые вопросы</h1>
    <div class="faq__container">
        <div v-for="faq in faqs" :key="faq" class="faq__container-card">
            <h1>{{ faq.number }}</h1>
            <div>
                <p>{{ faq.question }}</p>      
                <img src="@/assets/images/plus.svg" alt="">
            </div>
        </div>
    </div>
</div>  
</template>

<script>
export default {
data(){
    return {
        faqs: [
            {
                number: "01",
                question: "Работаете ли вы с заказчиками из других городов, стран?",
                answer: "Да, мы работаем удалённо с заказчиками по всему миру."
            },
            {
                number: "02",
                question: "Какой срок разработки дизайн-проекта или планировочного решения?",
                answer: "Да, мы работаем удалённо с заказчиками по всему миру."
            },
            {
                number: "03",
                question: "Что входит в смету?",
                answer: "Да, мы работаем удалённо с заказчиками по всему миру."

            },
        ]
    }
}
}
</script>

<style lang="scss" scoped>
.faq{
    max-width: 1300px;
    margin: 0 auto;
    margin-top: 8rem;
    display: flex;
    justify-content: space-between;
    .title{
        width: 40%;
    }
    &__container{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 55%;
        &-card{
            display: flex;
            gap: 1.5rem;
            cursor: pointer;
            border-bottom: 1px solid rgba(255, 255, 255, 0.8);
            padding-bottom: 2rem;
            h1{
                color: rgba(255, 255, 255, 0.4);
                font-weight: 200;
                font-style: italic;
                font-size: 2.5rem;
            }
            div{
                display: flex;
                justify-content: space-between;
                margin-top: 3rem;
                width: 100%;
                align-items: flex-start;
                p{
                    font-size: 1.6rem;
                    width: 75%;
                    font-weight: 400;
                }
                img{
                    height: 1.2rem;
                    width: 1.2rem;
                    margin-top: 0.5rem;
                }
            }
        }
    }
}
</style>