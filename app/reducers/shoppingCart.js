let initialState = []

/* return value has to be not changing original, instead, make copy
    can be achieved from using built-in js functions */
export default function shoppingCart(state=initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload.id]
    case 'REMOVE_FROM_CART':
      return state.filter(id => id !== action.payload.id)
    default:
      return state
  }
}
