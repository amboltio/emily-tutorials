const SqftLiving = document.getElementById('sqft_living')
const Condition = document.getElementById('condition')
const YrBuilt = document.getElementById('yr_built')
const positiveScoreBar = document.getElementById('positive-sentiment-bar-fill')
const emoji = document.getElementById('emoji')
const priceOut = document.getElementById('price')

const apiBaseUrl = 'http://localhost:4242'

const moneyBagEmoji = '💰'
emoji.innerText = moneyBagEmoji

const percentage = (value, sum) => (value / sum) * 100

const updateSentimentScore = (pos) => {
    positiveScoreBar.style.width = `${pos}%`
}

const updateEmoji = (price) => {

    price = parseFloat(parseInt(price))
    scale = 100000
    price = price / scale

    a = 200.0
    b = 3.
    c = 0.5

    emojiSize = a * Math.exp(-b * Math.exp(-c * price))

    if (emojiSize < 10.) emojiSize = 10.

    const size = emojiSize + "px"
    emoji.style.fontSize = size
}

const getPrediction = async (sqft_living, condition, yr_built) => {
    const response = await fetch(`${apiBaseUrl}/api/predict`, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "sqft_living": sqft_living,
            "condition": condition,
            "yr_built": yr_built,
            "model_path": "house-price-data/model.sav"
        })
    })
    const body = await response.json()
    return body.result
}

const getHousePrice = async () => {
    const sqft_living = SqftLiving.value
    const condition = Condition.value
    const yr_built = YrBuilt.value
    let price = await getPrediction(sqft_living, condition, yr_built)
    if (price == null) return
    price = price.substring(1)
    price = parseFloat(price)
    updateEmoji(price)
    priceOut.innerText = price.toLocaleString('en-US', { style: 'currency', currency: 'USD', });
}
