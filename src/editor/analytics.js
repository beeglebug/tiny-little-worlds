const ANALYTICS_CODE = 'UA-17363771-10'

const ga = function () {
  ga.q.push(arguments)
}

ga.q = []
ga.l = Date.now()

window.ga = ga
window.GoogleAnalyticsObject = 'ga'

const script = document.createElement('script')
script.async = true
script.src = 'https://www.google-analytics.com/analytics.js'

const firstScript = document.getElementsByTagName('script')[0]
firstScript.parentNode.insertBefore(script, firstScript)

ga('create', ANALYTICS_CODE, 'auto')
ga('send', 'pageview')
