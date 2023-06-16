import { State } from '../types'
import waitForLoad from '../utils/waitForLoad'

const domain = 'https://static.zdassets.com'

declare global {
  interface Window {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    zE: {
      activate: () => void
    }
  }
}

/* eslint-disable */
const loadScript = (providerKey: string): boolean => {
  if (window.zE) return false

  var d = document
  function l() {
    var s = d.createElement('script')
    s.type = 'text/javascript'
    s.async = true
    s.id = 'ze-snippet'
    s.src = `${domain}/ekr/snippet.js?key=${providerKey}`
    var x = d.getElementsByTagName('script')[0]
    x.parentNode?.insertBefore(s, x)
  }
  l()

  return true
}

const load = ({
  providerKey,
  setState,
  beforeInit = () => undefined,
  onReady = () => undefined
}: {
  providerKey: string
  setState: (state: State) => void
  beforeInit?: () => void
  onReady?: () => void
}): boolean => {
  const loaded = loadScript(providerKey)

  console.log('loaded...')
  // Continue as long as zendesk hasn’t already been initialised.
  if (loaded) {
    beforeInit()
    waitForLoad(
      () => !!window.zE,
      // Allow zendesk to complete loading before removing fake widget
      () =>
        setTimeout(() => {
          setState('complete')
          onReady()
        }, 2000)
    )
  }

  return true
}

const open = (): void => {
  waitForLoad(
    () => !!window?.zE.activate,
    // zendesk is slow to show once it has loaded
    () => setTimeout(window.zE.activate, 1000)
  )
}

export default {
  domain,
  load,
  open
}
