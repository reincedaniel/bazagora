<script setup>
import footerDarkBg from '@images/front-pages/backgrounds/footer-bg-dark.png'
import footerLightBg from '@images/front-pages/backgrounds/footer-bg-light.png'
import appleImg from '@images/front-pages/landing-page/apple-icon.png'
import googlePlayImg from '@images/front-pages/landing-page/google-play-icon.png'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

import tiktokImg from '@images/front-pages/landing-page/tiktok-icon.png'
import fbImg from '@images/front-pages/landing-page/fb-icon.png'
import ybImg from '@images/front-pages/landing-page/yb-icon.png'
import instaImg from '@images/front-pages/landing-page/insta-icon.png'

const footerBg = useGenerateImageVariant(footerLightBg, footerDarkBg)

const pagesList = [
  {
    name: 'Pricing',
    to: { name: 'pricing' },
  },
  {
    name: 'Payment',
    to: { name: 'payment' },
    isNew: true,
  },
  {
    name: 'Checkout',
    to: { name: 'checkout' },
  },
  {
    name: 'Help Center',
    to: { name: 'help-center' },
  },
  /* {
    name: 'Login/Register',
    to: { name: 'pages-authentication-login-v2' },
  }, */
]

const demoList = [
  {
    title: 'Vertical Layout',
    to: 'https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-1/dashboards/analytics',
  },
  {
    title: 'Horizontal Layout',
    to: 'https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-5/dashboards/analytics',
  },
  {
    title: 'Bordered Layout',
    to: 'https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-2/dashboards/analytics',
  },
  {
    title: 'Semi Dark Layout',
    to: 'https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-3/dashboards/analytics',
  },
  {
    title: 'Dark Layout',
    to: 'https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-4/dashboards/analytics',
  },
]
</script>

<template>
  <div class="footer">
    <div
      class="footer-top pt-11"
      :style="{ 'background-image': `url(${footerBg})` }"
    >
      <VContainer>
        <VRow>
          <!-- 👉 Footer  -->
          <VCol
            cols="12"
            md="9"
          >
            <div
              class="mb-4"
              :class="$vuetify.display.smAndDown ? 'w-100' : 'w-75'"
            >
              <div class="app-logo mb-6">
                <VNodeRenderer :nodes="themeConfig.app.logo" />
                <!-- <h1 class="app-logo-title text-white">
                  {{ themeConfig.app.title }}
                </h1> -->
              </div>

              <div
                class="mb-6"
                :class="$vuetify.theme.current.dark ? 'text-body-1' : 'text-white-variant'"
              >
Entra em contacto connosco hoje mesmo para saberes mais sobre como podemos ajudar-te a alcançar os teus objetivos.
              </div>
              <VForm class="subscribe-form d-flex align-center">
                <AppTextField
                  label="Assine o boletim informativo"
                  placeholder="daniel.carlos@exemplo.com"
                />
                <VBtn class="align-self-end rounded-s-0">
                  Se inscrever
                </VBtn>
              </VForm>
            </div>
          </VCol>

          <!-- 👉 Demos -->
     <!--      <VCol
            md="2"
            sm="4"
            xs="6"
          >
            <div>
              <h6 class="footer-title text-h6 mb-6">
                Demos
              </h6>
              <ul style="list-style: none;">
                <li
                  v-for="(item, index) in demoList"
                  :key="index"
                  class="mb-4"
                >
                  <a
                    :href="item.to"
                    target="_blank"
                    rel="noopener noreferrer"
                    :class="$vuetify.theme.current.dark ? 'text-body-1' : 'text-white-variant'"
                  >
                    {{ item.title }}
                  </a>
                </li>
              </ul>
            </div>
          </VCol> -->

          <!-- 👉 Pages  -->
         <!--  <VCol
            md="2"
            sm="4"
            xs="6"
          >
            <div>
              <h6 class="footer-title text-h6 mb-6">
                Pages
              </h6>
              <ul style="list-style: none;">
                <li
                  v-for="(item, index) in pagesList"
                  :key="index"
                  class="mb-4"
                >
                  <RouterLink
                    :class="$vuetify.theme.current.dark ? 'text-body-1' : 'text-white-variant'"
                    class="me-2"
                    :to="item.to"
                  >
                    {{ item.name }}
                  </RouterLink>
                  <template v-if="item.isNew">
                    <VChip
                      color="primary"
                      variant="elevated"
                      label
                      size="small"
                    >
                      New
                    </VChip>
                  </template>
                </li>
              </ul>
            </div>
          </VCol> -->

          <!-- 👉 Download App -->
          <VCol
            cols="12"
            md="3"
          
          >
            <div>
       
              <div>
                <VBtn
                  v-for="(item, index) in [
                    { image: tiktokImg, store: '@bazagora', to:'https://www.tiktok.com/@bazagora' },
                    { image: fbImg, store: '@bazagora', to:'https://www.facebook.com/profile.php?id=61558639232694' },
                    { image: ybImg, store: '@bazagora', to:'https://www.youtube.com/@bazagora' },
                    { image: instaImg, store: '@bazagora_', to:'https://www.facebook.com/profile.php?id=61558639232694' },
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
              </div>
            </div>
          </VCol>
        </VRow>
      </VContainer>
    </div>

    <!-- 👉 Footer Line -->
    <div class="footer-line w-100">
      <VContainer>
        <div class="d-flex justify-space-between flex-wrap gap-y-5 align-center">
          <div class="text-body-1 text-white-variant text-wrap me-4">
            &copy;

            {{ new Date().getFullYear() }}
            <a
              href="https://pixinvent.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="font-weight-bold ms-1 text-white"
            >Bazagora</a>,
            Feito com ❤️ para uma web melhor.
          </div>

          <div class="d-flex gap-x-6">
            <template
              v-for="(item, index) in [
                { title: 'github', icon: 'tabler-brand-github-filled', href: 'https://github.com/pixinvent' },
                { title: 'facebook', icon: 'tabler-brand-facebook-filled', href: 'https://www.facebook.com/pixinvents/' },
                { title: 'twitter', icon: 'tabler-brand-twitter-filled', href: 'https://twitter.com/pixinvents' },
                { title: 'google', icon: 'tabler-brand-youtube-filled', href: 'https://www.youtube.com/channel/UClOcB3o1goJ293ri_Hxpklg' },
              ]"
              :key="index"
            >
              <a
                :href="item.href"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VIcon
                  :icon="item.icon"
                  size="16"
                  color="white"
                />
              </a>
            </template>
          </div>
        </div>
      </VContainer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-title {
  color: rgba(255, 255, 255, 92%);
}

.footer-top {
  border-radius: 60px 60px 0 0;
  background-size: cover;
  color: #fff;
}

.footer-line {
  background: #282c3e;
}
</style>

<style lang="scss">
.subscribe-form {
  .v-label {
    color: rgba(225, 222, 245, 90%) !important;
  }

  .v-field {
    border-end-end-radius: 0;
    border-end-start-radius: 10px;
    border-start-end-radius: 0;
    border-start-start-radius: 10px;

    input.v-field__input::placeholder {
      color: rgba(225, 222, 245, 40%) !important;
    }

    input.v-field__input {
      color: rgba(255, 255, 255, 78%);
    }
  }
}

.footer {
  border-radius: 50%;

  @media (min-width: 600px) and (max-width: 960px) {
    .v-container {
      padding-inline: 2rem !important;
    }

    .footer-logo-buttons {
      gap: 0.75rem;
    }
  }
}
</style>
