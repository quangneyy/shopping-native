import React, { useState, useEffect } from "react";
import { View, Text , TouchableOpacity} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import styles from "./styles";
import { InputStyle } from "../../components";
import { fetchAsyncGetMe } from "../../store/slices/user";
import { useDispatch, useSelector } from "react-redux";

const InfoShipScreen = () => {
  const [nickName, setNickName] = useState("");
  const dispatch = useDispatch();
  const info = useSelector((state) => state.User.info);
  const [loading, setLoading] = useState(true);
  const [objInfo, setObjInfo] = useState({
      name : '',
      email : '',
      phone : '',
      address : ''
  })

  useEffect(() => {
    dispatch(fetchAsyncGetMe()).then((res) => {
      if (!res.error) {
        setLoading(false);
        setObjInfo({
            ...objInfo,
            name : res.payload.name,
            email : res.payload.email,
            phone : res.payload.phone,
            address : res.payload.address
        })
      }
    });
  }, []);


  return (
    <>
      {!loading && (
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          style={styles.container}
        >
          <View style={styles.formInput}>
            <InputStyle
              name={"Họ tên"}
              value={objInfo.name}
              onChange={(value) => setNickName(value)}
            />
          </View>
          <View style={styles.formInput}>
            <InputStyle
              name={"Email"}
              value={objInfo.email}
              onChange={(value) => setNickName(value)}
            />
          </View>
          <View style={styles.formInput}>
            <InputStyle
              name={"Số điện thoại"}
              value={objInfo.phone}
              onChange={(value) => setNickName(value)}
            />
          </View>
          <View style={styles.formInput}>
            <InputStyle
              name={"Địa chỉ"}
              value={objInfo.address}
              onChange={(value) => setNickName(value)}
            />
          </View>
          <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Cập nhật thông tin</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      )}
    </>
  );
};

export default InfoShipScreen;
