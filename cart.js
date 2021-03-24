var cartitem = JSON.parse(localStorage.getItem('cart'))
console.log(cartitem)

var div = document.getElementById('dis')
var div1 = document.getElementById('price')
cartitem.forEach(element => {

    var { name, price, categoriy } = element
    var p = document.createElement('p')
    p.innerHTML = `<p>${name}</p><br><p>${price}</p><br><p>${categoriy}</p>`
    div.append(p)
});
console.log(cartitem)
var total = cartitem.reduce((a, c) =>
    a + Number(c.price), 0)
console.log(total)

var p = document.createElement('p')
p.textContent = `your total cart value is ${total}`
div1.append(p)


function showfav() {
    location.assign('fav.html')
}