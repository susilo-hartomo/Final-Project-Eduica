export function signIn(username, password) {

}

export function setPicture(url) {
  return(dispatch) => {
    dispatch({
      type: 'SET_PICTURE',
      payload: url
    })
  }
}
