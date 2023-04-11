import { getJobCart } from "./localStorage"
let saveCart = []
const loaderdata = async () => {

    const loadatedData = await fetch ('/feature.json')
    const data = await loadatedData.json()
    const storecart = getJobCart()
    
    for (const key in storecart) {
           const dataFind = data.find(singleD => singleD.id == key)
           if (dataFind) {
               
            saveCart.push(dataFind)
           }
    }

    return saveCart
}



export {loaderdata}