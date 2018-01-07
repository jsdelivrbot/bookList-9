export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return a an action
  // an object type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}