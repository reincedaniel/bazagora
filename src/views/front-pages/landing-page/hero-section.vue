<script setup>
import { useGenerateImageVariant } from '@/@core/composable/useGenerateImageVariant'
import joinArrow from '@images/front-pages/icons/Join-community-arrow.png'
import heroDashboardImgLight from '@images/front-pages/landing-page/hero-dashboard-light.jpg'
import heroElementsImgDark from '@images/front-pages/landing-page/hero-elements-dark.png'
import heroElementsImgLight from '@images/front-pages/landing-page/hero-elements-light.png'
import { useMouse } from '@vueuse/core'
import 'video.js/dist/video-js.css'
import { useTheme } from 'vuetify'


const theme = useTheme()
const heroElementsImg = useGenerateImageVariant(heroElementsImgLight, heroElementsImgDark)
const heroDashboardImg = useGenerateImageVariant(heroDashboardImgLight, heroDashboardImgLight)
const { x, y } = useMouse({ touch: false })

const translateMouse = computed(() => {
  if (typeof window !== 'undefined') {
    const rotateX = ref((window.innerHeight - 2 * y.value) / 100)
    
    return { transform: `perspective(1200px) rotateX(${ rotateX.value < -40 ? -20 : rotateX.value }deg) rotateY(${ (window.innerWidth - 2 * x.value) / 100 }deg) scale3d(1,1,1)` }
  }
})
</script>

<template>
  <div
    id="home"
    :style="{ background: 'rgb(var(--v-theme-surface))' }"
  >
    <div id="landingHero">
      <div
        class="landing-hero"
        :class="theme.current.value.dark ? 'landing-hero-dark-bg' : 'landing-hero-light-bg'"
      >
        <VContainer >
          <div class="hero-text-box text-center px-6">
            <h1 class="hero-title mb-4">
              Olá, então? "Pega a Visão"!
            </h1>
            <h6 class="mb-6 text-h6">
              No Bazagora, estamos dedicados a ajudar jovens de todo o mundo a alcançar todo o seu potencial. Acreditamos que o conhecimento, a perspetiva de vida e o dinamismo são essenciais para um futuro brilhante.
            </h6>
            <div class="position-relative">
              <h6 class="position-absolute hero-btn-item d-md-flex d-none text-h6 text-medium-emphasis">
                
                <VImg
                  :src="joinArrow"
                  class="flip-in-rtl"
                  width="94"
                  height="31"
                />
              </h6>

              <VBtn
                :size="$vuetify.display.smAndUp ? 'large' : 'default' "
                :to="{ name: 'root', hash: `#features` }"
                :active="false"
              >
              Quem Somos
              </VBtn>
            </div>
          </div>
        </VContainer>

        <div>
       
       <!-- <div>
         <VBtn
           v-for="(item, index) in [
             { image: tiktokImg, store: '@bazagora', to:'https://www.tiktok.com/@bazagora' },
             { image: fbImg, store: '@bazagora', to:'https://www.facebook.com/profile.php?id=61558639232694' },
             { image: ybImg, store: '@bazagora', to:'https://www.youtube.com/@bazagora' },
             { image: instaImg, store: '@bazagora_', to:'https://www.instagram.com/bazagora_/' },
           ]"
           :key="index"
           color="#282c3e"
           height="56"
           class="mb-4 d-block"
         >
         
           <template #default>
             <a
class="buy-now-button d-print-none"
role="button"
rel="noopener noreferrer"
:href="item.to"
target="_blank"
>
             <div class="d-flex align-center gap-x-8 footer-logo-buttons">
               <VImg
                 :src="item.image"
                 height="34"
                 width="34"
               />
               <div class="d-flex flex-column justify-content-start">
               


<div :class="$vuetify.theme.current.dark ? 'text-body-2' : 'text-white-variant text-body-2'">
                   Siga-nos e dê like em:
                 </div>
                 <h6
                   class="text-h6 text-start"
                   :class="$vuetify.theme.current.dark ? 'text-body-1' : 'footer-title'"
                 >
                   {{ item.store }}
                 </h6>


               </div>
             </div>
           </a>
           </template>
         </VBtn>
       </div> -->
     </div>
      </div>
    </div>

    <VContainer class="" style="margin-top: 20px; " >
      <div class="position-relative"  >
        <!-- <div class="hero-animation-img position-absolute">
              <VideoPlayer
                src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
                :poster="InstructorPoster"
                controls
                plays-inline
                :height="$vuetify.display.mdAndUp ? 440 : 250"
                class="w-100 rounded"
              />
            </div> -->
        <div class="blank-section" />
        <div class="hero-animation-img position-absolute">
          <RouterLink
            :to="{ name: 'root' }"
            target="_blank"
          >
            <div
              class="hero-dashboard-img position-relative"
            
            >
              <img
                :src="heroDashboardImg"
                alt="Bazagora"
                class="animation-img"
                style="border-radius: 15px; margin-bottom: 50px"
              >
              <!-- <img
                :src="heroElementsImg"
                alt="Bazagora"
                class="hero-elements-img animation-img position-absolute"
                style="transform: translateZ(1rem); border-radius: 20px;"
              > -->
            </div>
          </RouterLink>
        </div>
      </div>
    </VContainer>
  </div>
