import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../state';
import { HiPlusSm, HiX } from 'react-icons/hi';
import { addBoard, selectBoard, deleteBoard } from '../state/action-creators';

const Sidebar: React.FC = () => {
  const boardList = useSelector((state: State) => state.postBoard.boardList);
  const dispatch = useDispatch();
  const lastBoard = !!(boardList.length === 1);

  const handleBoardClick = (id: number) => {
    dispatch(selectBoard(id));
  };

  const handleBtnClick = () => {
    dispatch(addBoard());
  };

  const handleDelete = (id: number) => {
    dispatch(deleteBoard(id));
  };

  return (
    <section className="sidebar-wrapper">
      <ul>
        {boardList.map((board) => (
          <li key={board.bId}>
            <p onClick={() => handleBoardClick(board.bId)}>{board.name}</p>
            <span onClick={() => handleDelete(board.bId)} style={{ visibility: lastBoard ? 'hidden' : 'visible' }}>
              <HiX />
            </span>
          </li>
        ))}
      </ul>
      <HiPlusSm className="add-icon" onClick={handleBtnClick} />
    </section>
  );
};

export default Sidebar;
