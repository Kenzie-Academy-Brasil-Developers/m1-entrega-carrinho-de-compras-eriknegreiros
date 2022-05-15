const body = document.querySelector('body');
const h1 = document.createElement('h1')
body.appendChild(h1)
h1.innerText = 'Virtual Market'

const main = document.createElement('main');
body.appendChild(main)

const section = document.createElement('section');
main.appendChild(section)

const ul = document.createElement('ul');
section.appendChild(ul)

const menu = document.createElement('li');
menu.classList.add("item_valor");
ul.appendChild(menu)

const item = document.createElement('p');
menu.appendChild(item)
item.innerText = 'Item'

const valor = document.createElement('p');
menu.appendChild(valor)
valor.innerText = 'Valor'

const productsCart = [{
        id: 1,
        name: 'Uva Crimson',
        price: 44.99
    },
    {
        id: 2,
        name: 'Vinho Canção',
        price: 17.98
    },
    {
        id: 3,
        name: 'Água De Coco',
        price: 8.99
    },
    {
        id: 4,
        name: 'Mamão',
        price: 9.98
    },
    {
        id: 5,
        name: 'Água Tônica',
        price: 17.98
    }
]

for (let i = 0; i < productsCart.length; i++) {
    const li = document.createElement('li')
    ul.appendChild(li)

    const nome = document.createElement('p')
    nome.innerText = productsCart[i].name
    li.appendChild(nome)

    const valor = document.createElement('p')
    valor.innerText = productsCart[i].price
    li.appendChild(valor)
}


const total = document.createElement('li');
total.classList.add("total");
ul.appendChild(total)

const preco = document.createElement('p');
total.appendChild(preco)
preco.innerText = 'Total'


const valorFinal = document.createElement('span');
let precoTotal = productsCart.reduce((acc, element) => acc + element.price, 0)
valorFinal.innerText = precoTotal
total.appendChild(valorFinal)

const button = document.createElement('button');

ul.appendChild(button)
    
button.innerText = 'Finalizar Compra'
