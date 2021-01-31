<template>
  <div class="announcements-container">
    <div class="container">
      <div class="announcements-container__outer pT-120" data-aos="fade-up">
        <div class="announcements-container__header">
          <h2 class="font-38 medium">Announcements</h2>
          <a href="##" class="announcements-container__button medium">more</a>
        </div>
        <div class="announcements-container__links">
          <a href="" class="announcements-container__link">
            Launch of Cudos (CUDOS) Pre-Staking with 30% Est. APR
          </a>
          <a href="" class="announcements-container__link">
            Join Upcoming Auction for Joint Primary Listing of Maps.me (MAPS)
          </a>
          <a href="" class="announcements-container__link">
            Exclusive Primary Listing
            of Cudos (CUDOS) & Share Reward of 30,000 USDT
            in Tokens
          </a>
          <a href="" class="announcements-container__link">
            Auction of UAT Pending Release from Private/Public Sale Portion (6th Round)
          </a>
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
  .announcements-container__link{
    display: flex;
    width: 25%;
    padding-right: 30px;
    font-size: 20px;
    line-height: 26px;
    text-decoration: underline;
    text-decoration-color: transparent;
    transition: .6s cubic-bezier(.79,.01,.15,.99);
  }
  .announcements-container__links{
    display: flex;
    width: 100%;
    margin-top: 30px;
  }
  .announcements-container__link:hover{
    text-decoration-color: #44EFFF;
    color: #44EFFF;
  }
  .announcements-container__button{
    height: 40px;
    display: flex;
    text-transform: uppercase;
    font-size: 14px;
    align-items: center;
    padding: 0px 15px;
    border: 2px solid #205FEC;
    border-radius: 4px;
    transition: .6s cubic-bezier(.79,.01,.15,.99);
  }
  .announcements-container__button:hover{
    background: #205FEC;
  }
  .announcements-container{
    background: #08132D;
  }
  .announcements-container__outer{
    width: 100%;
    padding-bottom: 120px;
  }
  .announcements-container__header{
    display: flex;
    justify-content: space-between;
    align-items: center;
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
