const myBodyElement = document.querySelector('body')
const mainElement = document.createElement('main')
const flipper = document.createElement('button')
const flip20Button = document.createElement('button')


myBodyElement.append(mainElement)
myBodyElement.append(flipper)
flipper.append('Flip a Coin!')
flip20Button.className = 'twentyFlips'
flip20Button.append('Flip 20 Coins!')
myBodyElement.append(flip20Button)




let coin = {
    state: 0,
    flip: function() {
        let coinFlip = Math.round(Math.random())
        this.state = coinFlip
    },
    toString: function() {
        if (this.state === 0) {mainElement.innerHTML = 'Heads!'} else {mainElement.innerHTML = 'Tails!'}
    },
    toHTML: function() {
        let image = document.createElement('img')
        //Heads DiCaprio
        if (this.state === 0) {image.src = 'https://i0.wp.com/www.celebrity-cutouts.com/wp-content/uploads/2018/05/leonardo-di-caprio-celebrity-mask.jpg?resize=450%2C500&ssl=1'
        myBodyElement.append(image)
    }
        // Tails DiCaprio
        else {image.src = 'https://img.buzzfeed.com/buzzfeed-static/static/2016-01/11/19/campaign_images/webdr07/this-is-your-year-bb-2-9038-1452557695-1_dblbig.jpg'
    myBodyElement.append(image)
    }
        return image
    }
}
flipper.addEventListener('click', function () {
    coin.flip()
    coin.toString()
    coin.toHTML()
})

function display20Flips () {
    for (let counter = 0; counter < 20; counter += 1) {
        return coin.flip()
        mainElement.append(coin.toString())
    }
}
flip20Button.addEventListener('click', function () {
    display20Flips()
})