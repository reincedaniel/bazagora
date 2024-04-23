<script setup>
import teamPerson1 from '@images/front-pages/landing-page/team-member-1.jpg'
import teamPerson2 from '@images/front-pages/landing-page/team-member-2.jpg'
import teamPerson3 from '@images/front-pages/landing-page/team-member-3.jpg'
import teamPerson4 from '@images/front-pages/landing-page/team-member-4.jpg'
import teamPerson5 from '@images/front-pages/landing-page/team-member-5.jpg'

const teamData = ref([
  {
    name: 'Lourenço Carlos',
    position: 'Analista de Dados e Avaliação em Tecnologia da Informação',
    image: teamPerson1,
    backgroundColor: 'rgba(144, 85, 253, 0.16)',
    borderColor: 'rgba(144, 85, 253,0.16)',
    isHover: false,
    nickname:'@enzadaz'
  },
  {
    name: 'Tomer Denis ',
    position: 'Coordenador de Eventos e Programas de mobilidade',
    image: teamPerson2,
    backgroundColor: 'rgba(22, 177, 255, 0.16)',
    borderColor: 'rgba(22, 177, 255,0.16)',
    isHover: false,
    nickname:'@angolanonagringa23'
  },
  {
    name: 'Vanessa José',
    position: 'Assistente de Comunicação e Marketing',
    image: teamPerson3,
    backgroundColor: 'rgba(255, 76, 81, 0.16)',
    borderColor: 'rgba(255, 76, 81,0.16)',
    isHover: false,
    nickname:'@vanessa.jose'
  },
  {
    name: 'Wesley Sten',
    position: 'Especialista em Bolsas de Estudo e Intercâmbio',
    image: teamPerson4,
    backgroundColor: 'rgba(86, 202, 0, 0.16)',
    borderColor: 'rgba(86, 202, 0,0.16)',
    isHover: false,
    nickname:'@emigrantesvision11'
  },
  {
    name: 'Diangani Robinho',
    position: 'Gerente de Parcerias Institucionais',
    image: teamPerson5,
    backgroundColor: 'rgba(128, 90, 0, 0.16)',
    borderColor: 'rgba(128, 90, 0,0.16)',
    isHover: false,
    nickname:'@senhor_sucesso'
  },
])
</script>

<template>
  <VContainer id="team">
    <div class="our-team pa-">
      <div class="headers d-flex justify-center flex-column align-center">
        <VChip
          label
          color="primary"
          class="mb-4"
          size="small"
        >
        Nossa Equipe
        </VChip>

        <h4 class="d-flex align-center text-h4 mb-1 flex-wrap justify-center">
          <div class="position-relative me-2">
            <div class="section-title">
              Suportado
            </div>
          </div>
          por pessoas reais
        </h4>

        <p class="text-center text-body-1 mb-0">
          Quem está por trás dessas interfaces lindas?
        </p>
      </div>

      <VRow>
        <VCol
          v-for="(data, index) in teamData"
          :key="index"
          cols="12"
          lg="3"
          sm="6"
          style="padding-bottom: 60px;"
        >
          <VCard
            flat
            min-width="100"
            class="position-relative overflow-visible team-card mb-lg-0 mb-12"
          >
            <div :style="{ maxHeight: '100px', minHeight: '100px', borderRadius: '90px 20px 0 0', backgroundColor: `${data.backgroundColor}`, border: `1px solid ${data.borderColor}`, borderBottom: 'none' }">
              <!-- <VImg
                :src="data.image"
                height="240"
                class="team-image"
                style="border-radius: 15px;"
                
              /> -->
               <img
               :src="data.image"
                height="150"
                class="team-image"
                style="border-radius: 15px;"
              >
            </div>
            <VCardText
              class="text-center pa-4"
              :style="{ border: `1px solid ${data.borderColor}`, borderBlockStart: 'none', borderRadius: '0 0 6px 6px', boxSizing: 'border-box' }"
            >
              <h5 class="text-h5">
                {{ data.name }}        
              </h5>
              <VChip
          label
          color="primary"
          class="mb-2"
          size="small"
        >
        {{ data.nickname }} 
        </VChip>
              <p class="text-body-2 text-disabled mb-0" style="font-weight: bold;">
                {{ data.position }}
              </p>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
    </div>
  </VContainer>
</template>

<style lang="scss" scoped>
.team-image {
  position: absolute;
  inset-block-start: -3.4rem;
  inset-inline: 0;
}

.headers {
  margin-block-end: 7.4375rem;
}

.our-team {
  margin-block: 5.25rem;
}

@media (max-width: 1264px) {
  .our-team {
    margin-block-end: 1rem;
  }
}

.team-card {
  border-radius: 90px 20px 6px 6px;
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
  font-weight: 800;
  inline-size: 120%;
  inset-block-end: 12%;
  inset-inline-start: -12%;
}
</style>
