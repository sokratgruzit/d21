<template>
  <div :class="activeBurger ? 'activeBurger' : ''">
<!--    {{$store.state.activeMenu}}-->
    <header :class="firstAnimation ? 'animated' : ''">
      <div class="inner">
        <router-link class="logo" to="/">
          <svg width="70" height="56" viewBox="0 0 70 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M47.3715 51.8692C47.6308 51.749 47.8739 51.582 48.0878 51.3681L69.3806 30.0753C70.3569 29.099 70.3569 27.5161 69.3806 26.5397L48.0878 5.24693C47.8739 5.03302 47.6308 4.86599 47.3715 4.74581V11.6017L64.0773 28.3075L47.3715 45.0133V51.8692Z" fill="#205FEC"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.1334 1.08577C31.0667 0.698409 32.1415 0.911027 32.857 1.62458L57.845 26.5433C58.3183 27.0153 58.5829 27.6573 58.5796 28.3258C58.5764 28.9943 58.3055 29.6336 57.8275 30.101L32.7933 54.5799C32.0741 55.2832 31.0035 55.4869 30.0762 55.0969C29.149 54.7069 28.5458 53.7991 28.5455 52.7932L28.5387 30.3293L16.11 17.8999L5.77236 28.2376L11.1679 33.6331H11.1418V40.6739C11.112 40.6469 11.0828 40.619 11.0541 40.5903L0.469054 30.0054C0.000211239 29.5365 -0.263184 28.9006 -0.263184 28.2376C-0.263184 27.5745 0.000207663 26.9387 0.469049 26.4698L14.3423 12.5966C14.8111 12.1277 15.447 11.8643 16.1101 11.8644C16.7731 11.8644 17.409 12.1278 17.8779 12.5966L32.8062 27.5258C33.2748 27.9944 33.5381 28.63 33.5383 29.2927L33.5437 46.8531L52.5217 28.296L33.5917 9.41851V17.9541C33.5917 17.967 33.5916 17.9798 33.5914 17.9927L28.5917 12.9929V3.3948C28.5917 2.38428 29.2 1.47313 30.1334 1.08577ZM29.1339 19.509C29.2525 19.658 29.3877 19.7933 29.5368 19.9118L29.1339 19.509Z" fill="url(#paint0_linear)"/>
            <defs>
              <linearGradient id="paint0_linear" x1="59.7617" y1="-0.273019" x2="-10.6945" y2="40.4164" gradientUnits="userSpaceOnUse">
                <stop stop-color="#205FEC"/>
                <stop offset="1" stop-color="#44EFFF"/>
              </linearGradient>
            </defs>
          </svg>
          <div class="txt">
            <svg width="155" height="24" viewBox="0 0 155 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.016 16.504C4.192 16.52 4.424 16.536 4.712 16.552C5 16.552 5.392 16.552 5.888 16.552C7.92 16.552 9.432 16.04 10.424 15.016C11.432 13.976 11.936 12.528 11.936 10.672C11.936 8.784 11.448 7.336 10.472 6.328C9.496 5.32 7.984 4.816 5.936 4.816C5.04 4.816 4.4 4.84 4.016 4.888V16.504ZM15.104 10.672C15.104 12.112 14.88 13.368 14.432 14.44C13.984 15.496 13.344 16.384 12.512 17.104C11.696 17.808 10.704 18.336 9.536 18.688C8.384 19.024 7.104 19.192 5.696 19.192C5.024 19.192 4.264 19.16 3.416 19.096C2.568 19.048 1.76 18.936 0.992 18.76V2.608C1.76 2.432 2.576 2.32 3.44 2.272C4.304 2.224 5.072 2.2 5.744 2.2C7.136 2.2 8.408 2.368 9.56 2.704C10.712 3.024 11.696 3.536 12.512 4.24C13.344 4.928 13.984 5.808 14.432 6.88C14.88 7.936 15.104 9.2 15.104 10.672ZM27.9581 6.688C27.9581 7.264 27.8381 7.832 27.5981 8.392C27.3581 8.936 27.0461 9.472 26.6621 10C26.2941 10.512 25.8701 11.016 25.3901 11.512C24.9101 11.992 24.4301 12.464 23.9501 12.928C23.6941 13.168 23.4061 13.456 23.0861 13.792C22.7661 14.128 22.4621 14.464 22.1741 14.8C21.8861 15.136 21.6381 15.464 21.4301 15.784C21.2221 16.088 21.1101 16.344 21.0941 16.552H28.4861V19H17.9021C17.8861 18.872 17.8781 18.72 17.8781 18.544C17.8781 18.352 17.8781 18.208 17.8781 18.112C17.8781 17.344 17.9981 16.64 18.2381 16C18.4941 15.344 18.8221 14.736 19.2221 14.176C19.6221 13.616 20.0701 13.088 20.5661 12.592C21.0621 12.096 21.5581 11.608 22.0541 11.128C22.4381 10.76 22.8061 10.4 23.1581 10.048C23.5101 9.696 23.8141 9.352 24.0701 9.016C24.3421 8.664 24.5581 8.312 24.7181 7.96C24.8781 7.592 24.9581 7.216 24.9581 6.832C24.9581 6 24.7181 5.408 24.2381 5.056C23.7581 4.704 23.1741 4.528 22.4861 4.528C22.0381 4.528 21.6221 4.592 21.2381 4.72C20.8541 4.848 20.5101 5 20.2061 5.176C19.9181 5.352 19.6621 5.536 19.4381 5.728C19.2141 5.904 19.0461 6.048 18.9341 6.16L17.4941 4.12C18.1661 3.48 18.9501 2.968 19.8461 2.584C20.7581 2.184 21.7341 1.984 22.7741 1.984C24.5501 1.984 25.8541 2.408 26.6861 3.256C27.5341 4.088 27.9581 5.232 27.9581 6.688ZM32.2147 5.824C33.1427 5.456 34.0707 4.984 34.9987 4.408C35.9427 3.832 36.7747 3.152 37.4947 2.368H39.5347V19H36.6307V6.256C36.1987 6.592 35.6547 6.92 34.9987 7.24C34.3427 7.56 33.7107 7.824 33.1027 8.032L32.2147 5.824ZM51.2889 19V2.368H61.9689V4.936H54.3129V9.04H61.1289V11.56H54.3129V16.432H62.5449V19H51.2889ZM69.9069 10.552L72.5709 6.448H75.6189L71.4909 12.376C72.3549 13.496 73.1789 14.632 73.9629 15.784C74.7629 16.92 75.4189 17.992 75.9309 19H72.7869C72.6429 18.696 72.4509 18.352 72.2109 17.968C71.9869 17.568 71.7389 17.16 71.4669 16.744C71.2109 16.312 70.9389 15.888 70.6509 15.472C70.3629 15.056 70.0829 14.664 69.8109 14.296C69.2509 15.016 68.6989 15.816 68.1549 16.696C67.6269 17.56 67.1869 18.328 66.8349 19H63.8589C64.0989 18.52 64.3869 18.008 64.7229 17.464C65.0589 16.92 65.4189 16.368 65.8029 15.808C66.1869 15.232 66.5789 14.664 66.9789 14.104C67.3949 13.528 67.8029 12.984 68.2029 12.472L64.0509 6.448H67.2429L69.9069 10.552ZM76.9801 12.736C76.9801 11.808 77.1241 10.944 77.4121 10.144C77.7001 9.328 78.1081 8.624 78.6361 8.032C79.1801 7.44 79.8361 6.976 80.6041 6.64C81.3721 6.304 82.2361 6.136 83.1961 6.136C84.3801 6.136 85.5001 6.352 86.5561 6.784L85.9321 9.16C85.5961 9.016 85.2121 8.896 84.7801 8.8C84.3641 8.704 83.9161 8.656 83.4361 8.656C82.3001 8.656 81.4361 9.016 80.8441 9.736C80.2521 10.44 79.9561 11.44 79.9561 12.736C79.9561 13.984 80.2361 14.976 80.7961 15.712C81.3561 16.432 82.3001 16.792 83.6281 16.792C84.1241 16.792 84.6121 16.744 85.0921 16.648C85.5721 16.552 85.9881 16.432 86.3401 16.288L86.7481 18.688C86.4281 18.848 85.9401 18.992 85.2841 19.12C84.6441 19.248 83.9801 19.312 83.2921 19.312C82.2201 19.312 81.2841 19.152 80.4841 18.832C79.7001 18.496 79.0441 18.04 78.5161 17.464C78.0041 16.872 77.6201 16.176 77.3641 15.376C77.1081 14.56 76.9801 13.68 76.9801 12.736ZM88.9964 19V0.855999L91.9004 0.375999V6.592C92.2204 6.48 92.5884 6.384 93.0044 6.304C93.4364 6.224 93.8604 6.184 94.2764 6.184C95.2844 6.184 96.1164 6.328 96.7724 6.616C97.4444 6.888 97.9804 7.28 98.3804 7.792C98.7804 8.288 99.0604 8.888 99.2204 9.592C99.3964 10.296 99.4844 11.08 99.4844 11.944V19H96.5804V12.4C96.5804 11.728 96.5324 11.16 96.4364 10.696C96.3564 10.216 96.2124 9.832 96.0044 9.544C95.8124 9.24 95.5484 9.024 95.2124 8.896C94.8764 8.752 94.4604 8.68 93.9644 8.68C93.5804 8.68 93.1884 8.72 92.7884 8.8C92.3884 8.88 92.0924 8.952 91.9004 9.016V19H88.9964ZM107.381 16.96C108.277 16.96 108.957 16.912 109.421 16.816V13.6C109.261 13.552 109.029 13.504 108.725 13.456C108.421 13.408 108.085 13.384 107.717 13.384C107.397 13.384 107.069 13.408 106.733 13.456C106.413 13.504 106.117 13.592 105.845 13.72C105.589 13.848 105.381 14.032 105.221 14.272C105.061 14.496 104.981 14.784 104.981 15.136C104.981 15.824 105.197 16.304 105.629 16.576C106.061 16.832 106.645 16.96 107.381 16.96ZM107.141 6.136C108.101 6.136 108.909 6.256 109.565 6.496C110.221 6.736 110.741 7.072 111.125 7.504C111.525 7.936 111.805 8.464 111.965 9.088C112.141 9.696 112.229 10.368 112.229 11.104V18.712C111.781 18.808 111.101 18.92 110.189 19.048C109.293 19.192 108.277 19.264 107.141 19.264C106.389 19.264 105.701 19.192 105.077 19.048C104.453 18.904 103.917 18.672 103.469 18.352C103.037 18.032 102.693 17.616 102.437 17.104C102.197 16.592 102.077 15.96 102.077 15.208C102.077 14.488 102.213 13.88 102.485 13.384C102.773 12.888 103.157 12.488 103.637 12.184C104.117 11.864 104.669 11.64 105.293 11.512C105.933 11.368 106.597 11.296 107.285 11.296C107.605 11.296 107.941 11.32 108.293 11.368C108.645 11.4 109.021 11.464 109.421 11.56V11.08C109.421 10.744 109.381 10.424 109.301 10.12C109.221 9.816 109.077 9.552 108.869 9.328C108.677 9.088 108.413 8.904 108.077 8.776C107.757 8.648 107.349 8.584 106.853 8.584C106.181 8.584 105.565 8.632 105.005 8.728C104.445 8.824 103.989 8.936 103.637 9.064L103.277 6.712C103.645 6.584 104.181 6.456 104.885 6.328C105.589 6.2 106.341 6.136 107.141 6.136ZM115.786 6.856C116.346 6.696 117.074 6.544 117.97 6.4C118.866 6.256 119.858 6.184 120.946 6.184C121.97 6.184 122.826 6.328 123.514 6.616C124.202 6.888 124.746 7.28 125.146 7.792C125.562 8.288 125.85 8.896 126.01 9.616C126.186 10.32 126.273 11.096 126.273 11.944V19H123.37V12.4C123.37 11.728 123.322 11.16 123.226 10.696C123.146 10.216 123.002 9.832 122.794 9.544C122.602 9.24 122.33 9.024 121.978 8.896C121.642 8.752 121.226 8.68 120.73 8.68C120.362 8.68 119.978 8.704 119.578 8.752C119.178 8.8 118.882 8.84 118.69 8.872V19H115.786V6.856ZM132.105 12.4C132.105 13.632 132.369 14.536 132.897 15.112C133.441 15.672 134.137 15.952 134.985 15.952C135.449 15.952 135.881 15.888 136.281 15.76C136.697 15.632 137.033 15.48 137.289 15.304V8.8C137.081 8.752 136.825 8.712 136.521 8.68C136.217 8.632 135.833 8.608 135.369 8.608C134.313 8.608 133.505 8.96 132.945 9.664C132.385 10.352 132.105 11.264 132.105 12.4ZM140.193 17.728C140.193 19.728 139.681 21.192 138.657 22.12C137.649 23.048 136.097 23.512 134.001 23.512C133.233 23.512 132.481 23.448 131.745 23.32C131.025 23.192 130.369 23.024 129.777 22.816L130.305 20.344C130.801 20.552 131.361 20.72 131.985 20.848C132.625 20.976 133.313 21.04 134.049 21.04C135.217 21.04 136.049 20.8 136.545 20.32C137.041 19.84 137.289 19.128 137.289 18.184V17.704C137.001 17.848 136.617 17.992 136.137 18.136C135.673 18.28 135.137 18.352 134.529 18.352C133.729 18.352 132.993 18.224 132.321 17.968C131.665 17.712 131.097 17.336 130.617 16.84C130.153 16.344 129.785 15.728 129.513 14.992C129.257 14.24 129.129 13.376 129.129 12.4C129.129 11.488 129.265 10.648 129.537 9.88C129.825 9.112 130.233 8.456 130.761 7.912C131.305 7.368 131.961 6.944 132.729 6.64C133.497 6.336 134.369 6.184 135.345 6.184C136.289 6.184 137.185 6.256 138.033 6.4C138.881 6.544 139.601 6.696 140.193 6.856V17.728ZM143.191 12.784C143.191 11.68 143.351 10.712 143.671 9.88C144.007 9.048 144.447 8.36 144.991 7.816C145.535 7.256 146.159 6.84 146.863 6.568C147.567 6.28 148.287 6.136 149.023 6.136C150.751 6.136 152.095 6.672 153.055 7.744C154.031 8.816 154.519 10.416 154.519 12.544C154.519 12.704 154.511 12.888 154.495 13.096C154.495 13.288 154.487 13.464 154.471 13.624H146.191C146.271 14.632 146.623 15.416 147.247 15.976C147.887 16.52 148.807 16.792 150.007 16.792C150.711 16.792 151.351 16.728 151.927 16.6C152.519 16.472 152.983 16.336 153.319 16.192L153.703 18.568C153.543 18.648 153.319 18.736 153.031 18.832C152.759 18.912 152.439 18.984 152.071 19.048C151.719 19.128 151.335 19.192 150.919 19.24C150.503 19.288 150.079 19.312 149.647 19.312C148.543 19.312 147.583 19.152 146.767 18.832C145.951 18.496 145.279 18.04 144.751 17.464C144.223 16.872 143.831 16.184 143.575 15.4C143.319 14.6 143.191 13.728 143.191 12.784ZM151.615 11.488C151.615 11.088 151.559 10.712 151.447 10.36C151.335 9.992 151.167 9.68 150.943 9.424C150.735 9.152 150.471 8.944 150.151 8.8C149.847 8.64 149.479 8.56 149.047 8.56C148.599 8.56 148.207 8.648 147.871 8.824C147.535 8.984 147.247 9.2 147.007 9.472C146.783 9.744 146.607 10.056 146.479 10.408C146.351 10.76 146.263 11.12 146.215 11.488H151.615Z" fill="white"/>
            </svg>
          </div>
        </router-link>
        <nav class="navigation">
          <div class="navigation__link medium">SPOT</div>
          <div class="navigation__link medium">Margin</div>
          <div class="navigation__link medium">FuTURES</div>
          <div class="navigation__link medium">OTC</div>
          <div class="navigation__dots" @click="navModal = !navModal">
            <span class="navigation__dot"></span>
            <span class="navigation__dot"></span>
            <span class="navigation__dot"></span>
            <div class="navigation__dots-modal" :class="navModal ? 'active' : ''" @mouseleave="navModal = false">
              <div class="navigation__link medium">etf</div>
              <div class="navigation__link medium">fast loan</div>
              <div class="navigation__link medium">D21 Staking</div>
              <div class="navigation__link medium">D21 power</div>
              <div class="navigation__link medium">Liquidity Mining</div>
            </div>
          </div>
        </nav>
        <div class="header__right">
          <div class="mobile-login"  @click="mobileLogin = !mobileLogin">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect class="hov" x="3" width="10" height="16" rx="2" fill="white"/>
              <rect x="4" y="1" width="8" height="14" rx="1" fill="#03063A"/>
              <rect class="hov" x="6" y="1" width="4" height="1" fill="white"/>
              <rect class="hov" x="7" y="12" width="2" height="2" fill="white"/>
            </svg>
            <div class="mobile-login__modal" :class="mobileLogin ? 'active' : ''">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                  <path d="M20 9.99999H10V20H20V9.99999Z" fill="white"/>
                  <path d="M70 0V5H65V10H70V30H75V35H70V40H75H80V30H95V35H100V30V0H70ZM95 25H75V5H95V25Z" fill="white"/>
                  <path d="M90 9.99999H80V20H90V9.99999Z" fill="white"/>
                  <path d="M20 80H10V90H20V80Z" fill="white"/>
                  <path d="M75 70H70V75H75V70Z" fill="white"/>
                  <path d="M50 95H45V100H50V95Z" fill="white"/>
                  <path d="M55 75H50V80H55V75Z" fill="white"/>
                  <path d="M55 85H50V90H55V85Z" fill="white"/>
                  <path d="M100 60H95V65H100V60Z" fill="white"/>
                  <path d="M5 60H0V65H5V60Z" fill="white"/>
                  <path d="M5 35H0V40H5V35Z" fill="white"/>
                  <path d="M55 4.99999V9.99999H45V15H60V9.99999V4.99999H55Z" fill="white"/>
                  <path d="M95 40V45H85V50H70V45H65V50H55V55H70V60H60H55V55H50V60H45V55H40V60H35V65H45V70H50V65H60V70H55V75H60V85H65V90H70V85H85V75H90V70H85V60H75V55H85V60H90V55H95V50H100V45V40H95ZM80 65V80H65V65H80Z" fill="white"/>
                  <path d="M65 30H60V35H55V40V45H60V40H65V35H70V30H65Z" fill="white"/>
                  <path d="M65 95H55V100H65V95Z" fill="white"/>
                  <path d="M45 4.99999H40V9.99999H45V4.99999Z" fill="white"/>
                  <path d="M85 40H80V45H85V40Z" fill="white"/>
                  <path d="M90 35H85V40H90V35Z" fill="white"/>
                  <path d="M25 60H20V65H25V60Z" fill="white"/>
                  <path d="M30 95V75H35V70V65H30V70H15V65H10H5V70H0V100H30H40V95H30ZM25 95H5V75H25V95Z" fill="white"/>
                  <path d="M35 30H30V35H35V30Z" fill="white"/>
                  <path d="M35 0H30H0V30H5V35H10V30H15V35H20V30H30V20H35V15H30V5H35H40V0H35ZM25 25H5V5H25V25Z" fill="white"/>
                  <path d="M65 15H60V20H65V15Z" fill="white"/>
                  <path d="M55 0H50V5H55V0Z" fill="white"/>
                  <path d="M60 30V25H55V20H50V25H40V20H35V25V30H40V40H25V35H20V40H5V45H15V50H0V55H15V60H20V55H25V60H30V55H40V50H35V45H40H45V50H50H55V45H50V40H45V30H60ZM30 50H20V45H30V50Z" fill="white"/>
                  <path d="M45 80V75V70H40V75H35V80H40V85H35V90H45V85H50V80H45Z" fill="white"/>
                  <path d="M90 90V85H85V90H70V95H80V100H85V95H95V100H100V95V90H90Z" fill="white"/>
                  <path d="M95 70V75H90V80H100V75V70H95Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="100" height="100" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              <div class="mobile-login__modal-text medium">Scan to Download <br>
                App iOS & Android</div>
            </div>
          </div>
          <a href="##" class="header__login-button medium">
            login
          </a>
          <a href="##" class="header__sign-button medium">
            sign up
          </a>
          <div class="colorMode">
            <svg class="night" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.0008 15.9996C4.93986 16.0318 2.14382 14.268 0.854465 11.4918C1.66591 11.8458 2.54473 12.0192 3.42982 12C6.89934 11.9961 9.71101 9.1844 9.71491 5.71488C9.68018 3.36801 8.38524 1.22132 6.3256 0.0957374C6.88107 0.0250134 7.44086 -0.00665198 8.0008 0.00115974C12.4187 0.00115974 16 3.58255 16 8.00036C16 12.4183 12.4187 15.9996 8.0008 15.9996Z" fill="white"/>
            </svg>
            <svg v-if="false" class="day" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="5" stroke="#000A1F" stroke-width="2"/>
              <line x1="12" y1="3" x2="12" y2="1" stroke="#000A1F" stroke-width="2" stroke-linecap="round"/>
              <line x1="12" y1="23" x2="12" y2="21" stroke="#000A1F" stroke-width="2" stroke-linecap="round"/>
              <line x1="1" y1="12" x2="3" y2="12" stroke="#000A1F" stroke-width="2" stroke-linecap="round"/>
              <line x1="21" y1="12" x2="23" y2="12" stroke="#000A1F" stroke-width="2" stroke-linecap="round"/>
              <line x1="19" y1="5.41422" x2="20.4142" y2="4" stroke="#000A1F" stroke-width="2" stroke-linecap="round"/>
              <line x1="1" y1="-1" x2="3" y2="-1" transform="matrix(0.707107 0.707107 0.707107 -0.707107 19 17)" stroke="#000A1F" stroke-width="2" stroke-linecap="round"/>
              <line x1="1" y1="-1" x2="3" y2="-1" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 4.82861 6.82843)" stroke="#000A1F" stroke-width="2" stroke-linecap="round"/>
              <line x1="4.82861" y1="18.4142" x2="3.4144" y2="19.8284" stroke="#000A1F" stroke-width="2" stroke-linecap="round"/>
            </svg>

          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  data () {
    return {
      navModal: false,
      mobileLogin: false,
      activeLink: 1,
      mobileMode: null,
      activeBurger: false,
      firstAnimation: false,
      routes: [
        {
          id: 1,
          title: 'Explore',
          route: {
            name: 'Home',
            params: {
              id: this.$route.params.id
            },
            hash: '#explore'
          }
        },
        {
          id: 2,
          title: 'Community',
          route: {
            name: 'Home',
            params: {
              id: this.$route.params.id
            },
            hash: '#community'
          }
        },
        {
          id: 3,
          title: 'faq',
          route: {
            name: 'Home',
            params: {
              id: this.$route.params.id
            },
            hash: '#faq'
          }
        }
      ]
    }
  },
  methods: {
    mobileModeFunc () {
      if (window.innerWidth >= 768) {
        this.mobileMode = false
      } else {
        this.mobileMode = true
      }
    },
    myEventHandler (e) {
      this.mobileModeFunc()
    },
    openBurger () {
      this.activeBurger = true
    },
    closeBurger () {
      this.activeBurger = false
    },
    activeLinkFunc (id) {
      setTimeout(() => {
        this.activeLink = id
        this.$store.commit('setMenuStatus', id)
      }, 100)
      console.log(id)
    }
  },
  mounted () {
    this.mobileModeFunc()
    setTimeout(() => {
      this.firstAnimation = true
      this.$store.commit('setMenuStatus', null)
    }, 700)
  },
  created () {
    window.addEventListener('resize', this.myEventHandler)
  },
  destroyed () {
    window.removeEventListener('resize', this.myEventHandler)
  }
}
</script>
<style scoped>
  .mobile-login__modal{
    background: #171A54;
    position: absolute;
    top: 30px;
    border-radius: 4px;
    padding: 20px;
    transition: .6s cubic-bezier(.79,.01,.15,.99);
    transform: translateY(10px);
    opacity: 0;
    transition-delay: .2s;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    pointer-events: none;
  }
  .mobile-login__modal.active{
    transform: translateY(0px);
    opacity: 1;
    transition-delay: 0s;
    pointer-events: all;
  }
  .mobile-login__modal-text{
    opacity: .5;
    text-align: center;
    white-space: nowrap;
    margin-top: 12px;
    transition: .6s cubic-bezier(.79,.01,.15,.99);
    opacity: 0;
  }
  .mobile-login__modal.active .mobile-login__modal-text{
    opacity: .5;
    transition-delay: .3s;
  }
  .mobile-login__modal svg{
    transition: .6s cubic-bezier(.79,.01,.15,.99);
    transform: scale(.95);
    opacity: 0;
  }
  .mobile-login__modal.active svg{
    transform: scale(1);
    opacity: 1;
    transition-delay: .2s;
  }
  .mobile-login rect{
    transition: .6s cubic-bezier(.79,.01,.15,.99);
  }
  .mobile-login.active rect.hov,.mobile-login:hover rect.hov{
    fill: #44EFFF;
  }
  .mobile-login{
    position: relative;
    margin-right: 15px;
    padding: 0px 15px;
    cursor: pointer;
    display: flex;
    justify-content: center;
  }
  .header__sign-button{
    transition: .6s cubic-bezier(.79,.01,.15,.99);
    display: flex;
    align-items: center;
    height: 40px;
    background: #205FEC;
    border-radius: 4px;
    cursor: pointer;
    color: #fff;
    text-transform: uppercase;
    font-size: 14px;
    padding: 0px 15px;
    margin-left: 25px;
    margin-right: 65px;
  }
  .header__sign-button:hover{
    background: #44EFFF;
  }
  .header__login-button{
    color: #fff;
    text-transform: uppercase;
    font-size: 14px;
    transition: .6s cubic-bezier(.79,.01,.15,.99);
  }
  .header__login-button:hover{
    color: #44EFFF;
  }
  .header__right{
    display: flex;
    align-items: center;
    margin-left: auto;
    transition: .8s cubic-bezier(.79,.01,.15,.99);
    opacity: 0;
  }
  .animated .header__right{
    opacity: 1;
    transition-delay: .4s;
  }
  .colorMode{
    height: 20px;
    width: 20px;
    position: relative;
    display: flex;
    cursor: pointer;
  }
  .colorMode svg{
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
  }
  .navigation__dots-modal{
    display: flex;
    flex-direction: column;
    background: #171A54;
    border-radius: 4px;
    padding: 25px;
    position: absolute;
    top: 30px;
    transform: translateY(10px);
    opacity: 0;
    pointer-events: none;
    transition: .6s cubic-bezier(.79,.01,.15,.99);
  }
  .navigation__dots-modal.active{
    transform: translateY(0px);
    opacity: 1;
    pointer-events: all;
  }
  .navigation__dots-modal .navigation__link{
    margin-right: auto;
    margin-bottom: 10px;
    white-space: nowrap;
  }
  .navigation__dots-modal .navigation__link:last-child{
    margin-bottom: 0px;
  }
  .navigation__dots{
    display: flex;
    align-items: center;
    height: 15px;
    width: 100%;
    justify-content: center;
    cursor: pointer;
    position: relative;
  }
  .navigation__dot{
    height: 4px;
    width: 4px;
    border-radius: 50%;
    transition: .6s cubic-bezier(.79,.01,.15,.99);
    background: #fff;
    margin: 0px 3px;
  }
  .navigation__dot:nth-child(2){
    transition-delay: .1s;
  }
  .navigation__dot:nth-child(3){
    transition-delay: .2s;
  }
  .navigation__dots:hover .navigation__dot{
    background: #44EFFF;
  }
  .navigation{
    display: flex;
    align-items: center;
    margin-left: 60px;
    transition: .8s cubic-bezier(.79,.01,.15,.99);
    opacity: 0;
  }
  .animated .navigation{
    opacity: 1;
    transition-delay: .3s;
  }
  .navigation__link{
    display: flex;
    position: relative;
    margin-right: 30px;
    transition: .6s cubic-bezier(.79,.01,.15,.99);
    text-transform: uppercase;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
  }
  .navigation__link:after{
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0px;
    height: 1px;
    background: #44EFFF;
    display: flex;
    width: 100%;
    transition: .6s cubic-bezier(.79,.01,.15,.99);
    transform: scaleX(0);
  }
  .navigation__link:hover{
    color: #44EFFF;
  }
  .navigation__link:hover:after{
    transform: scaleX(1);
  }
  .logo{
    display: flex;
    align-items: center;
  }
  .logo > svg{
    transition: .8s cubic-bezier(.79,.01,.15,.99);
    transform: scale(.9);
    opacity: 0;
  }
  .animated .logo > svg{
    transform: scale(1);
    opacity: 1;
    transition-delay: .2s;
  }
  .logo .txt{
    margin-left: 16px;
    overflow: hidden;
  }
  .logo .txt svg{
    transition: .8s cubic-bezier(.79,.01,.15,.99);
    transform: translateY(120%);
    transition-delay: .2s;
  }
  .animated .logo .txt svg{
    transform: translateY(0%);
  }
  header{
    display: flex;
    width: 100%;
    position: fixed;
    z-index: 9999;
    top: 0px;
    left: 0px;
    height: 130px;
    align-items: center;
    padding: 0px 35px;
  }
  header .inner{
    width: 100%;
    display: flex;
    align-items: center;
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1365px){
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    header{
      width: 180px;
      padding: 20px;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
  }
</style>
