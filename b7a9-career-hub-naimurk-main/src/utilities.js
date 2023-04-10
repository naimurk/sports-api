import { getJobCart } from "./localStorage"

const loaderdata = async () => {
    const loadatedData = await fetch ('/public/feature.json')
    const data = await loadatedData.json()
    const storecart = getJobCart()
    const saveCart = []
    for (const key in storecart) {
           const dataFind = data.find(singleD => singleD.id == key)
           if (dataFind) {
               
            saveCart.push(dataFind)
           }
    }

    return saveCart
}
export {loaderdata}