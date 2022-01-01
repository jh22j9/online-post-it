import React from 'react';
import PostIt from './PostIt';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../state';
import { addPostIt } from '../state/action-creators';

const Board: React.FC = () => {
  const dispatch = useDispatch();
  const boardState = useSelector((state: State) => state.postBoard);

  return (
    <section className="board-wrapper">
      <div className="board">
        <h1>{boardState}</h1>
        <button onClick={() => dispatch(addPostIt(1))}>button</button>
        <PostIt />
      </div>
    </section>
  );
};

export default Board;
