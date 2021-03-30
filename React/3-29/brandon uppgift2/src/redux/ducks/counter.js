// action variabel
const DECREMENT = "decrement";
const INCREMENT = "increment";
const INCREASE60 = "increase60";
const INCREASEBYAMOUNT = "increaseByAmount";

// actions
export const increment = () => ({
  type: INCREMENT
});

export const decrement = () => ({
  type: DECREMENT
});

export const increaseBy60 = () => ({
  type: INCREASE60
});

export const increaseByAmount = (amount) => ({
  type: INCREASEBYAMOUNT,
  payload: {
    value: amount,
    test: "test this"
  }
});

const initialState = {
  count: 5,
  isDarkMode: false
};

//reducer

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case INCREASE60:
      return { ...state, count: state.count + 60 };
    case INCREASEBYAMOUNT:
      return { ...state, count: state.count + action.payload.value };
    default:
      return state;
  }
};
