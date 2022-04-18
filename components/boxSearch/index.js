import { useNavigation  , useRoute} from '@react-navigation/native';
import React , {useState} from 'react'
import { View, Text } from 'react-native'
import { SearchBar } from 'react-native-elements';


import styles from './styles'

const BoxSearch = () => {
  const route = useRoute();

    const navigation = useNavigation()
    const [search, setSearch] = useState(route.params?.search || '')

    const changePage = () => {
      if ( route.name === 'SearchScreen') {
        navigation.setParams({
          search
        })
      }else {
        if( search ) {
          navigation.navigate('SearchScreen',{
            search
          })
        }
      }
    }

    return (
      <View style={styles.container}>
        <SearchBar
            placeholder="Tìm kiếm..."
            onChangeText={(search) =>  setSearch(search)}
            value={search}
            containerStyle={styles.container}
            inputContainerStyle={styles.input}
            lightTheme
            onSubmitEditing={changePage}
          />
      </View>
       
    )
}

export default BoxSearch
