import produce from 'immer';
import { Action } from '../actions';
import { ActionType } from '../action-types';

export interface PostItInterface {
  pId: number;
  [title: string]: any;
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
  isModalOpen: boolean;
}

const boardList = [{ bId: 1, name: 'Board', postItList: [] }];

const postIt = {
  pId: 0,
  title: '',
  content: '',
  positions: [],
  hidden: false,
};

const initialState: StateInterface = {
  currentBoard: boardList[0],
  boardList: [...boardList],
  isModalOpen: false,
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
      case ActionType.DELETE_BOARD:
        {
          if (state.boardList.length === 1) return;
          const deletedId = action.payload;
          const newBoardList = state.boardList.filter((board) => board.bId !== deletedId);
          draft.boardList = newBoardList;
          if (state.currentBoard.bId === deletedId) {
            draft.currentBoard = newBoardList[0];
          }
        }
        break;
      case ActionType.SET_MODAL:
        draft.isModalOpen = action.payload;
        break;
      case ActionType.UPDATE_BOARD_NAME:
        {
          const { id, value } = action.payload;
          draft.boardList.forEach((board) => {
            if (board.bId === id) {
              board.name = value;
              draft.currentBoard = board;
            }
          });
        }
        break;
      case ActionType.UPDATE_POST_IT:
        {
          const currentId = state.currentBoard.bId;
          const { id, field, value } = action.payload;
          draft.boardList.forEach((board) => {
            if (board.bId === currentId) {
              board.postItList.forEach((item) => {
                if (item.pId === id) {
                  item[field] = value;
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
