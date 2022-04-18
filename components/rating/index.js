import React , {useState} from 'react'
import { Rating } from 'react-native-elements';
import { COLORS } from '../../contains';

const RatingComponent = ({product = false}) => {
  const [rating, setRating] = useState(3)

  const ratingCompleted = (rating) => {
    console.log(rating);
  }

  const color = product ? COLORS.pink : 'white'

    return (
      <Rating
        type='custom'
        startingValue={4}
        ratingCount={5}
        imageSize={20}
        onFinishRating={ratingCompleted}
        readonly
        tintColor={color}
      />
       
    )
}

export default RatingComponent
