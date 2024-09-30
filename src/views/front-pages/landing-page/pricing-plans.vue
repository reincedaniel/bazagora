<script setup>
import paperPlane from '@images/front-pages/icons/paper-airplane.png';
import plane from '@images/front-pages/icons/plane.png';
import pricingPlanArrow from '@images/front-pages/icons/pricing-plans-arrow.png';
import shuttleRocket from '@images/front-pages/icons/shuttle-rocket.png';

const annualMonthlyPlanPriceToggler = ref(true)

const pricingPlans = [
  {
    title: 'Aconselhamento',
    image: paperPlane,
    monthlyPrice: 3,
    yearlyPrice: 24,
    features: [
      'Aconselhamento Personalizado',
      'Suporte em todas as áreas da vida',
      'Orientação acadêmica e pessoal',
    ],
    supportType: 'Básico',
    supportMedium: 'Apenas Email',
    respondTime: 'Tempo Médio de Resposta: 24h',
    current: false,
  },
  {
    title: 'Bolsas de Estudo',
    image: plane,
    monthlyPrice: 600,
    yearlyPrice: 0,
    features: [
      'Bolsas de Estudo Disponíveis',
      'Acesso a Oportunidades Educativas',
      'Transformação de Vidas através da Educação',
    ],
    supportType: '+ Os custos adicionais',
    supportMedium: 'Email & Chat',
    respondTime: 'Tempo Médio de Resposta: 6h',
    current: true,
  },
  {
    title: 'Inscrições',
    image: shuttleRocket,
    monthlyPrice: 475,
    yearlyPrice: 0,
    features: [
      'Facilitação de Processos de Inscrição',
      'Acesso a Instituições de Ensino e Treinamento',
      'Apoio Profissional para Inscrições',
    ],
    supportType: '+ Os custos adicionais',
    supportMedium: 'Email, Chat & Google Meet',
    respondTime: 'Suporte ao Vivo',
    current: false,
  },
  {
    title: 'Intercâmbio Cultural',
    image: shuttleRocket,
    monthlyPrice: 700,
    yearlyPrice: 0,
    features: [
      'Programas de Intercâmbio Cultural',
      'Aprendizado de Novas Línguas',
      'Imersão em Diferentes Culturas',
    ],
    supportType: '+ Os custos adicionais',
    supportMedium: 'Email, Chat & Google Meet',
    respondTime: 'Suporte ao Vivo',
    current: false,
  },
  {
    title: 'Transcrição de Documentos',
    image: shuttleRocket,
    monthlyPrice: 15,
    yearlyPrice: 0,
    features: [
      'Serviços de Transcrição de Documentos',
      'Precisão e Confiabilidade',
      'Apoio em Processos Burocráticos e Acadêmicos',
    ],
    supportType: '',
    supportMedium: 'Email, Chat & Google Meet',
    respondTime: 'Suporte ao Vivo',
    current: false,
  },
  {
    title: 'Mentoria',
    image: shuttleRocket,
    monthlyPrice: 35,
    yearlyPrice: 246,
    features: [
      'Ampla Gama de Serviços Personalizados',
      'Suporte Individualizado',
      'Garantia de Sucesso em Todas as Áreas',
    ],
    supportType: 'Exclusivo',
    supportMedium: 'Email, Chat & Google Meet',
    respondTime: 'Suporte ao Vivo',
    current: false,
  },
];

</script>

