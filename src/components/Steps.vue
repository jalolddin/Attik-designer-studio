 <template>
  <div class="steps">
    <h1 class="title">ПОЧЕМУ ВЫ МОЖЕТЕ ДОВЕРИТЬ СВОЙ ИНТЕРЬЕР НАМ?</h1>
    <div class="steps__container">
      <div v-for="step in steps" :key="step">
        <h1>{{ step.number }}</h1>
        <p>{{ step.title }}</p>
        <span>{{ step.desc }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        {
          number: "01",
          title: "Ориентируемся на ваш бюджет",
          desc: "Мы формируем ведомость на все материалы, использованные в дизайн проекте.",
        },
        {
          number: "02",
          title: "Работаем по договору",
          desc: "Наш договор на разработку дизайн-проекта  гарантирует, что работы будут выполнены в полном объеме и в указанные сроки. Все условия зафиксированы и прозрачны.",
        },
        {
          number: "03",
          title: "Создаем интерьеры, которые возможно реализовать",
          desc: "Разрабатывая каждый дизайн-проект мы учитываем его дальнейшую реализацию. В своих решениях используем только реальные материалы, мебель и освещение. ",
        },
        {
          number: "04",
          title: "Сопровождаем процесс узаконивания перепланировки",
          desc: "При проектировании будущего интерьера мы учитываем все действующие нормы закона по перепланировке жилых помещений. Сотрудничаем с проектной организацией, которая узаконит планировочное решение.",
        },
        {
          number: "05",
          title: "Реализуем дизайн-проекты под ключ",
          desc: "Мы сотрудничаем с компетентными специалистами и строителями в городе Санкт-Петербург, которые реализуют все задуманное согласно дизайн-проекту. ",
        },
        {
          number: "06",
          title: "Работаем над проектами в ограниченные сроки",
          desc: "Предоставляя услугу «Ускоренный дизайн-проект», мы гарантируем выполнение проекта в максимально сжатые сроки.",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.steps {
  max-width: 1300px;
  margin: 0 auto;
  margin-top: 6rem;
  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 4rem;
    div {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 350px;
      h1 {
        color: rgba(255, 255, 255, 0.2);
        font-size: 4rem;
        font-style: italic;
        font-weight: 200;
        margin-top: 1.5rem;
      }
      p {
        color: rgba(255, 255, 255, 1);
        font-size: 1.5rem;
        font-weight: 400;
        margin-top: 1rem;
      }
      span {
        margin-top: 0.5rem;
        line-height: 1.8rem;
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.6);
      }
    }
  }
}
</style>