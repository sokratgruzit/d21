<template>
  <div class="currency-container">
    <div class="container">
      <div class="currency-container__outer pT-120" data-aos="fade-up">
        <div class="currency-container__inner">
          <div class="currency-container__header">
            <div class="currency-container__tab medium active">24H Rising list</div>
            <div class="currency-container__tab medium">favorites</div>
            <div class="currency-container__tab medium">usdt</div>
            <div class="currency-container__tab medium">eth</div>
            <div class="currency-container__tab medium">btc</div>
            <div class="currency-container__input-container">
              <input type="text">
              <div class="icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.11193 0C9.48265 0 12.2238 2.7412 12.2238 6.11192C12.2238 7.43006 11.8001 8.64837 11.088 9.64767L16 14.5596L14.5596 16L9.64767 11.088C8.64837 11.8001 7.43006 12.2238 6.11193 12.2238C2.7412 12.2238 0 9.48265 0 6.11192C0 2.7412 2.7412 0 6.11193 0ZM6.11193 10.1865C8.35908 10.1865 10.1865 8.35908 10.1865 6.11192C10.1865 3.86477 8.35908 2.03731 6.11193 2.03731C3.86477 2.03731 2.03731 3.86477 2.03731 6.11192C2.03731 8.35908 3.86477 10.1865 6.11193 10.1865Z" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="currency-container__table">
            <div class="currency-container__table-head">
              <div class="currency-container__table-block">Pair</div>
              <div class="currency-container__table-block">Last Price</div>
              <div class="currency-container__table-block">Change</div>
              <div class="currency-container__table-block">24h Volume</div>
              <div class="currency-container__table-block">High</div>
              <div class="currency-container__table-block">Low</div>
            </div>
            <div class="currency-container__table-body">
              <div class="currency-container__table-block">HPB/USDT</div>
              <div class="currency-container__table-block">$0.0522</div>
              <div class="currency-container__table-block">+57.31%</div>
              <div class="currency-container__table-block">155443.27</div>
              <div class="currency-container__table-block">2112454.11</div>
              <div class="currency-container__table-block">155213.00</div>
              <a href="##" class="currency-container__table-link medium">trade now</a>
            </div>
            <div class="currency-container__table-body">
              <div class="currency-container__table-block">HPB/USDT</div>
              <div class="currency-container__table-block">$0.0522</div>
              <div class="currency-container__table-block">+57.31%</div>
              <div class="currency-container__table-block">155443.27</div>
              <div class="currency-container__table-block">2112454.11</div>
              <div class="currency-container__table-block">155213.00</div>
              <a href="##" class="currency-container__table-link medium">trade now</a>
            </div>
            <div class="currency-container__table-body">
              <div class="currency-container__table-block">HPB/USDT</div>
              <div class="currency-container__table-block">$0.0522</div>
              <div class="currency-container__table-block">+57.31%</div>
              <div class="currency-container__table-block">155443.27</div>
              <div class="currency-container__table-block">2112454.11</div>
              <div class="currency-container__table-block">155213.00</div>
              <a href="##" class="currency-container__table-link medium">trade now</a>
            </div>
            <div class="currency-container__table-body">
              <div class="currency-container__table-block">HPB/USDT</div>
              <div class="currency-container__table-block">$0.0522</div>
              <div class="currency-container__table-block">+57.31%</div>
              <div class="currency-container__table-block">155443.27</div>
              <div class="currency-container__table-block">2112454.11</div>
              <div class="currency-container__table-block">155213.00</div>
              <a href="##" class="currency-container__table-link medium">trade now</a>
            </div>
            <div class="currency-container__table-body">
              <div class="currency-container__table-block">HPB/USDT</div>
              <div class="currency-container__table-block">$0.0522</div>
              <div class="currency-container__table-block">+57.31%</div>
              <div class="currency-container__table-block">155443.27</div>
              <div class="currency-container__table-block">2112454.11</div>
              <div class="currency-container__table-block">155213.00</div>
              <a href="##" class="currency-container__table-link medium">trade now</a>
            </div>
            <div class="currency-container__table-body">
              <div class="currency-container__table-block">HPB/USDT</div>
              <div class="currency-container__table-block">$0.0522</div>
              <div class="currency-container__table-block">+57.31%</div>
              <div class="currency-container__table-block">155443.27</div>
              <div class="currency-container__table-block">2112454.11</div>
              <div class="currency-container__table-block">155213.00</div>
              <a href="##" class="currency-container__table-link medium">trade now</a>
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
  .currency-container__table{
    padding-left: 20px;
  }
  .currency-container__table-block:nth-child(1){
    width: 18%;
  }
  .currency-container__table-block:nth-child(2){
    width: 9%;
  }
  .currency-container__table-block:nth-child(3){
    width: 13%;
  }
  .currency-container__table-block:nth-child(4){
    width: 16%;
  }
  .currency-container__table-block:nth-child(5){
    width: 12%;
  }
  .currency-container__table-block:nth-child(6){
    width: 10%;
  }
  .currency-container__table-block{
    align-items: center;
    display: flex;
    height: 50px;
  }
  .currency-container__table-head .currency-container__table-block{
    font-size: 16px;
    opacity: .7;
  }
  .currency-container__table-head{
    position: relative;
  }
  .currency-container__table-head:after{
    height: 1px;
    width: calc(100% + 40px);
    background: rgba(255,255,255,.05);
    content: '';
    display: flex;
    left: -20px;
    position: absolute;
    bottom: 0px;
  }
  .currency-container__table-body .currency-container__table-block{
    text-transform: uppercase;
    font-size: 16px;
  }
  .currency-container__table-link{
    margin-left: auto;
    text-transform: uppercase;
    font-size: 14px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    transition: .6s cubic-bezier(.79,.01,.15,.99);
  }
  .currency-container__table-link:hover{
    color: rgba(255,255,255,.7);
  }
  .currency-container__table-link:hover:after{
    transform: scaleX(0);
  }
  .currency-container__table-link:after{
    background: #205FEC;
    height: 2px;
    margin-top: 5px;
    content: '';
    width: 100%;
    display: flex;
    transition: .6s cubic-bezier(.79,.01,.15,.99);
  }
  .currency-container__table > div{
    display: flex;
  }
  .currency-container__input-container .icon{
    position: absolute;
    z-index: 2;
    display: flex;
    top: 0px;
    height: 100%;
    left: 20px;
    align-items: center;
    pointer-events: none;
    transition: .6s cubic-bezier(.79,.01,.15,.99);
    opacity: .3;
  }
  .currency-container__input-container input:focus ~ .icon{
    transform: scaleX(.6);
    opacity: 0;
  }
  .currency-container__input-container{
    height: 100%;
    width: 220px;
    position: relative;
  }
  .currency-container__input-container input{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    border: 0px;
    background: rgba(255,255,255,.05);
    padding: 0px 25px;
    transition: .6s cubic-bezier(.79,.01,.15,.99);
  }
  .currency-container__input-container input:focus{
    background: rgba(255,255,255,.07);
  }
  .currency-container__tab:after{
    height: 2px;
    background: #205FEC;
    width: 100%;
    bottom: 0px;
    left: 0px;
    content: '';
    position: absolute;
    transform: scaleX(0);
    transition: .6s cubic-bezier(.79,.01,.15,.99);
  }
  .currency-container__tab{
    color: rgba(255,255,255,.5);
    font-size: 14px;
    text-transform: uppercase;
    cursor: pointer;
    transition: .6s cubic-bezier(.79,.01,.15,.99);
    position: relative;
    display: flex;
    height: 100%;
    align-items: center;
    margin-right: 30px;
  }
  .currency-container__tab:hover:after,.currency-container__tab.active:after{
    transform: scaleX(1);
  }
  .currency-container__tab:hover,.currency-container__tab.active{
    color: rgba(255,255,255,1);
  }
  .currency-container__header{
    display: flex;
    background: rgba(255,255,255,.05);
    border-radius: 4px;
    height: 56px;
    padding: 0px 20px;
    align-items: center;
  }
  .currency-container__outer{
    width: 100%;
  }
  .currency-container{
    background: #08132D;
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
