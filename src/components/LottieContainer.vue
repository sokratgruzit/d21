<template>
  <div class="container lottie-container__outer" data-aos="fade-up">
    <h3 class="font-72" @click="buttonClicked"><span>CORE</span> solves today's hardest
      blockchain problems</h3>
    <div class="lottie-container">
      <div class="lottie-container__item" @mouseover="hover(1)" @mouseleave="leave(1)">
        <lottie-animation
          ref="lottie1"
          :animationData="require(`@/assets/lottie-icons/scalability.json`)"
          :loop="true"
          :autoPlay="false"
        />
        <div class="ttl">Scalability</div>
      </div>
      <div class="lottie-container__item" @mouseover="hover(2)" @mouseleave="leave(2)">
        <lottie-animation
          ref="lottie2"
          :animationData="require(`@/assets/lottie-icons/user_experience.json`)"
          :loop="true"
          :autoPlay="false"
        />
        <div class="ttl">User Experience</div>
      </div>
      <div class="lottie-container__item" @mouseover="hover(3)" @mouseleave="leave(3)">
        <lottie-animation
          ref="lottie3"
          :animationData="require(`@/assets/lottie-icons/usability.json`)"
          :loop="true"
          :autoPlay="false"
        />
        <div class="ttl">Usability</div>
      </div>
      <div class="lottie-container__item" @mouseover="hover(4)" @mouseleave="leave(4)">
        <lottie-animation
          ref="lottie4"
          :animationData="require(`@/assets/lottie-icons/interoperability.json`)"
          :loop="true"
          :autoPlay="false"
        />
        <div class="ttl">Interoperability</div>
      </div>
      <div class="lottie-container__item" @mouseover="hover(5)" @mouseleave="leave(5)">
        <lottie-animation
          ref="lottie5"
          :animationData="require(`@/assets/lottie-icons/security.json`)"
          :loop="true"
          :autoPlay="false"
        />
        <div class="ttl">Security</div>
      </div>

    </div>
  </div>
</template>
<script>
import LottieAnimation from 'lottie-web-vue' // import lottie-web-vue
export default {
  components: {
    LottieAnimation
  },
  data () {
    return {
    }
  },
  methods: {
    hover (id) {
      if (id === 1) {
        this.$refs.lottie1.play()
      }
      if (id === 2) {
        this.$refs.lottie2.play()
      }
      if (id === 3) {
        this.$refs.lottie3.play()
      }
      if (id === 4) {
        this.$refs.lottie4.play()
      }
      if (id === 5) {
        this.$refs.lottie5.play()
      }
    },
    leave (id) {
      if (id === 1) {
        this.$refs.lottie1.stop()
      }
      if (id === 2) {
        this.$refs.lottie2.stop()
      }
      if (id === 3) {
        this.$refs.lottie3.stop()
      }
      if (id === 4) {
        this.$refs.lottie4.stop()
      }
      if (id === 5) {
        this.$refs.lottie5.stop()
      }
    }
  }
}
</script>
<style scoped>
  .lottie-container__item{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .lottie-container__item .ttl{
    font-size: 20px;
    line-height: 28px;
    margin-top: 40px;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .lottie-container__item:hover .ttl{
    color: #FF7152;
  }
  .lottie-container{
    display: flex;
    justify-content: space-between;
    margin-top: 80px;
    padding-bottom: 170px;
  }
  .lottie-container__outer{
    display: flex;
    flex-direction: column;
  }
  h3{
    width: 80%;
  }
  h3 span{
    font-size: inherit;
    color: #FF7152;
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1365px){
    .lottie-container{
      flex-wrap: wrap;
    }
    .lottie-container__item:nth-child(4){
      width: 50%;
      margin-top: 40px;
    }
    .lottie-container__item:nth-child(5){
      width: 50%;
      margin-top: 40px;
    }
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
  }
</style>
