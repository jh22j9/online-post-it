import { PostItInterface } from './../reducers/boardReducer';
import { ActionType } from '../action-types';

interface AddBoardAction {
  type: ActionType.ADD_BOARD;
}
interface AddPostItAction {
  type: ActionType.ADD_POST_IT;
  payload: PostItInterface;
}

export type Action = AddBoardAction | AddPostItAction;
