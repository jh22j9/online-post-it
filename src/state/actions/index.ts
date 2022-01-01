import { ActionType } from '../action-types';

interface AddPostItAction {
  type: ActionType.ADD_POST_IT;
  payload: number;
}

export type Action = AddPostItAction;
// export type Action = AddPostItAction | DeletePostItAction;
