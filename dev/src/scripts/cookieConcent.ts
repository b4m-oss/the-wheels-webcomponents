const createConsentTicker = (): void => {
  const ticker = document.createElement('div')
  ticker.classList.add('twls-card')
  ticker.classList.add('twls-ticker')
  ticker.insertAdjacentHTML('beforeend', `<p>This site is use cookie. To use this site, you have to agree to use cookie.</p>`)
  document.body.append(ticker)
}
export const cookieConcent = (): void => {
  // const cookieConcensas = localStorage.getItem('cookieConsensas')

  createConsentTicker()
}