<template>
  <div class="privacy">
    <Navbar />
    <div class="privacy__container"> 
        <h1>Политика в отношении обработки персональных данных</h1>
        <div>
            <p>1. Общие положения</p>
            <span>
                Настоящая политика обработки персональных данных составлена в
                соответствии с требованиями Федерального закона от 27.07.2006. № 152-ФЗ
                «О персональных данных» (далее — Закон о персональных данных) и
                определяет порядок обработки персональных данных и меры по обеспечению
                безопасности персональных данных, предпринимаемые ASKET STUDIO (далее —
                Оператор).1.1. Оператор ставит своей важнейшей целью и условием
                осуществления своей деятельности соблюдение прав и свобод человека и
                гражданина при обработке его персональных данных, в том числе защиты
                прав на неприкосновенность частной жизни, личную и семейную тайну.1.2.
                Настоящая политика Оператора в отношении обработки персональных данных
                (далее — Политика) применяется ко всей информации, которую Оператор
                может получить о посетителях веб-сайта.
            </span>
        </div>
        <div>
            <p>2. Основные понятия, используемые в Политике</p>
            <span>
                2.1. Автоматизированная обработка персональных данных — обработка
                персональных данных с помощью средств вычислительной техники.2.2.
                Блокирование персональных данных — временное прекращение обработки
                персональных данных (за исключением случаев, если обработка необходима
                для уточнения персональных данных).
            </span>
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.privacy{
    max-width: 1300px;
    margin: 0 auto;
    &__container{
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
        width: 80%;
        margin: 0 auto;
        margin-top: 5rem;
        h1{
            font-weight: 400;
            font-size: 3rem;
            color: rgba(255, 255, 255, 1);
            width: 80%;
        }
        div{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            p{
                font-weight: 600;
                font-size: 1.5rem;
            }
            span{
                font-weight: 300;
                font-size: 1.2rem;
                color: rgba(255, 255, 255, 0.8);
                line-height: 2rem;
            }
        }
    }
}
</style>