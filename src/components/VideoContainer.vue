<template>
  <div class="video-container pT-120">
    <img :src="require(`@/assets/img/videogradient.png`)" alt="video-gradient" class="video-gradient" v-prlx="{ reverse: true,speed: 0.1 }">
    <div class="container" data-aos="fade-up">
      <div class="video-container__inner">
        <div class="video-container__left">
          <h2 class="font-56 medium">Your one-stop <br>cryptocurrency <br> platform</h2>
          <div class="video-container__tabs-container">
            <div class="video-container__tabs-header">
              <div class="video-container__tab medium active">buy crypto</div>
              <div class="video-container__tab medium">trade</div>
              <div class="video-container__tab medium">tools</div>
              <div class="video-container__tab medium">academy</div>
              <div class="video-container__tab medium">finance</div>
            </div>
            <div class="video-container__tabs-body">
              <div class="video-container__tabs-body-inner">
                <div class="video-container__tabs-body-text">
                  Convert over 30 local currencies into BTC, ETH, USDT or other cryptocurrencies in minutes using your Visa, Mastercard or other convenient payment methods to find the lowest prices
                  and fastest conversions.
                </div>
                <a href="##" class="video-container__tabs-body-button medium" target="_blank">buy crypto now</a>
              </div>
            </div>
          </div>
        </div>
        <div class="video-container__right">
          <img :src="require(`@/assets/img/videoBg.jpg`)" alt="video-background">
          <div class="video-container__video-play">
            <div class="video-play">
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 7L-6.52533e-07 13.9282L-4.68497e-08 0.0717964L12 7Z" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style scoped>
  .container{
    position: relative;
    z-index: 2;
  }
  .video-gradient{
    position: absolute;
    bottom: -20%;
    left: 0px;
    width: 100%;
    height: 120%;
    z-index: 1;
    object-fit: cover;
    opacity: .05;
  }
  .video-play{
    height: 100px;
    display: flex;
    width: 100px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    background: rgba(255,255,255,.1);
    transition: .6s cubic-bezier(.79,.01,.15,.99);
    cursor: pointer;
  }
  .video-play:hover{
    background: rgba(255,255,255,.3);
  }
  .video-container__right img{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .video-container__video-play{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
  }
  .video-container__right{
    width: 50%;
    padding-top: 35%;
    height: 0px;
    position: relative;
  }
  .video-container__tabs-body-inner{
    display: flex;
    flex-direction: column;
  }
  .video-container__tabs-body-button{
    margin-top: 55px;
    transition: .6s cubic-bezier(.79,.01,.15,.99);
    background: #205FEC;
    height: 52px;
    padding: 0px 25px;
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-right: auto;
    text-transform: uppercase;
    border-radius: 4px;
  }
  .video-container__tabs-body-button:hover{
    background: #44EFFF;
  }
  .video-container__tabs-body-text{
    font-size: 22px;
    line-height: 28px;
    padding-right: 130px;
  }
  .video-container__tabs-body{
    margin-top: 40px;
  }
  .video-container__tab:after{
    content: '';
    height: 2px;
    width: 100%;
    left: 0px;
    bottom: 0px;
    background: #205FEC;
    display: flex;
    transition: .6s cubic-bezier(.79,.01,.15,.99);
    transform: scaleX(0);
  }
  .video-container__tab{
    font-size: 14px;
    opacity: .5;
    transition: .6s cubic-bezier(.79,.01,.15,.99);
    text-transform: uppercase;
    margin-right: 30px;
    cursor: pointer;
    position: relative;
  }
  .video-container__tab.active:after,.video-container__tab:hover:after{
    transform: scaleX(1);
  }
  .video-container__tab:hover,.video-container__tab.active{
    opacity: 1;
  }
  .video-container__tab:hover{
    opacity: 1;
  }
  .video-container__tabs-container{
    margin-top: 55px;
  }
  .video-container__left{
    width: 50%;
    display: flex;
    flex-direction: column;
  }
  .video-container__inner{
    width: 100%;
    display: flex;
  }
  .video-container__tabs-header{
    display: flex;
  }
  .video-container__tabs-container{
    display: flex;
    flex-direction: column;
  }
  .video-container{
    background: #08132D;
    padding-bottom: 75px;
    position: relative;
    overflow: hidden;
  }
  .video-container:after{
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    height: 150px;
    z-index: 1;
    background: rgb(8,19,45);
    background: linear-gradient(0deg, rgba(8,19,45,0.041053921568627416) 0%, rgba(8,19,45,1) 85%);
    width: 100%;
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
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
