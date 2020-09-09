export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const initialState = {
  loading: false,
  basket: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_BASKET:
      return { ...state, basket: [...state.basket, payload] };
    default:
      return state;
  }
};
