<template>
  <div class="projects">
    <h1 class="title">Наши проекты</h1>
    <div class="projects__container">
      <div
        v-for="project in projects"
        :key="project"
        class="projects__container-card"
      >
        <img :src="project.image" alt="" />
        <p>{{ project.location }}</p>
        <h1>{{ project.title }}</h1>
        <span>{{ project.square }}</span>
      </div>
    </div>
    <button @click="pushRoute('projects')" class="white-button">Все проекты</button>
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
  methods: {
    pushRoute(path){
        this.$router.push('/' + path)
    }
  }
};
</script>

<style lang="scss">
.projects {
  max-width: 1300px;
  margin: 0 auto;
  margin-top: 10rem;
  padding-top: 5rem 0 5rem 0;
  display: flex;
  flex-direction: column;
  &__container {
    display: flex;
    justify-content: space-between;
    margin-top: 3.5rem;
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
  button {
    margin-top: 3rem;
    margin-left: auto;
  }
}
</style>