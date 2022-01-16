import jsonPlaceHolder from '../api/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
  const posts = await jsonPlaceHolder.get('/posts');
  dispatch({
    type: "FETCH_POSTS", payload: posts.data
  });
}