import { ActionType } from '../action-types';
import { Action } from '../actions';

export const addBoard = (): Action => ({
  type: ActionType.ADD_BOARD,
});

export const addPostIt = (positions: number[]): Action => ({
  type: ActionType.ADD_POST_IT,
  payload: positions,
});

export const selectBoard = (id: number): Action => ({
  type: ActionType.SELECT_BOARD,
  payload: id,
});
export const deletePostIt = (id?: number): Action => ({
  type: ActionType.DELETE_POST_IT,
  payload: id,
});
export const hidePostIt = (id: number): Action => ({
  type: ActionType.HIDE_POST_IT,
  payload: id,
});
export const deleteBoard = (id: number): Action => ({
  type: ActionType.DELETE_BOARD,
  payload: id,
});
