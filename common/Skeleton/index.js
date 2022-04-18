import React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import { IMAGES } from "../../contains";
import SkeletonContent from "react-native-skeleton-content";

import styles from "./styles";

let layoutSlider = [
    { key: "1", width: 340, height: 120, marginBottom: 20 , marginRight : 10 },
]

let layoutCategoryMany = [
  { key: "2", width: 160, height: 120, marginBottom: 20 , marginRight : 10 },
  { key: "3", width: 160, height: 120, marginBottom: 20 ,marginRight : 10  },
  { key: "4", width: 160, height: 120, marginBottom: 20 ,marginRight : 10 },
  { key: "5", width: 160, height: 120, marginBottom: 20 ,marginRight : 10  },
  { key: "6", width: 160, height: 120, marginBottom: 20 ,marginRight : 10  },
  { key: "7", width: 160, height: 120, marginBottom: 20 ,marginRight : 10 },
  { key: "8", width: 160, height: 120, marginBottom: 20 ,marginRight : 10 },
  { key: "9", width: 160, height: 120, marginBottom: 20 ,marginRight : 10 },
  { key: "19", width: 160, height: 120, marginBottom: 20 ,marginRight : 10 },
  { key: "29", width: 160, height: 120, marginBottom: 20 ,marginRight : 10 },
]


let layoutCategory = [
  { key: "2", width: 140, height: 120, marginBottom: 20 , marginRight : 10 },
  { key: "3", width: 140, height: 120, marginBottom: 20 ,marginRight : 10  },
  { key: "4", width: 140, height: 120, marginBottom: 20 ,marginRight : 10 },
  { key: "5", width: 140, height: 120, marginBottom: 20 ,marginRight : 10  },
  { key: "6", width: 140, height: 120, marginBottom: 20 ,marginRight : 10  },
  { key: "7", width: 140, height: 120, marginBottom: 20 ,marginRight : 10  },
]

let layoutCategoryVe = [
  { key: "2", width: 100, height: 150, marginBottom: 20 , marginRight : 10 },
  { key: "3", width: 100, height: 150, marginBottom: 20 ,marginRight : 10  },
  { key: "4", width: 100, height: 150, marginBottom: 20 ,marginRight : 10 },
]

let layoutCategoryHori = [
  { key: "2", width: 100, height: 80, marginBottom: 20 , marginRight : 5 },
  { key: "3", width: 100, height: 80, marginBottom: 20 , marginRight : 5 },
  { key: "4", width: 100, height: 80, marginBottom: 20 , marginRight : 5 },
  { key: "5", width: 100, height: 80, marginBottom: 20 , marginRight : 5 },
]

let layoutForm = [
    { key: "1", width: 320, height: 40, marginTop: 40 ,marginRight : 10  },
    { key: "2", width: 320, height: 40, marginTop: 40 ,marginRight : 10  },
    { key: "3", width: 320, height: 40, marginTop: 40 ,marginRight : 10  },
    { key: "4", width: 320, height: 40, marginTop: 40 ,marginRight : 10  },
    { key: "5", width: 320, height: 40, marginTop: 40 ,marginRight : 10  },
]

let layoutProduct = [
  { key: "1", width: 320, height: 740, marginTop: 40 ,marginRight : 10  },
]


const Skeleton = ({layout}) => {
  let wrap = true


  switch (layout) {
    case 'layoutProduct':
      layout = layoutProduct
      break;
    case 'layoutSlider':
      layout = layoutSlider
      break;
    case 'layoutForm':
      layout = layoutForm
      break;
    case 'layoutCategoryMany':
      layout = layoutCategoryMany
      break;
    case 'layoutCategoryHori':
      layout = layoutCategoryHori
      wrap = false
      break;
    case 'layoutCategory':
      layout = layoutCategory
      break;
    case 'layoutCategoryVe':
      layout = layoutCategoryVe
      wrap = false
      break;
    default:
      break;
  } 

  return (
    <>
    {
      wrap ? (
        <SkeletonContent
          containerStyle={styles.container}
          isLoading={true}
          animationDirection="horizontalLeft"
          layout={layout}
          >
        </SkeletonContent>
      ) : (
        <SkeletonContent
          containerStyle={styles.containerN}
          isLoading={true}
          animationDirection="horizontalLeft"
          layout={layout}
          >
        </SkeletonContent>
      )
    }
    </>
  );
};

export default Skeleton;
