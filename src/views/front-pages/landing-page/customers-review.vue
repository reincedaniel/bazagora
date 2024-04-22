<script setup>
import { register } from 'swiper/element/bundle'
import { useGenerateImageVariant } from '@/@core/composable/useGenerateImageVariant'
import logo1dark from '@images/front-pages/branding/logo-1-dark.png'
import logo1light from '@images/front-pages/branding/logo-1-light.png'
import logo1 from '@images/front-pages/branding/logo-1.png'
import logo2dark from '@images/front-pages/branding/logo-2-dark.png'
import logo2light from '@images/front-pages/branding/logo-2-light.png'
import logo2 from '@images/front-pages/branding/logo-2.png'
import logo3dark from '@images/front-pages/branding/logo-3-dark.png'
import logo3light from '@images/front-pages/branding/logo-3-light.png'
import logo3 from '@images/front-pages/branding/logo-3.png'
import logo4dark from '@images/front-pages/branding/logo-4-dark.png'
import logo4light from '@images/front-pages/branding/logo-4-light.png'
import logo4 from '@images/front-pages/branding/logo-4.png'
import logo5dark from '@images/front-pages/branding/logo-5-dark.png'
import logo5light from '@images/front-pages/branding/logo-5-light.png'
import avatar1 from '@images/avatars/avatar-1.jpg'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'

register()

const brandLogo1 = useGenerateImageVariant(logo1light, logo1dark)
const brandLogo2 = useGenerateImageVariant(logo2light, logo2dark)
const brandLogo3 = useGenerateImageVariant(logo3light, logo3dark)
const brandLogo4 = useGenerateImageVariant(logo4light, logo4dark)
const brandLogo5 = useGenerateImageVariant(logo5light, logo5dark)

const reviewData = [
  {
    desc: 'Um serviço excepcional que realmente faz a diferença na vida dos jovens. Os mentores são incríveis e oferecem orientação personalizada que realmente ajuda a superar os desafios.',
    img: logo1,
    rating: 5,
    name: 'Enzadaz',
    position: 'Estudante em Coimbra',
    avatar: avatar1,
  },
  {
    desc: 'Estou impressionado com a qualidade das bolsas de estudo oferecidas pela Bazagora. Elas realmente abrem portas para oportunidades educacionais que antes eram inacessíveis.',
    img: logo2,
    rating: 5,
    name: 'Pedro Tomás',
    position: 'Estudante da Inglaterra',
    avatar: avatar3,
  },
  {
    desc: 'O serviço de inscrição da Bazagora facilitou muito o processo de aplicação para diversas instituições de ensino. Eles realmente se preocupam em tornar o processo mais acessível e menos estressante para os jovens.',
    img: logo3,
    rating: 4,
    name: 'Eugênia Moore',
    position: 'Estudante no Japão',
    avatar: avatar2,
  },
  {
    desc: 'Participar de um programa de intercâmbio cultural da Bazagora foi uma das melhores decisões que já tomei. Aprendi tanto sobre outras culturas e ampliei meus horizontes de uma maneira que nunca imaginei ser possível.',
    img: logo4,
    rating: 5,
    name: 'Sara Kiala',
    position: 'Bolseira na Rússia',
    avatar: avatar4,
  },
  {
    desc: 'Os serviços de transcrição de documentos da Bazagora são extremamente úteis para lidar com toda a papelada necessária para os processos acadêmicos e burocráticos. Eles garantem precisão e confiabilidade em cada transcrição.',
    img: logo3,
    rating: 5,
    name: 'Pedro Cortez',
    position: 'Estudante do IPC',
    avatar: avatar5,
  },
  {
    desc: 'Recomendo fortemente a Bazagora para qualquer jovem que esteja buscando suporte e orientação em sua jornada educacional e profissional. Eles oferecem uma ampla gama de serviços personalizados que realmente fazem a diferença.',
    img: logo1,
    rating: 5,
    name: 'Gizela Rita',
    position: 'Estudante em Vila Real',
    avatar: avatar2,
  },
  {
    desc: 'A Bazagora é incrível, e eu particularmente gosto de saber que se eu ficar preso em alguma coisa, sempre há uma comunidade prestativa para me ajudar. Eles realmente se preocupam com o sucesso dos jovens.',
    img: logo2,
    rating: 5,
    name: 'Yuri Pedro',
    position: 'Estudante em Portugal',
    avatar: avatar3,
  },
  /* {
    desc: 'Este serviço é superior de várias maneiras. O código, o design, as atualizações regulares, o suporte... É o pacote completo. Trabalho excelente.',
    img: logo3,
    rating: 4,
    name: 'Eugenia Moore',
    position: 'CTO do Airbnb',
    avatar: avatar3,
  },
  {
    desc: 'Todos os requisitos para desenvolvedores foram levados em consideração, então sou capaz de construir qualquer interface bonita que eu queira.',
    img: logo4,
    rating: 4,
    name: 'Sara Smith',
    position: 'Fundadora da Continental',
    avatar: avatar4,
  },
  {
    desc: 'Este modelo é realmente limpo e bem documentado. A documentação é muito fácil de entender e é sempre fácil encontrar uma captura de tela do site deles.',
    img: logo2,
    rating: 5,
    name: 'Curtis Fletcher',
    position: 'Líder de Design na Dribbble',
    avatar: avatar5,
  }, */
];


const customerReviewSwiper = ref(null)

