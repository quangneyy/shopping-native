import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { FormatPrice } from "../../help";
import { RatingComponent, ProductHorizital, Comment, Quantify } from "../../components";

import styles from "./styles";
import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, fetchSingleProduct } from "../../store/slices/product";
import { AddCart } from "../../store/slices/cart";
import { fetchProductInCategory } from "../../store/slices/categories";
import { Skeleton } from '../../common'
import ShowToast from '../../help/ShowToast'
import { MESSAGE } from "../../contains";

const ProductScreen = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const [number, setNumber] = useState(1)
  const product = useSelector((state) => state.Product.product);
  const productIncategory = useSelector((state) => state.Categories.products);
  const [loading, setLoading] = useState(true);

  const { id } = route.params;

  useEffect(() => {
    setLoading(true)
    dispatch(fetchSingleProduct({ id })).then((res) => {
      if (!res.error) {
        dispatch( fetchProductInCategory({ id: res.payload.category_id, limit: 4 }))
            .then ( res => {
                if ( !res.error) {
                    setLoading(false)
                    setNumber(1)
                }
            })
      } else {
        setLoading(false)
        alert("Sản phẩm lỗi");
      }
    });
  }, [route]);

  const showItems = ({ item }) => {
    return <ProductHorizital data={item} />;
  };

  if( loading ) {
    return <Skeleton layout={'layoutProduct'} />
  }

  const handleChangeNumber = (val) => {
    setNumber(val)
  } 

  const handleAddCart = () => {
    dispatch(AddCart({id,sum : number}))
    setNumber(1)
    ShowToast(MESSAGE.addCartSuccess)
  }


  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.product}>
          <View style={styles.productImg}>
            <Image style={styles.img} source={{ uri: product.image }} />
          </View>
          <View style={styles.productContent}>
            <View>
              <Text numberOfLines={2} style={styles.name}>
                {product.name}
              </Text>
            </View>
            <View>
              <RatingComponent product={true} />
            </View>
            <View>
              <Text style={styles.oldPrice}>{FormatPrice(product.price)}</Text>
            </View>
            <View style={styles.price}>
              <Text style={styles.priceText}>
                {FormatPrice(product.price_sale_off)}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.view}>
          <View style={styles.view_main}>
            <Text style={styles.title}> Thông tin sản phẩm </Text>
            <Text style={styles.title_source}> {product.description} </Text>
          </View>
          <View style={styles.view_main}>
            <Text style={styles.title}> Số lượng </Text>
            <Quantify handleChangeNumber={(val) => handleChangeNumber(val)} quantity={number} />
          </View>
          <View style={styles.view_main}>
            <Text style={styles.title}> Sản phẩm liên quan </Text>
            <View style={styles.boxProduct}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={productIncategory}
                renderItem={showItems}
                keyExtractor={(item) => item.name.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.add}>
        <Text style={styles.addItem}>{number} item</Text>
        <TouchableOpacity style={styles.addBuy} onPress={handleAddCart}>
          <Text style={styles.addBuyText}>Thêm vào giỏ hàng</Text>
          <Text style={styles.addBuyPrice}>{FormatPrice(number * product.price_sale_off)}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ProductScreen;
