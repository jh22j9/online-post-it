import React, { useState } from 'react';
import PostIt from './PostIt';
import { useSelector } from 'react-redux';
import { State } from '../state';

export interface IState {
  postItList: {
    id: number;
    title: string;
    content: string;
    positions: number[];
  }[];
}

const Board: React.FC = () => {
  const { currentBoard } = useSelector((state: State) => state.postBoard);
  console.log('currentBoard', currentBoard);

  const [postItList, setPostItList] = useState([{ id: 1, title: '', content: '', positions: [30, 30] }]);

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
      <div className="board-title">{}</div>
      <div className="board-content" onDoubleClick={handleDoubleClick}>
        {postItList.map((postIt) => (
          <PostIt item={postIt} key={postIt.id} postItList={postItList} setPostItList={setPostItList} />
        ))}
      </div>
    </section>
  );
};

export default Board;
