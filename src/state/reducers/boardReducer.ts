import produce from 'immer';
import { Action } from '../actions';
import { ActionType } from '../action-types';

export interface PostItInterface {
  pId: number;
  title: string;
  content: string;
  positions: number[];
  hidden: boolean;
}

export interface BoardInterface {
  bId: number;
  name: string;
  postItList: PostItInterface[];
}

export interface StateInterface {
  currentBoard: BoardInterface;
  boardList: BoardInterface[];
}

const boardList = [
  { bId: 1, name: 'Board1', postItList: [] },
  { bId: 2, name: 'Board2', postItList: [] },
];

const postIt = {
  pId: 0,
  title: '제목을 입력하세요.',
  content: '내용을 입력하세요',
  positions: [],
  hidden: false,
};

const initialState: StateInterface = {
  currentBoard: boardList[0],
  boardList: [...boardList],
};

const reducer = (state: StateInterface = initialState, action: Action): StateInterface => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionType.ADD_BOARD: {
        const newBoard = { bId: state.boardList.length + 1, name: 'New Board!', postItList: [] };
        draft.currentBoard = newBoard;
        draft.boardList = [...draft.boardList, newBoard];
        break;
      }
      case ActionType.ADD_POST_IT:
        {
          const currentId = state.currentBoard.bId;
          const positions = action.payload;
          draft.boardList.forEach((board) => {
            if (board.bId === currentId) {
              const newPostIt = { ...postIt, pId: board.postItList.length + 1, positions };
              board.postItList = [...board.postItList, newPostIt];
              draft.currentBoard = board;
            }
          });
        }
        break;
      case ActionType.SELECT_BOARD:
        {
          const selected = state.boardList.find((board) => board.bId === action.payload) || state.currentBoard;
          draft.currentBoard = selected;
        }
        break;
      case ActionType.DELETE_POST_IT:
        {
          const currentId = state.currentBoard.bId;
          draft.boardList.forEach((board) => {
            if (board.bId === currentId) {
              board.postItList = board.postItList.filter((item) => item.pId !== action.payload);
              draft.currentBoard = board;
            }
          });
        }
        break;
      case ActionType.HIDE_POST_IT:
        {
          const currentId = state.currentBoard.bId;
          draft.boardList.forEach((board) => {
            if (board.bId === currentId) {
              board.postItList.forEach((item) => {
                if (item.pId === action.payload) {
                  item.hidden = !item.hidden;
                }
              });
              draft.currentBoard = board;
            }
          });
        }
        break;
      default:
        return state;
    }
  });
};

export default reducer;
