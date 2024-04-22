import { setupWorker } from 'msw/browser'

// Handlers

import { handlerPagesHelpCenter } from '@db/pages/help-center/index'

const worker = setupWorker(...handlerPagesHelpCenter)
export default function () {
  const workerUrl = `${import.meta.env.BASE_URL ?? '/'}mockServiceWorker.js`

  worker.start({
    serviceWorker: {
      url: workerUrl,
    },
    onUnhandledRequest: 'bypass',
  })
}
