import React from 'react'
import useStyles from './styles'
import { useSelector } from 'react-redux';

const Posts = () => {
  const classes = useStyles()
  const posts = useSelector((state) => state.posts)
  
  return (
    <div>
      { posts }
    </div>
  )
}

export default Posts
