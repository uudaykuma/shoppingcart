var favItem = JSON.parse(localStorage.getItem('fav'))
console.log(favItem)
var div = document.getElementById('dis')
favItem.forEach(element => {

    var { name, price, categoriy } = element
    var p = document.createElement('p')
    p.innerHTML = `<p>${name}</p><br><p>${price}</p><br><p>${categoriy}</p>`
    div.append(p)
});