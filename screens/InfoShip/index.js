import React, { useState, useEffect } from "react";
import { View, Text , TouchableOpacity} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import styles from "./styles";
import { CheckLogin , Skeleton } from '../../common'
import { MESSAGE } from '../../contains'
import ShowToast from '../../help/ShowToast'
import { InputStyle } from "../../components";
import { fetchAsyncGetMe , fetchAsyncUpdate } from "../../store/slices/user";
import { useDispatch, useSelector } from "react-redux";

const InfoShipScreen = () => {
  const dispatch              = useDispatch();
  const isLogin               = useSelector(state => state.Auth.isLogin);
  const [loading, setLoading] = useState(true);
  const [objInfo, setObjInfo] = useState({
      name : '',
      email : '',
      phone : '',
      address : ''
  })
  const [isUpdate, setisUpdate] = useState(true)

  useEffect(() => {
    setLoading(true)
    dispatch(fetchAsyncGetMe())
    .then((res) => {
      if (!res.error) {
        setLoading(false)
        setObjInfo({
            ...objInfo,
            name : res.payload.name,
            email : res.payload.email,
            phone : res.payload.phone,
            address : res.payload.address
        })
      }else{
        setLoading(false)
      }
    });
  }, [isUpdate]);

  const handleUpdate = () => {
      dispatch(fetchAsyncUpdate(objInfo))
      .then((res) => {
        if (!res.error) {
          ShowToast(MESSAGE.update)
          setisUpdate(!isUpdate)
        }
      });
  }

  if ( loading ) {
    return <Skeleton layout={'layoutForm'} />
  }


  return (
    <>
      { isLogin ? (
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          style={styles.container}
        >
          <View style={styles.formInput}>
            <InputStyle
              name={"Họ tên"}
              value={objInfo.name}
              onChange={(value) => setObjInfo({...objInfo,name : value})}
            />
          </View>
          <View style={styles.formInput}>
            <InputStyle
              name={"Email"}
              value={objInfo.email}
              onChange={(value) => setObjInfo({...objInfo,email : value})}
            />
          </View>
          <View style={styles.formInput}>
            <InputStyle
              name={"Số điện thoại"}
              value={objInfo.phone}
              onChange={(value) => setObjInfo({...objInfo,phone : value})}
            />
          </View>
          <View style={styles.formInput}>
            <InputStyle
              name={"Địa chỉ"}
              value={objInfo.address}
              onChange={(value) => setObjInfo({...objInfo,address : value})}
            />
          </View>
          <TouchableOpacity onPress={handleUpdate} style={styles.button}>
                <Text style={styles.buttonText}>Cập nhật thông tin</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      ) : 
      (
        <CheckLogin />
      )
    }
    </>
  );
};

export default InfoShipScreen;
