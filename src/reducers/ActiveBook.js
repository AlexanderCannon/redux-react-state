export default function (state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      //best practise to retun a new object instead of mutating the one
      return action.payload;
    default:
      return state
  }
}