</template>

<style lang="scss" scoped>
.landing-hero {
  border-radius: 0 0 50px 50px;
  padding-block: 9.75rem 22rem;
}

.hero-animation-img {
  inline-size: 90%;
  inset-block-start: -25rem;
  inset-inline-start: 4.425rem;
  margin-inline: auto;
}

section {
  display: block;
}

.blank-section {
  background-color: rgba(var(--v-theme-surface));
  min-block-size: 18rem;
}

@media (min-width: 1280px) and (max-width: 1440px) {
  .blank-section {
    min-block-size: 18rem;
  }

  .landing-hero {
    padding-block-end: 22rem;
  }

  .hero-animation-img {
    inset-block-start: -25rem;
  }
}

@media (min-width: 900px) and (max-width: 1279px) {
  .blank-section {
    min-block-size: 13rem;
  }

  .landing-hero {
    padding-block-end: 14rem;
  }

  .hero-animation-img {
    inset-block-start: -17rem;
    inset-inline-start: 2.75rem;
  }
}

@media (min-width: 768px) and (max-width: 899px) {
  .blank-section {
    min-block-size: 12rem;
  }

  .landing-hero {
    padding-block-end: 12rem;
  }

  .hero-animation-img {
    inset-block-start: -15rem;
    inset-inline-start: 2.5rem;
  }
}

@media (min-width: 600px) and (max-width: 767px) {
  .blank-section {
    min-block-size: 12rem;
  }

  .landing-hero {
    padding-block-end: 8rem;
  }

  .hero-animation-img {
    inset-block-start: -11rem;
    inset-inline-start: 2rem;
  }
}

@media (min-width: 425px) and (max-width: 600px) {
  .blank-section {
    min-block-size: 8rem;
  }

  .landing-hero {
    padding-block-end: 8rem;
  }

  .hero-animation-img {
    inset-block-start: -9rem;
    inset-inline-start: 1.7rem;
  }
}

@media (min-width: 300px) and (max-width: 424px) {
  .blank-section {
    min-block-size: 4rem;
  }

  .landing-hero {
    padding-block-end: 6rem;
  }

  .hero-animation-img {
    inset-block-start: -7rem;
    inset-inline-start: 1.25rem;
  }
}

.landing-hero::before {
  position: absolute;
  background-repeat: no-repeat;
  inset-block: 0;
  opacity: 0.5;
}

.landing-hero-dark-bg {
  background-color: #25293c;
  background-image: url("@images/front-pages/backgrounds/hero-bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.landing-hero-light-bg {
  background: url("@images/front-pages/backgrounds/hero-bg.png") center no-repeat, linear-gradient(138.18deg, #eae8fd 0%, #fce5e6 94.44%);
  background-size: cover;
}

@media (min-width: 650px) {
  .hero-text-box {
    inline-size: 38rem;
    margin-block-end: 1rem;
    margin-inline: auto;
  }
}

@media (max-width: 599px) {
  .hero-title {
    font-size: 1.5rem !important;
    line-height: 2.375rem !important;
  }
}

.hero-title {
  animation: shine 2s ease-in-out infinite alternate;
  background: linear-gradient(135deg, #28c76f 0%, #5a4aff 47.92%, #ff3739 100%);
  //  stylelint-disable-next-line property-no-vendor-prefix
  -webkit-background-clip: text;
  background-clip: text;
  font-size: 42px;
  font-weight: 800;
  line-height: 48px;
  -webkit-text-fill-color: rgba(0, 0, 0, 0%);
}

@keyframes shine {
  0% {
    background-position: 0% 50%;
  }

  80% {
    background-position: 50% 90%;
  }

  100% {
    background-position: 91% 100%;
  }
}

.hero-dashboard-img {
  margin-block: 0;
  margin-inline: auto;
  transform-style: preserve-3d;
  transition: all 0.35s;

  img {
    inline-size: 100%;
  }
}

.hero-elements-img {
  position: absolute;
  inset-block: 0;
  inset-inline-start: 0;
}

.feature-cards {
  margin-block-start: 6.25rem;
}

.hero-btn-item {
  inset-block-start: 80%;
  inset-inline-start: 5%;
}
</style>
