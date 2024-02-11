<template>
  <div class="create__steps">
    <div class="create__steps-head">
      <h1 class="title">Этапы создания дизайн-проекта</h1>
      <p>
        Богатый опыт, насмотренность и профильное высшее образование позволяют
        нам воплощать проекты любой сложности.
      </p>
      <button class="white-button">Оставить заявку</button>
    </div>
    <div class="create__steps-cards">
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
          title: "Консультация",
          desc: "На бесплатной консультации мы внимательно выслушаем ваши пожелания, поговорим о том, что для вас важно, определимся со стилем и бюджетом на ремонт.",
        },
        {
          number: "02",
          title: "Подписание договора и составление технического задания",
          desc: "Знакомство проходит в любой удобной форме, где мы подробно составляем техническое задание на дизайн-проект. В конце встречи подписываем договор.",
        },
        {
          number: "03",
          title: "Замеры помещения и фотофиксация",
          desc: "Для этого мы выезжаем на объект, фиксируем все необходимые габариты и коммуникации. Обязательно производим фотосъемку для более точного понимания всех архитектурных особенностей посещения.",
        },
        {
          number: "04",
          title: "Планировочное решение",
          desc: "На основании технического задания мы разрабатываем 2-3 варианта планировочного решения. Как правило, идеальный вариант планировочного решения собирается из нескольких вариантов. На основе итогового варианта мы продолжаем дальнейшую работу.",
        },
        {
          number: "05",
          title: "Разработка дизайн-концепции",
          desc: "Концептуальные коллажи будущего интерьера и 3D-модель пространства помогут наглядно передать идею дизайнера.",
        },
        {
          number: "06",
          title:
            "Фотореалистичная 3D-визуализация с реальными отделочными материалами",
          desc: "3D-визуализация позволяет  увидеть весь будущий интерьер в объеме. На изображениях все подобранные предметы мебели и отделочные материалы, реально существующие и доступные к приобретению.",
        },
        {
          number: "07",
          title: "Разработка рабочей документации для строителей",
          desc: "Рабочая документация- это сердце любого дизайн-проекта, без нее сделать ремонт, как на картинке — невозможно. Также у прораба сразу отпадают вопросы, что и как делать.",
        },
        {
          number: "08",
          title: "Авторский надзор",
          desc: "Во время авторского надзора дизайнер контролирует реализацию дизайн-проекта и решение всех вопросов строительной бригады.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.create__steps {
  max-width: 1300px;
  margin: 0 auto;
  margin-top: 6rem;
  &-head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    .title {
      width: 30%;
      font-weight: 300;
      font-size: 2.5rem;
      text-transform: uppercase;
    }
    p {
      width: 40%;
      font-size: 1.1rem;
      color: rgba(255, 255, 255, 0.8);
      font-weight: 300;
      margin-top: 0.5rem;
    }
    button {
      margin-top: 1.5rem;
    }
  }
  &-cards{
    width: 63%;
    margin-left: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 2rem;
    margin-top: 3rem;
    div{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 46%;
        h1 {
            color: rgba(255, 255, 255, 0.2);
            font-size: 4rem;
            font-style: italic;
            font-weight: 200;
            margin-top: 1.5rem;
          }
          p {
            color: rgba(255, 255, 255, 1);
            font-size: 1.4rem;
            font-weight: 400;
            margin-top: 1rem;
            width: 80%;
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