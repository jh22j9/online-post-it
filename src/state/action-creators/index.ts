import { ActionType } from '../action-types';
// import { Action } from '../actions';
import { PostItInterface } from '../reducers/boardReducer';

export const addBoard = () => ({
  type: ActionType.ADD_BOARD,
});

export const addPostIt = (newPostIt: PostItInterface) => ({
  type: ActionType.ADD_POST_IT,
  payload: newPostIt,
});
