import { FETCH_ALL } from '../constants/actionTypes';

export const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload
    default:
      return posts
  }
};