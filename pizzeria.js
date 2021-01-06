var userData =
    [
        {
            "username": "Red",
            "password": "trinidad",
            "name": "Wilhelm",
            "surname": "Grimm "

        },
        {
            "username": "Holmes",
            "password": "watson",
            "firstName": "Arthur",
            "surname": "Doyle "

        },
    ];


const products = [
    {
        "name": "Margarita",
        "description": "Ost, tomatsås",
        "image": "https://www.pizzeriamums.se/wp-content/uploads/2018/11/4-diavola-600x360.jpg",
        "price": 75
    },
    {
        "name": "Hawaii",
        "description": "Ost, tomatsås, skinka, ananas",
        "image": "https://www.pizzeriamums.se/wp-content/uploads/2018/11/13-kangarun-600x360.jpg",
        "price": 90
    },
    {
        "name": "Vegetariana",
        "description": "Ost, tomatsås, champinjoner, paprika, kronärtskocka",
        "image": "https://www.pizzeriamums.se/wp-content/uploads/2018/11/14-sussi-600x360.jpg",
        "price": 95
    }
];

function populate() {
    var getImage = document.getElementsByClassName("imageSrc");
    var getName = document.getElementsByClassName("productName");
    var getDesc = document.getElementsByClassName("description");
    var getScore = document.getElementsByClassName("price");

    for (var i = 0; i < products.length; i++) {
        getImage[i].src = products[i].image;
        getName[i].innerHTML = products[i].name;
        getDesc[i].innerHTML = products[i].description;
        getScore[i].innerHTML = products[i].price;

    }

}

populate();


var basket = []

function addToBasket(pizza) {
    basket.push(pizza)
    console.log(pizza)
    document.getElementById("count").innerHTML = 'Antal pizzor: ' + basket.length
}


function getPriceTotal() {

    total = 0

    for (const products in basket) {
        total += parseInt(products.price.toString())

    }

    document.getElementById("totalsum").innerHTML = "Totalsumma: " + total;
}

function resetScore() {
    document.getElementById("result").innerHTML = "Tack för ditt köp!"
    basket = []
}


function authenticate() {

    console.log('Clicked login')

    var enteredUsername = document.getElementById('idUsername').value
    var enteredPassword = document.getElementById('idPassword').value

    var usernameField = document.getElementById('idUsername')
    var passwordField = document.getElementById('idPassword')
    var loginButton = document.getElementById('idLogin')
    var signedInUserHeader = document.getElementById('idSignedInUser')

    console.log(enteredUsername)

    if (enteredUsername === "" || enteredPassword === "") {
        alert('Fyll i båda fälten!')
        return
    }


    if (userData[enteredUsername] === "") {
        alert('Användaren finns inte')
    } else {
        for (let i = 0; i < userData.length; i++) {
            if (userData[i].username === enteredUsername) {
                if (userData[i].password === enteredPassword) {
                    alert(enteredUsername + ' är nu inloggad!')
                    loginButton.hidden = true
                    passwordField.hidden = true
                    usernameField.hidden = true
                    signedInUserHeader.innerText = enteredUsername + ' är nu inloggad!'

                    return;
                }
            }
        }
        alert('Felaktigt användarnamn eller lösenord')

    }


}