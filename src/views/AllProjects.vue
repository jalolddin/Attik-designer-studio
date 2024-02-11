<template>
  <div class="portfolio">
    <Navbar />
    <div class="banner">
      <h1>Проекты</h1>
      <img src="@/assets/images/portfolio.svg" alt="" />
    </div>
    <div class="portfolio__container">
        <div
          v-for="project in projects"
          :key="project"
          class="portfolio__container-card"
        >
          <img :src="project.image" alt="" />
          <p>{{ project.location }}</p>
          <h1>{{ project.title }}</h1>
          <span>{{ project.square }}</span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Дизайн-проект квартиры",
          location: "Санкт-Петербург",
          image: require("../assets/images/flat-design.jpeg"),
          square: "70 м2",
        },
        {
          title: "Дизайн-проект загородного дома",
          location: "с. Кобона",
          image: require("../assets/images/flat-design-2.jpeg"),
          square: "140 м2",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.portfolio {
  &__container {
    display: flex;
    margin: 0 auto;
    max-width: 1300px;
    justify-content: space-between;
    margin-top: 8rem;
    &-card {
      width: 38%;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      &:first-of-type {
        width: 60%;
      }
      img {
        height: 30rem;
      }
      h1 {
        font-size: 1.5rem;
        color: rgba(255, 255, 255, 0.8);
      }
      span {
        font-style: italic;
        font-weight: 300;
        color: rgba(255, 255, 255, 0.8);
        margin-top: 0.3rem;
      }
      p {
        margin-top: 0.5rem;
        font-weight: 300;
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.8);
      }
    }
  }
}
</style>