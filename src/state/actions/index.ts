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

export type Action = AddBoardAction | AddPostItAction | SelectBoardAction;
