const send = document.querySelector('#send')
const date = document.querySelectorAll('input[type=date]')
const data = [ 
    {
        "id" : 1,
        "Oddział" : "Dolnośląski Oddział Wójewódzki NFZ",
        "email" : "",
    },
    {
        "id" : 2,
        "Oddział" : "Kujawsko-Pomorski Oddział Wójewódzki NFZ",
    },
    {
        "id" : 3 ,
        "Oddział" : "Lubelski Oddział Wójewódzki NFZ",

    },
    {
        "id" : 4,
        "Oddział" : "Lubuski Oddział Wójewódzki NFZ",
    },
    {
        "id" : 5,
        "Oddział" : "Łódzki Oddział Wójewódzki NFZ",

    },
    {
        "id" : 6,
        "Oddział" : "Małopolski Oddział Wójewódzki NFZ",
    },
    {
        "id" : 7,
        "Oddział" : "Mazowiecki Oddział Wójewódzki NFZ",
    },
    {
        "id" : 8,
        "Oddział" : "Opolski Oddział Wójewódzki NFZ",
    },
    {
        "id" : 9,
        "Oddział" : "Podkarpacki Oddział Wójewódzki NFZ",
    },
    {
        "id" : 10,
        "Oddział" : "Podlaski Oddział Wójewódzki NFZ", 
    },
    {
        "id" : 11,
        "Oddział" : "Pomorski Oddział Wójewódzki NFZ",
    },
    {
        "id" : 12,
        "Oddział" : "Śląski Oddział Wójewódzki NFZ",
    },
    {
        "id" : 13,
        "Oddział" : "Świętokrzyski Oddział Wójewódzki NFZ",
    },
    {
        "id" : 14,
        "Oddział" : "Warmińsko-Mazurski Oddział Wójewódzki NFZ", 
    },
    {
        "id" : 15,
        "Oddział" : "Wielkopolski Oddział Wójewódzki NFZ", 
    },
    {
        "id" : 16,
        "Oddział" : "Zachodniopomorski Oddział Wójewódzki NFZ", 
    },
]





console.log (data)

send.addEventListener("click",() => {
    console.log(date);
});
