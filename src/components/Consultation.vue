<template>
  <div class="consultation">
    <div class="consultation__container">
      <div class="consultation__container-left">
        <p>Не знаете какая услуга вам нужна?</p>
        <h1>
          Мы бесплатно проконсультируем и подберем подходящий формат работ
        </h1>
      </div>
      <div class="consultation__container-right">
        <span
          >Оставьте заявку или позвоните нам, и вы получите бесплатную
          консультацию по вашим вопросам</span
        >
        <button class="black-button">Оставить заявку</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.consultation {
  background: rgba(241, 239, 233, 1);
  padding: 5rem 0 5rem 0;
  color: rgba(50, 51, 36, 1);
  margin-top: 6rem;
  &__container {
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    &-left {
      display: flex;
      flex-direction: column;
      width: 60%;
      h1 {
        font-weight: 400;
        font-size: 2.5rem;
        margin-top: 1rem;
      }
      p {
        font-size: 1.2rem;
        font-weight: 300;
        color: rgba(0, 0, 0, 0.8);
      }
    }
    &-right{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 24%;
        span {
          color: rgba(0, 0, 0, 0.8);
          line-height: 1.5rem;
          font-size: 1rem;
          font-weight: 300;
        }
        button{
            width: 100%;
        }
    }
  }
}
</style>