async function getProducts() {
    const url = 'https://fakestoreapi.com/products'

    const response = await fetch(url)
    const data = await response.json()

    return data
}

export {
    getProducts
}