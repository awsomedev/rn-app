import { View,ScrollView,StyleSheet } from "react-native"
import HeroSection from "../component/HeroSection";


const DetailScreen = (props)=>{

    const {route} = props
    const {params} = route
    const {title,productName,image,price,index} = params

    return <ScrollView  contentOffset={{ x: 0, y: 400 }}
    >
        <HeroSection title={title} productName={productName} image={image} price={price} index={index}/>
        {/* Mock view to render space for scroll view */}
        <View  style={{height:600}} />
    </ScrollView>
}

export default DetailScreen

