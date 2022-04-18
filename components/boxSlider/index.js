import React, { useState, useEffect } from "react";
import { View, Image } from "react-native";

import styles from "./styles";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { fetchSlider } from "../../store/slices/slider";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "../../common";

const BoxSlider = () => {
  const dispatch                        = useDispatch();
  const dataSlider                      = useSelector((state) => state.Slider.items);
  const [entries, setEntries]           = useState(0);
  const [activeSlide, setActiveSlide]   = useState(0);
  const [loading, setLoading]           = useState(true);

  useEffect(() => {
    dispatch(fetchSlider()).then((res) => {
      if (!res.error) {
        setLoading(false);
        setEntries(res.payload.length)
      }
    });
    
  }, []);

  const renderItems = (item) => {
    return (
      <View style={styles.slider}>
        <Image style={styles.img} source={{ uri: item.item.image }} />
      </View>
    );
  };

  if (loading) {
    return <Skeleton layout={"layoutSlider"} />;
  }

  const pagination = () => {
    return (
      <Pagination
        dotsLength={entries}
        activeDotIndex={activeSlide}
        containerStyle={styles.pagiContainer}
        dotStyle={styles.dotStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={dataSlider}
        renderItem={renderItems}
        sliderWidth={350}
        itemWidth={350}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <View style={styles.pagination}>{pagination()}</View>
    </View>
  );
};

export default BoxSlider;
