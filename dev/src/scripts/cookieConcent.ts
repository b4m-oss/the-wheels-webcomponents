const createConsentTicker = (): void => {
  const ticker = document.createElement('div')
  ticker.classList.add('twls-card')
  ticker.classList.add('twls-ticker')
  ticker.insertAdjacentHTML('beforeend', `<p>This site is use cookie. To use this site, you have to agree to use cookie.</p>`)
  ticker.style.backgroundColor = 'var(--bg-page)'
  ticker.style.padding = '1em 2em'
  const wrapper = document.createElement('div')
  wrapper.style.backgroundColor = 'rgba(98,98,98,.5)'
  wrapper.style.width = '100dvw'
  wrapper.style.paddingTop = '2em'
  wrapper.style.paddingBottom = '2em'
  wrapper.style.display = 'flex'
  wrapper.style.flexFlow = 'column'
  wrapper.style.justifyContent = 'center'
  wrapper.style.alignItems = 'center'
  wrapper.style.position = 'fixed'
  wrapper.style.bottom = '0'
  wrapper.style.left = '50%'
  wrapper.style.transform = 'translateX(-50%)'
  

  wrapper.appendChild(ticker)
  document.body.appendChild(wrapper)
}
export const cookieConcent = (): void => {
  // const cookieConcensas = localStorage.getItem('cookieConsensas')

  

  createConsentTicker()
}