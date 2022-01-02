import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../state';
import { HiPlusSm } from 'react-icons/hi';

const Sidebar: React.FC = () => {
  const boardList = useSelector((state: State) => state.postBoard.boardList);

  return (
    <section className="sidebar-wrapper">
      <ul>
        {boardList.map((board) => (
          <li key={board.bId}>{board.name}</li>
        ))}
      </ul>
      <HiPlusSm className="add-icon" />
    </section>
  );
};

export default Sidebar;
