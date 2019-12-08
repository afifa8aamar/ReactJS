import axios from 'axios'

export const getAlbums = () => {
  return (dispatch) => {
    axios.get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        dispatch({ type: 'OK', list:response.data })
      })
      .catch((error) => {
        dispatch({ type: 'NOT_OK' })
      })
  }
}

export const getPhotos = (album) => {
  return (dispatch) => {
    axios.get("https://jsonplaceholder.typicode.com/photos?albumId=" + album)
      .then((response) => {
        dispatch({ type: 'OK_PHOTOS', list:response.data })
      })
      .catch((error) => {
        dispatch({ type: 'NOT_OK_PHOTOS' })
      })
  }
}