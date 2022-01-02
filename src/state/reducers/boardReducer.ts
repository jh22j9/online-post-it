import { Action } from '../actions';
import { ActionType } from '../action-types';

export interface PostItInterface {
  postItid: number;
  title: string;
  content: string;
  positions: number[];
}

export interface BoardInterface {
  boardId: number;
  boardName: string;
  postItList: PostItInterface[];
}

export interface StateInterface {
  currentBoardId: number;
  boardList: BoardInterface[];
  // boardList: BoardInterface[] | []
}

const initialState: StateInterface = {
  currentBoardId: 1,
  boardList: [],
};

const reducer = (state: StateInterface = initialState, action: Action): StateInterface => {
  switch (action.type) {
    case ActionType.ADD_BOARD: {
      const newBoard = { boardId: state.boardList.length + 1, boardName: '', postItList: [] };
      return { ...state, boardList: [...state.boardList, newBoard] };
    }
    case ActionType.ADD_POST_IT:
      return state;
    default:
      return state;
  }
};

export default reducer;
