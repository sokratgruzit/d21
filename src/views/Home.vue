<template>
  <div class="body-container">
    <MainContainer :itemData="$store.state.mainSliderItems"/>
    <CurrencyContainer/>
    <Announcements/>
    <TrustContainer/>
    <TradeContainer/>
    <IconsContainer/>
    <VideoContainer/>
    <Investments/>
  </div>
</template>

<script>
import MainContainer from '@/components/MainContainer.vue'
import CurrencyContainer from '@/components/CurrencyContainer.vue'
import Announcements from '@/components/Announcements.vue'
import TrustContainer from '@/components/TrustContainer.vue'
import TradeContainer from '@/components/TradeContainer.vue'
import IconsContainer from '@/components/IconsContainer.vue'
import VideoContainer from '@/components/VideoContainer.vue'
import Investments from '@/components/Investments.vue'

export default {
  name: 'Home',
  components: {
    MainContainer,
    CurrencyContainer,
    Announcements,
    TrustContainer,
    TradeContainer,
    IconsContainer,
    VideoContainer,
    Investments
  }
}
</script>
<style scoped>
  /*Ipad 768*/
  @media (max-width: 1023px){
  }
  /*Mobile 320*/
  @media (max-width: 767px){
  }
</style>
