import { StyleSheet, View, Text, FlatList, ActivityIndicator } from "react-native"
import HomeCardTile from "../component/HomeCardTile"
import { useEffect, useState } from "react"
import usePlantData from "../hooks/usePlantData"

const HomeScreen = () => {
    const {plantData} = usePlantData()
    
    const renderItem = ({ item, index }) => {
        const { name, category, price, image } = item
        return <HomeCardTile title={category}
            productName={name} price={`$${price}`}
            image={image}
            cardColor="#9CE5CB"
            index={index}
        />
    }

    if(!plantData) return <ActivityIndicator style={{flex:1}}/>

    return <FlatList data={plantData} renderItem={renderItem} />
}

export default HomeScreen