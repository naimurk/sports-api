
const featureLoader = async()=> {
    const loadData = await fetch ('/feature.json')
    const data = await loadData.json()
    return data

}
export {featureLoader}