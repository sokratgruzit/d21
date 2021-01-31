<template>
  <div class="main-container" :class="firstAnimation ? 'animated' : ''">
    <img :src="require(`@/assets/img/main-slider-bg.jpg`)" alt="" class="main-container__background">
    <div class="container">
      <h1>
        <div><span class="medium">Buy & Sell Crypto.</span></div>
        <div><span class="medium">In minutes</span></div>
      </h1>
      <div class="main-container__slider">
        <div class="main-container__slider-nav">
          <div class="prev">
            <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1L2 11L12 21" stroke="white" stroke-width="2"/>
            </svg>
          </div>
          <div class="next">
            <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L11 11L1 21" stroke="white" stroke-width="2"/>
            </svg>
          </div>
        </div>
        <swiper
          ref="mySwiper"
          :options="swiperOptions"
          class="main-container__swiper"
          v-if="cryptoData && itemData">
          <template v-for="(slide, index) in cryptoData">
            <swiper-slide :key="index" v-if="index <= 11">
              <div class="main-container__slider-item">
                <div class="main-container__slider-item-top">
                  <div class="main-container__slider-item-top-inner">
                    <div class="top_head">
                      <div class="top_head-left">
                        <div class="top_head-left-small medium">{{slide.symbol}}</div>
                        <div class="top_head-left-large medium">{{parseFloat(slide.current_price).toFixed(2)}}</div>
                        <div class="top_head-left-small medium">24H Vol {{parseFloat(slide.high_24h).toFixed(3)}}</div>
                      </div>
                      <div class="top_head-right medium" :class="Number(slide.price_change_24h) < 0 ? 'red' : 'green'">
                        {{parseFloat(slide.price_change_24h).toFixed(2)}}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="main-container__slider-item-bottom">
                  <div class="txt medium">{{itemData[index].title}}</div>
                 <img :src="require(`@/assets/img/main-slider/${itemData[index].image}`)" alt="" class="main-container__slider-img">
                </div>
              </div>
            </swiper-slide>
          </template>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    itemData: {
      type: Array,
      require: true
    }
  },
  data () {
    return {
      cryptoData: false,
      firstAnimation: false,
      swiperOptions: {
        speed: 2000,
        slidesPerView: 'auto',
        loop: true,
        freeMode: true,
        navigation: {
          nextEl: '.next',
          prevEl: '.prev'
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {
    setTimeout(() => {
      this.firstAnimation = true
    }, 700)
    const url = ['https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false']
    const request = url.map(u => fetch(u))
    Promise.all(request)
      .then(responses => Promise.all(responses.map(r => r.json())))
      .then(responses => (this.cryptoData = responses[0]))
      .then(responses => console.log(responses))
  },
  methods: {
    visibilityChanged () {
      this.$store.commit('setMenuStatus', 0)
    }
  }
}
</script>
<style scoped>
  .top_head-right.green{
    color: #89C988;
  }
  .top_head-right.red{
    color: #E17E54;
  }
  .main-container__slider-nav div:hover path{
    stroke: #44EFFF;
  }
  .main-container__slider-nav path{
    transition: .6s cubic-bezier(.79,.01,.15,.99);
  }
  .prev{
    margin-left: -45px;
    cursor: pointer;
    transition: .6s cubic-bezier(.79,.01,.15,.99);
  }
  .prev:hover{
    transform: translateX(-10px);
  }
  .next:hover{
    transform: translateX(10px);
  }
  .next{
    margin-right: -15px;
    cursor: pointer;
    transition: .6s cubic-bezier(.79,.01,.15,.99);
  }
  .main-container__swiper{
    z-index: 10;
  }
  .main-container__slider-nav{
    position: absolute;
    bottom: 18%;
    width: 100%;
    left: 0px;
    z-index: 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .main-container__slider-item-bottom{
    position: relative;
    width: 100%;
    padding-top: 60%;
    margin-top: 30px;
  }
  .main-container__slider-img {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 1;
    object-fit: cover;
    border-radius: 4px;
  }
  .main-container__slider-item-bottom .txt{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 69%;
    height: 100%;
    padding: 16px;
    z-index: 2;
    font-size: 20px;
    line-height: 26px;
  }
  .main-container__slider-item-top{
    width: 100%;
    position: relative;
    padding-top: 78%;
    background: rgba(255,255,255,.05);
    border-radius: 4px;
  }
  .main-container__slider-item-top-inner{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    padding: 16px;
    z-index: 2;
  }
  .swiper-slide{
    width: 25%;
    padding-right: 30px;
  }
  .main-container__slider{
    width: calc(100% + 30px);
    margin-left: 30px;
    margin-bottom: 30px;
    position: relative;
    transform: translateY(30px);
    opacity: 0;
    transition: .8s cubic-bezier(.79,.01,.15,.99);
  }
  .animated  .main-container__slider{
    transform: translateY(0px);
    opacity: 1;
    transition-delay: .3s;
  }
  .container{
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    position: relative;
    z-index: 2;
  }
  .main-container__background{
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 1;
    transform: translateX(-50px);
    opacity: 0;
    transition: .8s cubic-bezier(.79,.01,.15,.99);
  }
  .animated .main-container__background{
    transform: translateX(0px);
    opacity: 1;
  }
  .main-container{
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 800px;
    position: relative;
  }
  h1{
    font-size: 96px;
    line-height: 110px;
    color: #fff;
    margin-top: auto;
    text-align: center;
    margin-bottom: 120px;
  }
  h1 div{
    overflow: hidden;
    font-size: inherit;
  }
  h1 span{
    overflow: hidden;
    font-size: inherit;
    display: flex;
    transform: translateY(120%);
    transition: .8s cubic-bezier(.79,.01,.15,.99);
    text-align: center;
    width: 100%;
    justify-content: center;
  }
  h1 > div:first-child span{
    transition-delay: .2s;
  }
  h1 > div:last-child span{
    transition-delay: .3s;
  }
  .animated h1 span{
    transform: translateY(0%);
  }
  .top_head{
    display: flex;
    justify-content: space-between;
  }
  .top_head-left-small:first-child{
    text-transform: uppercase;
  }
  .top_head-left-small{
    opacity: .5;
    font-size: 13px;
  }
  .top_head-left-large{
    font-size: 20px;
    margin: 5px 0px;
  }
  .swiper-wrapper{
    transition-timing-function: cubic-bezier(.79,.01,.15,.99)!important;
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
    .main-container{
      min-height: 700px;
    }
    h1{
      font-size: 60px;
      line-height: 74px;
      margin-bottom: 30px;
    }
    .swiper-slide{
      padding-right: 15px;
    }
    .main-container__slider-item-bottom{
      margin-top: 15px;
    }
   .main-container__slider {
     width: calc(100% + 15px);
     margin-left: 15px;
     margin-bottom: 15px;
   }
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1365px){}
  /*Ipad 768*/
  @media (max-width: 1023px){
  }
  /*Mobile 320*/
  @media (max-width: 767px){
  }
</style>
