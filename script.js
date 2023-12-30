const userName = document.getElementById('nome')
console.log (userName)

const userKm = document.getElementById('km')
console.log (userKm)

const userAge = document.getElementById('age')
console.log (userAge)

const priceButton = document.getElementById('price-button')
console.log (priceButton)

const priceForm = document.getElementById('container-ticket')
console.log (priceForm)

priceForm.addEventListener('submit', function(event){

    event.preventDefault();

    const userKmInNumber = parseInt (userKm.value);
    console.log (userKmInNumber);

    const userAgeInNumber = parseInt (userAge.value);
    console.log (userKmInNumber);

    const ticketPrice = (userKmInNumber * 0.21);

    console.log ( 'price', ticketPrice, typeof ticketPrice );

    let discount = 0;

    if ( userAgeInNumber < 18) {
        discount = ( (ticketPrice * 20) / 100 );

        discountedPrice = ( ticketPrice - discount );
        console.log ('discountedprice', discountedPrice, typeof discountedPrice);
    }

    else if ( userAge > 65 ) {
        discount = ( (ticketPrice * 40) / 100 );

        discountedPrice = ( ticketPrice - discount );
        console.log ('discountedprice', discountedPrice, typeof discountedPrice);
    }

    let myTicket = document.getElementById ('my-ticket');
    myTicket.innerHTML = 'My ticket price is ' + discountedPrice.toFixed(2) + '€' ;
    console.log (myTicket);

})

//const resetButton = document.getElementById('reset-button');
// console.log (resetButton);

// resetButton.addEventListener('click', function(){ 






//})






