import React, { useState } from 'react';
import PostIt from './PostIt';

const Board: React.FC = () => {
  const [postItList, setPostItList] = useState([{ id: 1, title: '제목1', content: '내용1', positions: [10, 10] }]);

  const handleDoubleClick = (e: React.MouseEvent<HTMLElement>) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    setPostItList([
      ...postItList,
      {
        id: postItList.length + 1,
        title: '',
        content: '',
        positions: [x, y],
      },
    ]);
  };

  return (
    <section className="board-wrapper">
      <div className="board" onDoubleClick={handleDoubleClick}>
        {postItList.map((postIt) => (
          <PostIt item={postIt} key={postIt.id} />
        ))}
      </div>
    </section>
  );
};

export default Board;
