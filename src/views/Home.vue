<template>
  <div class="home">
    <div class="home__banner">
      <Navbar />
      <div class="home__banner-back"></div>
      <div class="home__banner-container">
        <h1>Создаем авторские интерьеры вне времени. Тонко чувствуем, умеем впечатлять.</h1>
        <p><span>01</span> Дизайн интерьера жилых и коммерческих пространств</p>
        <p>
          <span>02</span> Работаем удаленно по всему миру, реализуем дизайн-проекты под ключ
          в Санкт-Петербурге
        </p>
        <button class="white-button">Оставить заявку</button>
      </div>
    </div>
    <Steps />
    <Projects />
    <Services />
    <Consultation />
    <CreateSteps />
    <div class="home__service__image">
      <img src="../assets/images/steps-image.jpeg" alt="">
    </div>
    <Ceo />
    <Reviews />
    <Faq />
    <Question />
    <SubmitApplication />
  </div>
</template>

<script>
import Steps from '@/components/Steps.vue'
import Projects from '@/components/Projects.vue'
import Consultation from '@/components/Consultation.vue'
import Question from '@/components/Question.vue'
import Services from '@/components/Services.vue'
import Ceo from '@/components/Ceo.vue'
import SubmitApplication from '@/components/SubmitApplication.vue'
import CreateSteps from '@/components/CreateSteps.vue'
import Reviews from '@/components/Reviews.vue'
import Faq from '@/components/Faq.vue'

export default {
  name: "Home",
  components: {
    Steps,
    Projects,
    Consultation,
    Question,
    Services,
    Ceo,
    SubmitApplication,
    CreateSteps,
    Reviews,
    Faq
  },
};
</script>
