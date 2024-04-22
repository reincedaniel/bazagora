<script setup>
import boyWithLogo from '@images/front-pages/landing-page/faq-boy-with-logos.png'

const faqData = [
  {
    question: 'Como posso aceder aos serviços de aconselhamento do Bazagora?',
    answer: 'Para aceder aos nossos serviços de aconselhamento, basta entrar em contacto connosco através do formulário de contacto no nosso site ou enviar-nos um e-mail. Um dos nossos mentores estará pronto para ajudar-te com as tuas questões e preocupações.',
  },
  {
    question: 'Quais são os critérios de elegibilidade para as bolsas de estudo do Bazagora?',
    answer: 'Os critérios de elegibilidade para as nossas bolsas de estudo variam dependendo do programa específico. Geralmente, consideramos o desempenho académico, as necessidades financeiras e o envolvimento comunitário. Recomendamos que verifiques os detalhes de cada bolsa de estudo em nosso site para obter informações precisas.',
  },
  {
    question: 'Como posso inscrever-me nos programas de intercâmbio oferecidos pelo Bazagora?',
    answer: 'Para inscreveres-te nos nossos programas de intercâmbio, consulta a secção "Intercâmbio" do nosso site para obteres mais informações sobre os programas disponíveis e os requisitos de candidatura. Após selecionares o programa de interesse, segue os passos indicados para concluir o processo de inscrição.',
  },
  {
    question: 'Quais são as vantagens de adquirir uma licença estendida para os recursos do Bazagora?',
    answer: 'A licença estendida permite-te utilizar os nossos recursos de forma mais ampla e flexível. Com uma licença estendida, podes incluir os nossos recursos em projetos comerciais, produtos para venda e muito mais. Consulta os detalhes da licença em nosso site para conhecer todas as suas vantagens.',
  },
  /* {
    question: 'Posso utilizar os recursos do Bazagora para criar um aplicativo SASS?',
    answer: 'Sim, podes utilizar os nossos recursos para criar aplicativos SASS. No entanto, é importante garantir que estejas em conformidade com os termos da licença e atribuir os créditos apropriados ao Bazagora. Consulta os detalhes da licença em nosso site para obteres mais informações sobre o uso dos nossos recursos em aplicativos SASS.',
  }, */
];

</script>

<template>
  <div id="faq">
    <VContainer>
      <!-- 👉 Header  -->
      <div class="faq-section">
        <div class="headers d-flex justify-center flex-column align-center">
          <VChip
            label
            color="primary"
            size="small"
            class="mb-4"
          >
            FAQ
          </VChip>
          <h4 class="d-flex align-center text-h4 mb-1 flex-wrap justify-center">
         
            <div class="position-relative ms-2">
              <div class="section-title">
                Perguntas
              </div>

            </div>  &nbsp;
             frequêntes
          </h4>
          <p class="text-body-1 mb-0">
            Navegue por essas perguntas frequentes para encontrar respostas às perguntas mais frequentes.
          </p>
        </div>
        <VRow>
          <VCol
            cols="12"
            md="5"
          >
            <div class="pt-10 d-flex align-center justify-center h-100">
              <VImg
                :src="boyWithLogo"
                height="330"
                width="330"
              />
            </div>
          </VCol>
          <VCol
            cols="12"
            md="7"
          >
            <VExpansionPanels class="pt-16">
              <VExpansionPanel
                v-for="faq in faqData"
                :key="faq.question"
              >
                <VExpansionPanelTitle>
                  {{ faq.question }}
                </VExpansionPanelTitle>
                <VExpansionPanelText>
                  {{ faq.answer }}
                </VExpansionPanelText>
              </VExpansionPanel>
            </VExpansionPanels>
          </VCol>
        </VRow>
      </div>
    </VContainer>
  </div>
</template>

<style lang="scss" scoped>
.faq-section {
  margin-block: 5.25rem;
}

@media (max-width: 600px) {
  .faq-section {
    margin-block: 4rem;
  }
}

#faq {
  border-radius: 3.75rem 3.75rem 0 0;
  background-color: rgba(var(--v-theme-background));
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
  inline-size: 130%;
  inset-block-end: 12%;
  inset-inline-start: -12%;
}
</style>