const slide = dir => {
  const swiper = customerReviewSwiper.value?.swiper
  if (dir === 'prev')
    swiper.slidePrev()
  swiper.slideNext()
}
</script>

<template>
  <div
    id="customer-review"
    class="position-relative"
  >
    <div class="customer-reviews">
      <VContainer>
        <!-- 👉 Headers  -->
        <VRow>
          <VCol
            cols="12"
            md="3"
          >
            <div
              class="headers d-flex justify-center flex-column align-start h-100"
              style="max-inline-size: 275px;"
            >
              <VChip
                label
                color="primary"
                class="mb-4"
                size="small"
              >
              Avaliações de clientes reais
              </VChip>
              <div class="position-relative mb-1 me-2">
                <div class="section-title">
                  As pessoas dizem
                </div>
              </div>
              <p class="text-body-1 mb-12">
                Veja o que nossos clientes têm a dizer sobre sua experiência.
              </p>
              <div class="position-relative">
                <IconBtn
                  class="reviews-button-prev rounded me-4"
                  variant="tonal"
                  color="primary"
                  @click="slide('prev')"
                >
                  <VIcon
                    icon="tabler-chevron-left"
                    class="flip-in-rtl"
                  />
                </IconBtn>

                <IconBtn
                  class="reviews-button-next rounded"
                  variant="tonal"
                  color="primary"
                  @click="slide('next')"
                >
                  <VIcon
                    icon="tabler-chevron-right"
                    class="flip-in-rtl"
                  />
                </IconBtn>
              </div>
            </div>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <!-- 👉 Customer Review Swiper -->
            <div class="swiper-reviews-carousel">
              <!-- eslint-disable vue/attribute-hyphenation -->
              <swiper-container
                ref="customerReviewSwiper"
                slides-per-view="1"
                space-between="20"
                loop="true"
                autoplay-delay="3000"
                autoplay-disable-on-interaction="false"
                events-prefix="swiper-"
                :injectStyles="[
                  `
                    .swiper{
                      padding-block: 12px;
                      padding-inline: 12px;
                      margin-inline: -12px;
                    }
                    .swiper-button-next, .swiper-button-prev{
                      visibility: hidden;
                    }
                  `,
                ]"
                navigation="{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }"
                :breakpoints="{
                  1280: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  960: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  600: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                }"
              >
                <swiper-slide
                  v-for="(data, index) in reviewData"
                  :key="index"
                >
                  <VCard class="d-flex h-100 align-stretch">
                    <VCardText class="pa-6 d-flex flex-column justify-space-between align-start">
                      <!-- <img
                        :src="data.img"
                        style="block-size: 1.375rem;"
                        class="mb-3"
                      > -->
                      <p class="text-body-1">
                        {{ data.desc }}
                      </p>

                      <VRating
                        :model-value="data.rating"
                        color="warning"
                        density="compact"
                        class="mb-4"
                        readonly
                      />
                      <div class="d-flex align-center gap-x-3">
                        <VAvatar
                          :image="data.avatar"
                          size="32"
                        />
                        <div>
                          <h6 class="text-h6">
                            {{ data.name }}
                          </h6>

                          <div class="text-body-2 text-disabled">
                            {{ data.position }}
                          </div>
                        </div>
                      </div>
                    </VCardText>
                  </VCard>
                </swiper-slide>
              </swiper-container>
            </div>
          </VCol>
        </VRow>
      </VContainer>

      <VDivider class="w-100 swiper-divider" />

      <VContainer>
        <!-- 👉 Brand-logo Swiper  -->
        <div class="swiper-brands-carousel">
          <swiper-container
            slides-per-view="2"
            :space-between="10"
            events-prefix="swiper-"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: true,
            }"
            :breakpoints="{
              992: {
                slidesPerView: 5,
              },
              768: {
                slidesPerView: 3,
              },
            }"
          >
            <swiper-slide
              v-for="(img, index) in [brandLogo1, brandLogo2, brandLogo3, brandLogo4, brandLogo5]"
              :key="index"
            >
              <VImg
                :src="img"
                height="38"
              />
            </swiper-slide>
          </swiper-container>
        </div>
      </VContainer>
    </div>
  </div>
</template>

<style lang="scss">
@use "swiper/css/bundle";

swiper-container::part(bullet-active) {
  border-radius: 6px;
  background-color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity));
  inline-size: 38px;
}

swiper-container::part(bullet) {
  background-color: rgba(var(--v-theme-on-background));
}

.swiper-divider {
  margin-block: 72px 1rem;
}

.swiper-reviews-carousel {
  swiper-container {
    .swiper {
      padding-block-end: 3rem;
    }

    .swiper-button-next {
      display: none;
    }
  }

  swiper-slide {
    block-size: auto;
    opacity: 1;
  }
}
</style>

<style lang="scss" scoped>
.customer-reviews {
  padding-block: 72px 84px;
}

@media (max-width: 600px) {
  .customer-reviews {
    padding-block: 4rem;
  }
}

#customer-review {
  border-radius: 3.75rem 3.75rem 0 0;
  background-color: rgb(var(--v-theme-background));
}

.section-title {
  font-size: 24px;
  font-weight: 800;
  line-height: 36px;
}

.section-title::after {
  position: absolute;
  background: url("../../../assets/images/front-pages/icons/section-title-icon.png") no-repeat left bottom/contain;
  background-size: contain;
  block-size: 100%;
  content: "";
  font-weight: 800;
  inline-size: 120%;
  inset-block-end: 0;
  inset-inline-start: -12%;
}
</style>
