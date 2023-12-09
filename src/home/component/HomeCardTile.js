
import { useNavigation } from "@react-navigation/native"
import { StyleSheet, View,Text, TouchableOpacity,Image } from "react-native"
import { AnimatedImage } from "../../common/component"
import { LayoutConstant } from "../../constants/layoutconstants"


  
const HomeCardTile = (props) => {
    const {title,productName,price,cardColor,image,index} = props
    const navigation = useNavigation()

    const navigateToDetail = ()=>{
        navigation.navigate("Detail",{title,productName,image,price,index})
    }
    return (
        <TouchableOpacity onPress={navigateToDetail}>
            <View style={[style.peperCard,{backgroundColor:cardColor}]} >
                <Text style={style.titleText}>{title}</Text>
                <Text style={style.itemText}>{productName}</Text>
                <Text style={style.priceText}>{price}</Text>
            </View>

            <AnimatedImage         
                    src={image}
                    style={style.productImage}         
                    sharedTransitionTag={`sharedTag${index}`}
                    cachePolicy={'memory-disk'}
                    />
        </TouchableOpacity>
    )
}

export default HomeCardTile

const style = StyleSheet.create({
    peperCard:{
        height:LayoutConstant.layout_170,
        marginLeft:LayoutConstant.layout_20,
        marginRight:LayoutConstant.layout_50,
        borderRadius:LayoutConstant.layout_20,
        padding:LayoutConstant.layout_24,
        marginTop:LayoutConstant.layout_30
    },
    titleText:{fontSize:LayoutConstant.layout_14,fontWeight:'600'},
    itemText:{fontSize:LayoutConstant.layout_30,fontWeight:'700'},
    priceText:{fontSize:LayoutConstant.layout_20,fontWeight:'600',marginTop:46},
    productImage:{height:LayoutConstant.layout_150,width:LayoutConstant.layout_115, position:'absolute', alignSelf:'flex-end'}
})