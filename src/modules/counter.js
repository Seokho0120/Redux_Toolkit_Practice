// action type
// 액션타입은 대문자로 정의(INCREASE, DECREASE)
// 문자열 내용은 '모듈 이름 / 액션 이름' (counter/INCREASE, counter/DECREASE)
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// counter모듈의 초기 상태
const initialState = {
  number: 0,
};

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };

    case DECREASE:
      return {
        number: state.number - 1,
      };

    default:
      return state;
  }
}

export default counter;

// export는 여러개 가능 => 받을 때 import {increase, decrease}
// export default는 한개만 가능 => 받을 때 import counterReducer
