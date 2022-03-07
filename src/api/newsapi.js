const fetch = require('node-fetch-commonjs')

const newsapi_apikey = process.env.NEWSAPI_APIKEY
const newsApiRoot = 'https://newsapi.org'

const routes = {
    topHeadlines: '/v2/top-headlines'
}

const getNewsAPIURL = (uri) => { 
    const url = new URL(uri, newsApiRoot)
    url.searchParams.append('apiKey', newsapi_apikey)
    return url
}

/* API Functions */

async function topHeadlines (country) {
    if (!country) {
        country = 'gb'
    }
    const url = getNewsAPIURL(routes.topHeadlines)
    url.searchParams.append('country', country)
    const res = await fetch(url.href)
    return res.json()
}

module.exports = {
    topHeadlines
}