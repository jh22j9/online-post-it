import { ActionType } from '../action-types';

interface AddBoardAction {
  type: ActionType.ADD_BOARD;
}
interface AddPostItAction {
  type: ActionType.ADD_POST_IT;
  payload: number[];
}
interface SelectBoardAction {
  type: ActionType.SELECT_BOARD;
  payload: number;
}
interface DeletePostItAction {
  type: ActionType.DELETE_POST_IT;
  payload?: number;
}
interface HidePostItAction {
  type: ActionType.HIDE_POST_IT;
  payload?: number;
}
interface DeleteBoardAction {
  type: ActionType.DELETE_BOARD;
  payload?: number;
}

export type Action = AddBoardAction | AddPostItAction | SelectBoardAction | DeletePostItAction | HidePostItAction | DeleteBoardAction;
