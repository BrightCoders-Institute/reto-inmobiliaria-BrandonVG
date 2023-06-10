import React from "react";
import { Inmueble } from "../types/InmuebleType";
import { FlatList, StyleSheet } from "react-native";
import ItemCard from "./ItemCard";

type itemListProps = {
  data: Inmueble[];
}

const ItemsList = (props: itemListProps) =>{
  return(
    <FlatList
      data = {props.data}
      renderItem={({item}) => <ItemCard inmueble={item} />}
      keyExtractor={item => item.id.toString()}
    />
  );
}

export default ItemsList;