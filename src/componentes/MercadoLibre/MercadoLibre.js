/*[import { useEffect } from "react"


const MercadoLibre = () => {


    useEffect (() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=celulares')
        .then (Response => {
            return Response.json()

        }).then (res => {
            setProducts(res.results.slice(0,10))
        })
        .catch(error => {
            console.log(error)
        })

    },[])

    console.log (products)

    return(
        <div>
            <h1>MercadoLibre</h1>
            {products.map(products => <div key={products.id}>
                <img src ={products.thumbnail} alt={products.title}/>
                {products.title}
                </div>)}
                
                 
        </div>
    )

}
*/
