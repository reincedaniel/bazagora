<script setup>
import gift from '@images/svg/gift.svg'
import paper from '@images/svg/paper-send.svg'
import rocket from '@images/svg/rocket.svg'
import account from '@images/svg/wizard-account.svg'
import personal from '@images/svg/wizard-personal.svg'
import wizard from '@images/svg/wizard-submit.svg'



const featuresData = [
  {
    title: 'Aconselhamento',
    desc: 'Oferecemos aconselhamento personalizado para ajudar os jovens a navegarem pelos desafios da vida. A nossa equipa de mentores está aqui para ouvir, orientar e apoiar em todas as áreas da vida, desde questões académicas até problemas pessoais.',
    icon: account,
  },
  {
    title: 'Bolsas de Estudo',
    desc: 'Acreditamos que a educação é a chave para o empoderamento. Por isso, disponibilizamos bolsas de estudo para ajudar os jovens talentosos a acederem a oportunidades educativas que possam transformar as suas vidas.',
    icon: rocket,
  },
  {
    title: 'Inscrições',
    desc: 'Facilitamos o processo de inscrição para uma variedade de instituições ao redor do mundo. Desde universidades até programas de intercâmbio e estágios, estamos aqui para ajudar os jovens a darem o próximo passo nas suas jornadas educativas e profissionais.',
    icon: personal,
  },
  {
    title: 'Intercâmbio Cultural',
    desc: 'Oferecemos programas de intercâmbio para que os jovens possam aprender novas línguas, mergulhar em diferentes culturas e expandir seus horizontes globais.',
    icon: paper,
  },
  {
    title: 'Transcrição de Documentos',
    desc: 'Proporcionamos serviços de transcrição de documentos para ajudar os jovens em processos burocráticos e acadêmicos, garantindo precisão e confiabilidade.',
    icon: wizard,
  },
  {
    title: 'E Muitos Mais',
    desc: 'Oferecemos uma ampla gama de serviços e suporte personalizado para atender às necessidades individuais de cada jovem, garantindo seu sucesso em todas as áreas.',
    icon: gift,
  },
];
</script>

<template>
  <VContainer id="features" style="margin-top:90px">
    <div class="feature-cards">
      <div class="headers d-flex justify-center flex-column align-center mb-12">
        <VChip
          label
          color="primary"
          class="mb-4"
          size="small"
        >
        "Quem Somos"!
        </VChip>
        <div class="d-flex text-h4 mb-1 align-center flex-wrap justify-center">
          <div class="position-relative me-2">
            <div class="section-title">
              Pega a Visão,
            </div>
          </div>
          a hora é agora  <span>&nbsp;<i> "Junta-te a nós"! </i></span> 
        </div>
        
        <div class="hero-text-box text-center px-6 pt-3">
            <h6 class="mb-6 text-h6">
              No Bazagora, estamos dedicados a ajudar jovens de todo o Somos uma organização dedicada ao desenvolvimento pessoal e profissional dos jovens. A nossa missão é oferecer suporte, orientação e oportunidades que capacitam os jovens a traçarem os seus próprios caminhos para o sucesso.
            </h6>
        </div>
      </div>
      <VRow>
        <VCol
          v-for="(data, index) in featuresData"
          :key="index"
          cols="12"
          md="4"
          sm="6"
        >
          <div class="d-flex flex-column align-center justify-center gap-4 mx-auto">
            <VIcon
              :icon="data.icon"
              size="64"
              color="primary"
            />
            <div class="text-center">
              <h5 class="text-h5 mb-2">
                {{ data.title }}
              </h5>
              <p
                class="text-body-1 mb-6"
                style="max-inline-size: 310px;"
              >
                {{ data.desc }}
              </p>
            </div>
          </div>
        </VCol>
      </VRow>
    </div>
  </VContainer>
</template>

<style lang="scss" scoped>
.feature-cards {
  margin-block: 3.75rem;
}

.section-title::after {
  position: absolute;
  background: url("../../../assets/images/front-pages/icons/section-title-icon.png") no-repeat left bottom;
  background-size: contain;
  block-size: 100%;
  content: "";
  inline-size: 120%;
  inset-block-end: 0;
  inset-inline-start: -12%;
}

.section-title {
  font-size: 24px;
  font-weight: 800;
  line-height: 36px;
}

.feature {
  .v-avatar {
    &.v-avatar--variant-outlined {
      border: 2px solid rgba(var(--v-theme-primary), 0.32);

      &:hover {
        background: rgba(var(--v-theme-primary), 0.16);
        cursor: pointer;
      }
    }
  }
}
</style>
