import React, {useContext, useEffect} from 'react'
import { ReviewContext } from '../ReviewContext'
import ReviewItem from './ReviewItem'

const url = 'https://api.themoviedb.org/3/'
// const key = 'fd60e5f8f79b45862f882c9d5fd413ee'
const number ='https://api.themoviedb.org/3/search/movie?api_key=fd60e5f8f79b45862f882c9d5fd413ee&query=lost'

const ReviewList = () => {
    const {review, setReview, searchKey, setSelectMovie} = useContext(ReviewContext)

    useEffect(() => {
        const getReview = async () => {
            const type = searchKey ? 'search' : 'discover'
            const response = await fetch (`${url}${type}/movie?api_key=fd60e5f8f79b45862f882c9d5fd413ee&query=${searchKey}`)
        const review = await response.json()
        setReview (review.results)
        setSelectMovie (review.results[0])
        console.log(review.results)
        }
        getReview()
    }, [setReview, setSelectMovie, searchKey])

    if (!review || review.length === 0) {
        return 'loading...'
    }
  return (
    <div className='film'>
     {review.map((film) => (
        <ReviewItem key={film.id} film={film} />
     ))}
    </div>
  )
}

export default ReviewList