var formdata = document.getElementById('form')

formdata.addEventListener('submit', addproduct)

var products = JSON.parse(localStorage.getItem('products')) || []


function addproduct(e) {
    e.preventDefault()


    var product = {
        name: formdata.name.value,
        price: formdata.price.value,
        categoriy: formdata.selectProduct.value,
        description: formdata.description.value
    }
    console.log(product)
    products.push(product)
    console.log(products)


    localStorage.setItem('products', JSON.stringify(products))
}

function gotoshop() {
    location.assign('shop.html')
}