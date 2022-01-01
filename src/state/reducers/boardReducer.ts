import { Action } from '../actions';
import { ActionType } from '../action-types';

const initialState = 0;
// boards: [{id: 1, postIts: [{id: 1, title: "제목", content: "내용"}]}];

const reducer = (state: number = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_POST_IT:
      return state + action.payload;
    default:
      return initialState;
  }
};

export default reducer;
