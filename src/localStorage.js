export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if(serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch(err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    localStorage.setItem('state', JSON.stringify(state))
  } catch(err) {
    console.log(err)
  }
}
