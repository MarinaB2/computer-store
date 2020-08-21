let bankBalance = 100;
let payBalance = 3000;
let laon = false;

let laptops = [
    {
        id: 1,
        name: 'MP idea-2000',
        price: 17000,
        image: '',
        feature1: 'Has a good memory over 500-GB',
        feature2: 'Easy to use',
        feature3: 'Has a beautiful color',
        information: 'A good laptop that you can use everywhere and is very good for work'

    },
    {
        id: 2,
        name: 'MP just Gaming',
        price: 5000,
        image: '',
        feature1: 'Has a super memory over 1-TB',
        feature2: 'A gaming laptop ',
        feature3: 'Is very cheap, so think about it !',
        information: 'A good laptop that you can use everywhere and is very good for gaming '

    },
    {
        id: 3,
        name: 'NP laptop',
        price: 2000,
        image: '',
        feature1: 'Memory is 60-GB',
        feature2: 'Easy to use with a good price',
        feature3: 'Has a camera ',
        information: 'A good laptop that you can use everywhere and is very good for watching youtube vedios '

    },
    {
        id: 4,
        name: 'LN bnl 2008',
        price: 5000,
        image: '',
        feature1: 'Has a good memory over 200-GB',
        feature2: 'Easy to use',
        feature3: 'Has a beautiful color and a camera',
        information: 'A good laptop that you can use everywhere and is very good for work'

    },
    {
        id: 5,
        name: 'No laptop 600',
        price: 1000,
        image: '',
        feature1: 'This is not a laptop ',
        feature2: 'Easy to use',
        feature3: 'Is very small',
        information: 'It is not a laptop and not a mobile ! you do not have to buy it'

    },
];

$(document).ready(function () {

    displayBankBalance(bankBalance);
    displayPayBalance(payBalance);

    $('#toWork').click(function () {
        payBalance += 100;
        displayPayBalance(payBalance);
    })

    $('#toBank').click(function () {
        bankBalance += payBalance;
        payBalance = 0;

        displayBankBalance(bankBalance);
        displayPayBalance(payBalance);
    })


    $('#getLoan').click(function () {
        getLoan();
    });


    laptops.forEach((thelaptop) => {
        $('#selectLaptop').append(
            `<option value="${thelaptop.id}">${thelaptop.name}</option>`
        );
    });

    $('#selectLaptop').on('change', function () {
        selectLaptop();
    });


    $('#buyNow').click(function () {
        buyLaptop();
    })

});


let displayBankBalance = (newAmount) => {
    bankBalance = newAmount;
    document.getElementById('bankBalance').innerHTML = 'Balance ' + newAmount + 'kr';
}

let displayPayBalance = (newAmount) => {
    payBalance = newAmount;
    document.getElementById('payBalance').innerHTML = 'Pay ' + newAmount + 'kr';
}

let getLoan = () => {
    //Using the method propmpt to prompt the user to enter the amount
    let loanValue = window.prompt('Enter the amount of money you wish to take:');


    if (loanValue >= (bankBalance * 2)) {
        alert('You can not take a loan because your balance is not enough !');
    //Checking if the value that the user enterd are less than double the bank balance
    } else if (loanValue <= (bankBalance * 2)) {
        if (laon == false) {
            bankBalance += parseInt(loanValue);;

            displayBankBalance(bankBalance);
            laon = true;

            alert('You have get a loan of ' + loanValue + 'kr');
        } else {
            alert('You took a loan before, so you have to by a laptop before you can get another loan ! ')
        }
    }
}

let selectLaptop = () => {
    //Select a laptop then loop throw laptops to get the information via laptops id
    let theLaptop = $('#selectLaptop').val();

    laptops.forEach((laptop) => {
        if (laptop.id == theLaptop) {
            document.getElementById('laptopName').innerHTML = laptop.name;
            document.getElementById('price').innerHTML = 'Price ' + laptop.price + 'kr';
            document.getElementById('image').src = laptop.image;
            document.getElementById('feature1').innerHTML = laptop.feature1;
            document.getElementById('feature2').innerHTML = laptop.feature2;
            document.getElementById('feature3').innerHTML = laptop.feature3;
            document.getElementById('laptopInfo').innerHTML = laptop.information;

        }
    });
}

let buyLaptop = () => {
    //theLaptop is is the laptop that the user select
    let theLaptop = $('#selectLaptop').val();
    laptops.forEach((laptop) => {
        if (laptop.id == theLaptop) {
            //Checking if the user has enough money to buy the laptop
            if (laptop.price <= bankBalance) {

                alert('The laptop is yours !');

                bankBalance -= laptop.price;
                displayBankBalance(bankBalance);
                loan = false;

            } else {
                alert('!! You can not by this laptop, you do not have enough money !!');
            }
        }
    })
}



