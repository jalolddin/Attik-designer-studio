<template>
  <div class="question">
    <h1>Остались вопросы?</h1>
    <p>Задайте свой вопрос, <br> мы свяжемся с вами и ответим</p>
    <button class="white-button">Задать вопрос</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.question{
    padding: 3rem;
    background: rgba(255, 255, 255, 0.1);
    max-width: 1300px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: space-between;
    margin-top: 6rem;
    h1{
        font-weight: 400;
        font-size: 2.1rem;
    }
    p{
        font-weight: 300;
        font-size: 1rem;
    }
}
</style>