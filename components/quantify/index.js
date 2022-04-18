import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

const Quantify = ({ handleChangeNumber , quantity , small}) => {

    const handleChange = (type) => {
        switch (type) {
            case 'add':
                handleChangeNumber(quantity+1)
                break;
            case 'minus':
                if ( small && quantity-1 === 0){
                  handleChangeNumber(0)
                }else{
                  handleChangeNumber(quantity-1 === 0 ? 1 : quantity-1)
                }
                break;
        
            default:
                break;
        }
    }


  return (
    <>
    {
      !small ? (
        <View style={styles.quantity}>
          <TouchableOpacity style={styles.quantity_button} onPress={() => handleChange('minus')}>
            <Text style={styles.quantity_buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity_buttonText}>{quantity}</Text>
          <TouchableOpacity style={styles.quantity_button} onPress={() => handleChange('add')}>
            <Text style={styles.quantity_buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.quantity_small}>
          <TouchableOpacity style={styles.quantity_button_small} onPress={() => handleChange('minus')}>
            <Text style={styles.quantity_buttonText_small}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity_buttonText_small}>{quantity}</Text>
          <TouchableOpacity style={styles.quantity_button_small} onPress={() => handleChange('add')}>
            <Text style={styles.quantity_buttonText_small}>+</Text>
          </TouchableOpacity>
        </View>
      )
    }
    </>
  );
};

export default Quantify;
