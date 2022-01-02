import React from 'react';
import PostIt from './PostIt';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../state';
import { addPostIt } from '../state/action-creators';

const Board: React.FC = () => {
  const { currentBoard } = useSelector((state: State) => state.postBoard);
  const { postItList } = currentBoard;

  const dispatch = useDispatch();

  const handleDoubleClick = (e: React.MouseEvent<HTMLElement>) => {
    const event = e.nativeEvent;
    const [x, y] = [event.offsetX, event.offsetY];
    dispatch(addPostIt([x, y]));
  };

  return (
    <section className="board-wrapper">
      <div className="board-title-bar">
        <h2>✔️ {currentBoard.name}</h2>
      </div>
      <div className="board-content" onDoubleClick={handleDoubleClick}>
        {postItList.map((postIt) => (
          <PostIt item={postIt} key={postIt.pId} />
        ))}
      </div>
    </section>
  );
};

export default Board;
