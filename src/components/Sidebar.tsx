import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../state';
import { HiPlusSm } from 'react-icons/hi';
import { addBoard, selectBoard } from '../state/action-creators';

const Sidebar: React.FC = () => {
  const boardList = useSelector((state: State) => state.postBoard.boardList);
  const dispatch = useDispatch();

  const handleBoardClick = (id: number) => {
    dispatch(selectBoard(id));
  };

  const handleBtnClick = () => {
    dispatch(addBoard());
  };

  return (
    <section className="sidebar-wrapper">
      <ul>
        {boardList.map((board) => (
          <li key={board.bId} onClick={() => handleBoardClick(board.bId)}>
            {board.name}
          </li>
        ))}
      </ul>
      <HiPlusSm className="add-icon" onClick={handleBtnClick} />
    </section>
  );
};

export default Sidebar;