<template>
  <div id="pricing-plan">
    <VContainer>
      <div class="pricing-plans">
        <!-- 👉 Headers  -->
        <div class="headers d-flex justify-center flex-column align-center flex-wrap">
          <VChip
            label
            color="primary"
            class="mb-4"
            size="small"
          >
          Planos Bazagora
          </VChip>
          <h4 class="d-flex align-center text-h4 mb-1 flex-wrap justify-center">
            <div class="position-relative me-2">
              <div class="section-title">
               Planos personalizados,
              </div>
            </div>
            desenhados exclusivamente para você
          </h4>
          <div class="text-center text-body-1">
            <p class="mb-0">
              Todos os planos incluem mais de 14 ferramentas e recursos avançados para ajudar no seu processo.
            </p>
            <p class="mb-0">
              Escolha o melhor plano para atender às suas necessidades.
            </p>
          </div>
        </div>
        <!-- 👉 Annual and monthly price toggler -->
        <div class="d-flex align-center justify-center mx-auto mt-6 mb-16">
          <VLabel
            for="pricing-plan-toggle"
            class="me-3"
          >
          Pague mensalmente
          </VLabel>
          <div class="position-relative">
            <VSwitch
              id="pricing-plan-toggle"
              v-model="annualMonthlyPlanPriceToggler"
            >
              <template #label>
                <div class="text-body-1">
                  Pague anualmente
                </div>
              </template>
            </VSwitch>
            <div class="position-absolute pricing-plan-arrow d-md-flex d-none">
              <VImg
                :src="pricingPlanArrow"
                class="flip-in-rtl"
                width="60"
                height="42"
              />
              <div class="text-no-wrap text-body-1 font-weight-medium">
                Economize 25%
              </div>
            </div>
          </div>
        </div>
        <VRow>
          <VCol
            v-for="(plan, index) in pricingPlans"
            :key="index"
          >
            <VCard :style="plan.current ? 'border:2px solid rgb(var(--v-theme-primary))' : ''">
              <VCardText class="pa-8 pt-12">
                <VImg
                  :src="plan.image"
                  width="88"
                  height="88"
                  class="mx-auto mb-8"
                />
                <h4 class="text-h4 text-center">
                  {{ plan.title }}
                </h4>
                <div class="d-flex justify-center mb-8 position-relative">
                  <div class="d-flex align-end">
                    <div class="pricing-title text-primary me-1">
                      {{ annualMonthlyPlanPriceToggler ?(plan.yearlyPrice!=0? Math.round(plan.yearlyPrice / 12):plan.monthlyPrice ): plan.monthlyPrice }} mil KZ
                    </div>
                    <span v-if="plan.yearlyPrice!=0" class="text-disabled mb-2">/mês</span>
                    <span v-else class="annual-price-text position-absolute text-sm text-disabled">{{ plan.supportType }}</span>
                    
                  </div>

                  <!-- 👉 Annual Price -->
                  <span
                  v-if="plan.yearlyPrice!=0"
                    v-show="annualMonthlyPlanPriceToggler"
                    class="annual-price-text position-absolute text-sm text-disabled"
                  >
                    {{ plan.yearlyPrice === 0 ? 'free' : `${plan.yearlyPrice} mil KZ/Anual` }}
                  </span>
                </div>
                <VList class="card-list">
                  <VListItem
                    v-for="(item, i) in plan.features"
                    :key="i"
                  >
                    <template #prepend>
                      <VAvatar
                        size="16"
                        :variant="!plan.current ? 'tonal' : 'elevated'"
                        color="primary"
                        class="me-3"
                      >
                        <VIcon
                          icon="tabler-check"
                          size="12"
                          :color="!plan.current ? 'primary' : 'white'"
                        />
                      </VAvatar>
                      <h6 class="text-h6">
                        {{ item }}
                      </h6>
                    </template>
                  </VListItem>
                </VList>
                <VBtn
                  block
                  disabled=""
                  :variant="plan.current ? 'elevated' : 'tonal'"
                  class="mt-8"
                  :to="{ name: 'payment' }"
                >
                  Aderir
                </VBtn>
              </VCardText>
            </VCard>
          </VCol>
        </VRow>
      </div>
    </VContainer>
  </div>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 12px;
}

#pricing-plan {
  border-radius: 3.75rem;
  background-color: rgb(var(--v-theme-background));
}

.pricing-title {
  font-size: 38px;
  font-weight: 800;
  line-height: 52px;
}

.pricing-plans {
  margin-block: 5.25rem;
}

@media (max-width: 600px) {
  .pricing-plans {
    margin-block: 4rem;
  }
}

.save-upto-chip {
  inset-block-start: -1.5rem;
  inset-inline-end: -7rem;
}

.pricing-plan-arrow {
  inset-block-start: -0.5rem;
  inset-inline-end: -8rem;
}

.section-title {
  font-size: 24px;
  font-weight: 800;
  line-height: 36px;
}

.section-title::after {
  position: absolute;
  background: url("../../../assets/images/front-pages/icons/section-title-icon.png") no-repeat left bottom;
  background-size: contain;
  block-size: 100%;
  content: "";
  font-weight: 700;
  inline-size: 120%;
  inset-block-end: 0;
  inset-inline-start: -12%;
}

.annual-price-text {
  inset-block-end: -40%;
}
</style>
