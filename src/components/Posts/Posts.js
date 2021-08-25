import React from 'react'
import useStyles from './styles'
import { useSelector } from 'react-redux';

const Posts = () => {
  const classes = useStyles()
  const posts = useSelector((state) => state.posts)
  console.log(posts)
  return (
    <div>
    </div>
  )
}

export default Posts
