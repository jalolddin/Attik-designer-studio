<template>
  <div class="director">
    <div class="director__left">
      <img class="director__left-logo" src="@/assets/images/logo.svg" alt="" />
      <div class="director__left-title">
        <p>Ремонт доставляет удовольствие, если его делаем <span>мы</span>.</p>
        <p>
          Воспользуйтесь нашим <span>опытом,</span> ведь ваше
          <span>время</span> стоит дороже.
        </p>
      </div>
      <div class="director__left-director">
        <span>Руководитель и дизайнер ATTIK interior studio</span>
        <h1>Виктория Попова</h1>
      </div>
      <div class="line"></div>
      <div class="director__left-quote">
        <p>
          «Для меня крайне важно не только умело сочетать дизайн и функцию, но и
          понимать, что дизайн — это прежде все действия, которые проходят в
          интерьере, и на этом строить оформление. Функциональность — это
          основа, на которой строится интерьер и его дизайн. Если ее не
          продумать, вряд ли дизайн получится удачным.»
        </p>
      </div>
    </div>
    <div class="director__right">
      <img src="@/assets/images/director.jpeg" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.director {
  display: flex;
  max-width: 1300px;
  margin: 0 auto;
  justify-content: space-between;
  margin-top: 6rem;
  width: 100%;
  &__left {
    width: 48%;
    &-logo {
      margin: 0 auto;
      display: flex;
      justify-content: center;
      margin-top: 3rem;
    }
    &-title {
      width: 95%;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin-top: 6rem;
      p {
        font-size: 2.5rem;
        font-weight: 300;
        color: rgba(255, 255, 255, 1);
        span {
          font-weight: 500;
        }
      }
    }
    .line {
      height: 1px;
      background: rgba(255, 255, 255, 0.8);
      width: 100%;
      margin-top: 1rem;
      margin-bottom: 1.5rem;
    }
    &-director {
      margin-top: 6rem;
      span {
        color: rgba(255, 255, 255, 0.8);
        font-size: 1rem;
        font-weight: 300;
      }
      h1 {
        font-weight: 400;
        font-size: 2rem;
      }
    }
    &-quote {
      p {
        color: rgba(255, 255, 255, 0.8);
        font-weight: 300;
        font-size: 1.4rem;
      }
    }
  }
  &__right {
    width: 48%;
    img {
      width: 100%;
    }
  }
}
</style>