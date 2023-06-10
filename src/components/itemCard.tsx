import React from "react";
import { Inmueble } from "../types/inmuebleType";
import { ImageBackground, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

type itemCardProps = {
  inmueble: Inmueble;
}

const ItemCard = ({inmueble}: itemCardProps) => {
  return(
    <View style={styles.container}>
      <View style={styles.rowMargin}>
        <ImageBackground source={{uri: inmueble.img}} style={styles.img} >
          <Text>hola</Text>
        </ImageBackground>
        <View style={styles.col}>
          <Text style={styles.textTitle}>{inmueble.name}</Text>

          <View style={styles.row}>
            <Octicons style={styles.icon} name="location" size={20} color='#000000'/>
            <Text style={styles.textAddress} >{inmueble.address}</Text>
          </View>

          <View style={styles.row}>
            <Ionicons style={styles.icon} name="bed-outline" color='gray' size={20} />
            <Text style={[styles.textBold,styles.textIcon]} >{inmueble.rooms}</Text>
            <MaterialCommunityIcons style={styles.icon} name="bathtub-outline" color='gray' size={20} />
            <Text style={[styles.textBold,styles.textIcon]}  >{inmueble.bathrooms}</Text>
            <MaterialCommunityIcons style={styles.icon} name="floor-plan" color='gray' size={20} />
            <Text style={[styles.textBold,styles.textIcon]} >{inmueble.size} ft²</Text>
          </View>

          <View style={[styles.row, {justifyContent:'space-between'}]}>
            <Text style={[styles.textBold, styles.textPrice]} >${inmueble.price}/m</Text>
            <TouchableOpacity style={styles.likeBtn}>
              <MaterialCommunityIcons name="cards-heart" size={15} color='#FFFFFF' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    borderRadius:16,
    width:'90%',
    height: 140,
    backgroundColor:'#F5FDFF',
  },
  row:{
    flexDirection: 'row',
  },
  rowMargin:{
    flex:1,
    flexDirection:'row',
    margin:15,
  },
  col:{
    flex:2,
    marginLeft:20,
    justifyContent:'space-between',
  },
  img:{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center',
    borderRadius:10,
    overflow:'hidden',
  },
  textTitle:{
    fontSize:20,
    color:'#151525',
    fontWeight:'500',
  },
  textIcon:{
    marginRight:15,
    fontSize:16,
  },
  textBold:{
    color:'#151525',
    fontWeight:'bold',
  },
  textAddress:{
    color: 'gray',
    fontSize: 14,
  },
  textPrice:{
    fontSize:20,
  },
  icon:{
    marginRight:10,
  },
  likeBtn:{
    alignSelf:'flex-end',
    justifyContent:'center',
    alignItems:'center',
    height:25,
    width:25,
    marginRight:15,
    borderRadius:20,
    backgroundColor:'#00b074',
  },
});

export default ItemCard;