var product_arr = localStorage.getItem('products')

var cart = JSON.parse(localStorage.getItem('cart')) || []
var fav = JSON.parse(localStorage.getItem('fav')) || []


product_arr = JSON.parse(product_arr)
console.log(product_arr, "initial pro array")
var select = document.getElementById('sort')

var div = document.getElementById('display')
var pro

window.addEventListener('load', function() {
    display(product_arr)
})

function change() {
    if (select.value == 'low') {
        pro = product_arr.sort((a, b) => a.price - b.price)
        display(pro)
        console.log(pro, 'inside filter low')
    }
    if (select.value == 'high') {
        pro = product_arr.sort((a, b) => b.price - a.price)
        display(pro)
        console.log(pro, 'inside filter high')
    }
    if (select.value == 'accend') {
        pro = product_arr.sort((a, b) => (a.name > b.name) ? 1 : (b.name > a.name) ? -1 : 0)
        display(pro)
    }
    if (select.value == 'deccend') {
        pro = product_arr.sort((a, b) => (a.name > b.name) ? -1 : (b.name > a.name) ? 1 : 0)
        display(pro)
    }
    if (select.value == 'showall')
        display(product_arr)
}

//display(product_arr)



function display(pro) {

    div.textContent = ""
    pro.forEach(element => {
        //console.log(element)
        var { name, price, categoriy } = element
        console.log(name, price, categoriy)
        var p1 = document.createElement('p')
        var p2 = document.createElement('p')
        var p3 = document.createElement('p')

        var btn = document.createElement('button')
        btn.textContent = 'Add to cart'
        btn.addEventListener('click', function() {
            adtocart(element)
        })
        var btn2 = document.createElement('button')
        btn2.textContent = 'add to fav'
        btn2.addEventListener('click', function() {
            addtofav(element)
        })
        p1.textContent = `Brand:- ${name}`
        p2.textContent = `Price:- ${price}`
        p3.textContent = `Category:- ${categoriy}`
        div.append(p1, p2, p3, btn, btn2)


    })
}


function adtocart(element) {
    cart.push(element)
    localStorage.setItem('cart', JSON.stringify(cart))
}

function gotocart() {
    location.assign('cart.html')
}

function addtofav(element) {
    //console.log(element)
    fav.push(element)
    localStorage.setItem('fav', JSON.stringify(fav))
}