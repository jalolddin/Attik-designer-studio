<template>
  <div class="reviews">
    <div class="reviews__head">
      <h1 class="title">Отзывы заказчиков</h1>
      <div>
        <img src="@/assets/images/arrow-left.svg" alt="" />
        <img src="@/assets/images/arrow-right.svg" alt="" />
      </div>
    </div>
    <div class="reviews__container">
      <div
        class="reviews__container-card"
        v-for="review in reviews"
        :key="review"
      >
        <p class="reviews__container-card-text">{{ review.text }}</p>
        <div class="reviews__container-card-designer">
          <div>
            <p>{{ review.designer }}</p>
            <span>{{ review.department }}</span>
            <img :src="review.image" alt="" />
          </div>
          <p class="reviews__container-card-designer-review">
            {{ review.reviewInfo }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reviews: [
        {
          text: "Благодарим вас за дизайн-проект нашего загородного дома. Я особенно довольна нашей спальней и кухней-гостиной. Самостоятельно я бы точно все так не придумала, получилось очень здорово, каждый метр пространства использован грамотно. По поводу цветов и фактур хочу сказать отдельное спасибо, все комнаты получились уютными, но при этом чувствуется рука мастера в каждой. Планируем в ближайшее время ремонт своей городской квартиры, проект только у вас будем заказывать.",
          designer: "Надежда и Юрий",
          department: "Дизайн-проект загородного дома",
          reviewInfo:
            "«Мы очень довольны тем, что получилось, интерьер каждой комнаты продуман до мелочей.»",
          image: require("../assets/images/review-image-1.jpeg"),
        },
        {
          text: "Виктория, огромнейшее спасибо за проделанную работу, профессионализм и современный подход к своему делу! Все так, как я давно хотела. Изначально встреча проходила в zoom, на которой обсудили все мои пожелания. Цены устроили, подписали договор. Очень понравилось, что в основном все вопросы по согласованию решались дистанционно. Оставалось только говорить (да или нет). Проект был сделан в срок. Получилось очень роскошно и красиво! Цветовая гамма подобрана идеально. Обязательно буду рекомендовать вашу студию знакомым!",
          designer: "Екатерина",
          department: "Дизайн-проект загородного дома",
          reviewInfo:
            "«Виктория посоветовала очень интересные решения, о которых я даже и не думала изначально.»",
          image: require("../assets/images/review-image-2.jpeg"),
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.reviews {
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  margin-top: 8rem;
  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      display: flex;
      align-items: center;
      gap: 2rem;
      img {
        cursor: pointer;
      }
    }
  }
  &__container {
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
    &-card {
      width: 49%;
      background: rgba(33, 33, 33, 1);
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &-text {
        width: 92%;
        font-size: 1.2rem;
        color: rgba(255, 255, 255, 0.8);
      }
      &-designer {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        div {
          display: flex;
          flex-direction: column;
          width: 48%;
          margin-top: 2rem;
          p {
            font-weight: 400;
            font-size: 1.2rem;
          }
          span {
            color: rgba(255, 255, 255, 0.8);
            font-weight: 300;
          }
          img {
            margin-top: 1rem;
            height: 10rem;
          }
        }
        &-review {
          width: 48%;
          font-weight: 300;
          color: rgba(241, 239, 233, 1);
          font-style: italic;
        }
      }
    }
  }
}
</style>