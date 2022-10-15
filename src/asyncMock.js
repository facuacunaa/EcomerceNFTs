const products = [
{
    id: '1',
    name: 'Bumper Delantero',
    price:  '$98.000',
    category:'Camionetas',
    img: './CartWidget/Assets/HTB1X5r0px9YBuNjy0Ff760IsVXao.png',
    stock:'10',
    description:'Descripcion del producto'


},
 {id: '2', name:'Bumper Trasero', price:'$95.000', category:'Camionetas', img:'img', stock:'10', description:'descripcion del producto' },
 {id: '3', name:'Barra antivuelco', price:'$60.000', category:'Camionetas', img:'img', stock:'10', description:'descripcion del producto' }
]
 
 export const getProducts = () => {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
          resolve(products)
      }, 2000)
    })
}
export const getProduct = (id) => {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve(products.find(prod => prod.id === id))
    },2000)

})
}
export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve ) => {
        setTimeout (() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}
