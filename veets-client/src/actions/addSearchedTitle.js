export const addSearchedTitle = (searchedTitle) => {
  return {
    type: 'ADD_SEARCHED_TITLE',
    searchedTitle
  }
}

export const clearSearchedTitles = () => {
  return {
    type: 'CLEAR_SEARCHED_TITLES'
  }
}
