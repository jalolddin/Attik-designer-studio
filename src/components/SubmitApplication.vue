<template>
  <div class="application">
    <div class="application__left">
      <h1>Давайте создадим интерьер вашей мечты</h1>
      <p>
        Оставьте ваши данные, мы перезвоним, чтобы обсудить ваш проект и
        ответить на все вопросы
      </p>
      <form @submit="handleSubmit" class="application__left-form">
        <div>
            <input required type="text" placeholder="Имя" />
            <select>
                <option value="df">dwe</option>
            </select>
            <input required  type="text" placeholder="Город" />
        </div>
        <div>
            <input required type="tel" placeholder="+7 (999) 999-99-99" />
            <input type="number" placeholder="Площадь помещения" />
            <div class="policy">
                <p
                >Нажимая на кнопку, вы соглашаетесь с <span @click="pushRoute('privacy')"> политикой
                    конфиденциальности</span></p
                    >
                    <button type="submit" class="white-button">Оставить заявку</button>
                </div>
        </div>
    </form>
      <div class="line"></div>
      <div class="application__left-info">
        <p>Или свяжитель с нами любым удобным для вас способом</p>
        <div>
            <span>+7 999 720 20 50</span>
            <span>attik.interiors@gmail.com</span>
            <span>@attik_des</span>
        </div>
      </div>
    </div>
    <div class="application__right">
      <img src="@/assets/images/submit-application.jpeg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        handleSubmit(){

        },
    pushRoute(slug){
        this.$router.push('/' + slug)
}
    }
};
</script>

<style lang="scss">
.application {
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  &__left {
    width: 55%;
    display: flex;
    flex-direction: column;
    h1{
        font-size: 2.5rem;
        font-weight: 400;
        width: 70%;
    }
    p{
        width: 65%;
        font-size: 1.1rem;
        margin-top: 1rem;
        color: rgba(255, 255, 255, 0.8);

    }
    &-form {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      margin-top: 3rem;
      div{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        width: 48%;
          input, select {
              border-radius: 28px;
              padding: 1.2rem 1.5rem 1.2rem 1.5rem;
              background: rgba(255, 255, 255, 0.1);
              border: none;
              outline: none;
              color: rgba(255, 255, 255, 0.4);
              font-weight: 400;
              font-size: 0.9rem;
            }
            .policy{
                width: 70%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                margin-left: auto;
                p{
                    width: 100%;
                    font-size: 0.9rem;
                    color: rgba(255, 255, 255, 0.4);
                    span{
                        color: rgba(255, 255, 255, 0.8);
                        cursor: pointer;
                    }
                }
                button{
                    margin-top: -0.8rem;
                }
            }
        }
    }
    .line {
      height: 1px;
      background: rgba(255, 255, 255, 0.8);
      width: 100%;
      margin: 2rem 0 2rem 0;
    }
    &-info{
        display: flex;
        justify-content: space-between;
        width: 100%;
        p{
            width: 40%;
            color: rgba(255, 255, 255, 0.8);
            font-size: 1.1rem;
        }
        div{
            display: flex;
            flex-direction: column;
            gap: 0.3rem;
            align-items: flex-end;
            span{
                cursor: pointer;
            }
        }
    }
  }
  &__right {
    width: 40%;
    img {
      width: 100%;
      height: 100%;
      
    }
  }
}
</style>