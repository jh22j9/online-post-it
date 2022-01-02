import { Action } from '../actions';
import { ActionType } from '../action-types';

export interface PostItInterface {
  pId: number;
  title: string;
  content: string;
  positions: number[];
}

export interface BoardInterface {
  bId: number;
  name: string;
  postItList: PostItInterface[];
}

export interface StateInterface {
  currentBoard: BoardInterface;
  boardList: BoardInterface[];
  // boardList: BoardInterface[] | []
}

const boardList = [
  { bId: 1, name: 'Board1', postItList: [] },
  { bId: 2, name: 'Board2', postItList: [] },
];

const initialState: StateInterface = {
  currentBoard: boardList[0],
  boardList: [...boardList],
};

const reducer = (state: StateInterface = initialState, action: Action): StateInterface => {
  switch (action.type) {
    case ActionType.ADD_BOARD: {
      const newBoard = { bId: state.boardList.length + 1, name: 'New Board!', postItList: [] };
      state = { ...state, boardList: [...state.boardList, newBoard] };
      state.currentBoard = newBoard;
      return state;
    }
    case ActionType.ADD_POST_IT:
      return state;
    default:
      return state;
  }
};

export default reducer;
