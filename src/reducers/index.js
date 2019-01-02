const initialState = {
  current : 0,
  last: 0,
};

export default function reducers (state = initialState, action) {
  if (action.type === 'INCREASE') {
    return {
      current: state.current + 1,
      last: state.current,
    };
  } else if (action.type === 'DECREASE') {
    return {
      current: state.current - 1,
      last: state.current,
    };
  } else {
    return state;
  }
}