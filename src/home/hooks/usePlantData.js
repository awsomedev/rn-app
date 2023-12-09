import { useEffect, useState } from "react"
import { fetchPlantData } from "../../common/networkutils"

const usePlantData = ()=>{
    const [data, setData] = useState()


    useEffect(() => {
        fetchPlantData().then((val)=>{
            setData(val)
        })
    }, [])

    return { plantData : data}
}

export default usePlantData