import React from 'react';
import PostIt from './PostIt';
import { useSelector } from 'react-redux';
import { State } from '../state';

const Board: React.FC = () => {
  const { currentBoard } = useSelector((state: State) => state.postBoard);
  const { postItList } = currentBoard;

  const handleDoubleClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e.nativeEvent.offsetX);
    // const x = e.nativeEvent.offsetX;
    // const y = e.nativeEvent.offsetY;
    // dispatch(addPostIt(x, y));
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
