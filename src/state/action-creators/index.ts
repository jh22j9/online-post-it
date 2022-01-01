import { ActionType } from '../action-types';
import { Action } from '../actions';

export const addPostIt = (newPostIt: number): Action => ({
  type: ActionType.ADD_POST_IT,
  payload: newPostIt,
});
