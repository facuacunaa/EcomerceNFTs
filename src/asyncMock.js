const products = [
{
    id: '1',
    name: 'Bumper Delantero',
    price:  '$98.000',
    category:'Camionetas',
    img: 'https://http2.mlstatic.com/D_NQ_NP_672914-MLA31531769603_072019-O.webp',
    stock:'10',
    description:'Bumper Delantero RHINO , paragolpes de acero con chapon protector de aluminio y soporte interno para malacate. Soportes construídos en acero 6mm, portamalacate en acero de 5mm, carcazas exteriores en 2,5 mm y protector de bajos en aluminio de 5mm. Incluye barra portafaros. Blanco Epoxy o Negro Epoxy.Ideal uso Off-Road.Se fija directamente al chasis. No es necesario realizar ninguna modificación. Reemplaza completamente al original y es compatible con el sistema AirBag.'


},
 {id: '2', name:'Bumper Trasero', price:'$95.000', category:'Camionetas', img:'https://http2.mlstatic.com/D_NQ_NP_728580-MLA49419940187_032022-O.webp', stock:'10', description:'descripcion del producto' },
 {id: '3', name:'Barra Antivuelco', price:'$60.000', category:'Camionetas', img:'https://http2.mlstatic.com/D_NQ_NP_756498-MLA50967021103_082022-O.webp', stock:'10', description:'descripcion del producto' }
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
