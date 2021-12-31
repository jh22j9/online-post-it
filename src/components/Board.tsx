import React from 'react';
import PostIt from './PostIt';

const Board: React.FC = () => {
  return (
    <section className="board-wrapper">
      <div className="board">
        <PostIt />
      </div>
    </section>
  );
};

export default Board;
