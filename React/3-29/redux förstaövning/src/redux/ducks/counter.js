// action variabel
const INCREMENT = "increment";
const DECREMENT = "decrement";
const INCREASE60 = "increase60";
const INCREASEBYAMOUNT = "increaseByAmount";

//action
export const increment = () => ({
  type: INCREMENT
});
export const decrement = () => ({
  type: DECREMENT
});
export const increase60 = () => ({
  type: INCREASE60
});
export const increaseByAmount = (amount) => ({
  type: INCREASEBYAMOUNT,
  payload: {
    value: amount
  }
})

//initial value
const initialState = {
  count: 0,
  isDarkMode: true
};

//reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREASEBYAMOUNT:
      return { ...state, count: state.count + action.payload.value};
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case INCREASE60:
      return { ...state, count: state.count + 60 };
    default:
      return state;
  }
};
