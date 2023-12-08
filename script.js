const userName = document.getElementById('nome')
console.log (userName)

const userKm = document.getElementById('km')
console.log (userKm)

const userAge = document.getElementById('age')
console.log (userAge)

const priceButton = document.getElementById('price-button')
console.log (priceButton)

priceButton.addEventListener('click', function(){

    const userKmInNumber = parseInt (userKm.value)
    console.log (userKmInNumber)

    const userAgeInNumber = parseInt (userAge.value)
    console.log (userKmInNumber)

    const ticketPrice = (userKmInNumber * 0.21)

    console.log ( 'price', ticketPrice, typeof ticketPrice )

    let discount = 0

    if ( userAgeInNumber < 18) {
        discount = ( (ticketPrice * 20) / 100 )
        // oppure price *= 0.8 (perche 0.8 è 100%-20% di sconto = 80% = 0.8)

        discountedPrice = ( ticketPrice - discount )
        console.log ('discountedprice', discountedPrice, typeof discountedPrice)
    }

    else if ( userAge > 65 ) {
        discount = ( (ticketPrice * 40) / 100 )
        // oppure price *= 0.6 (perche 0.6 è 100%-40% di sconto = 60% = 0.6)

        discountedPrice = ( ticketPrice - discount )
        console.log ('discountedprice', discountedPrice, typeof discountedPrice)
    }

    let myTicket = document.getElementById ('my-ticket')
    myTicket.innerHTML = 'My ticket price is ' + discountedPrice + '€'
    console.log (myTicket)

})







//const startForm = document.getElementById ('container-ticket')
//console.log (startForm)

//startForm.addEventListener('click', function(){



//})

