export const fetchPlantData = async () => {
    const res = await fetch("https://create.blinkapi.io/api/eSphKNzwb9EJBt6GBjKx7Q", { method: 'GET' })
    const formatedResponse = await res.json()
    return formatedResponse
}