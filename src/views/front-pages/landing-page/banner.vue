<script setup>
import ctaDashborad from '@images/front-pages/landing-page/cta-dashboard.jpg';
</script>

<template>
  <div
    class="landing-cta bg-surface"
    :class="$vuetify.theme.current.dark ? 'banner-bg-dark' : 'banner-bg-light'"
  >
    <VContainer>
      <div class="d-flex justify-center justify-md-space-between flex-wrap gap-6 gap-x-10 position-relative pt-12">
        <div class="align-self-center">
          <div class="banner-title text-primary mb-1">
            Pronto para começar?
          </div>
          <h5 class="text-h5 text-medium-emphasis ">
            Comece com aconselhamento <i>teste gratuito</i> de 25 minutos 
          </h5>
          <h5 class="text-h5 text-medium-emphasis mb-8">
            com um dos nossos especialistas.
          </h5>
          <VBtn
            color="primary"
            disabled=""
            :to="{ name: 'payment' }"
            :size="$vuetify.display.smAndUp ? 'large' : 'default' "
          >
           Aderir
          </VBtn>
        </div>

        <div class="banner-img mb-n5">
          <img
            :src="ctaDashborad"
            class="w-100"
            style="border-radius: 15px;"
          >
        </div>
      </div>
    </VContainer>
  </div>
</template>

<style lang="scss">
.landing-cta {
  background-size: cover;
  margin-block: auto;
}

.banner-title {
  font-size: 34px;
  font-weight: 700;
  line-height: 44px;
}

.banner-bg-light {
  background-image: url("@images/front-pages/backgrounds/cta-bg.png");
}

.banner-bg-dark {
  background-image: url("@images/front-pages/backgrounds/cta-bg-dark.png");
}
</style>
