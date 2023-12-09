import { View, Text, StyleSheet, Image } from "react-native"
import { AnimatedImage } from "../../common/component"


const HeroSection = (props) => {
    const { title, productName, price, index, image } = props
    return <View style={{ backgroundColor: '#9CE5CB', paddingHorizontal: 36, paddingTop: 32 }}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.itemText}>{productName + 'hjdsahjgashdgashjdghja   jhdhjsaghd  khasdjh   askdhasgd  jadhgas jgsdjhgfas ahsgdjhasgd jasgdjhasgd jasgdjhasgd jghashdga'}</Text>
        <Text style={style.priceHeadingText}>Price</Text>
        <Text style={style.priceText}>{price}</Text>
        <AnimatedImage src={image}
            style={{ height: 250, width: 217, position: 'absolute', bottom: 0, right: 0 }}
            sharedTransitionTag={`sharedTag${index}`}
        />
    </View>
}

export default HeroSection

const style = StyleSheet.create({

    titleText: { fontSize: 14, fontWeight: '600' },
    itemText: { fontSize: 38, fontWeight: '700' },
    priceHeadingText: { fontSize: 12, fontWeight: '600', marginTop: 34 },
    priceText: { fontSize: 16, fontWeight: '600' },
    productImage: { height: 150, width: 116, position: 'absolute', alignSelf: 'flex-end' }
})