import React from 'react';
import PostIt from './PostIt';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../state';
import { addPostIt, updateBoardName } from '../state/action-creators';

const Board: React.FC = () => {
  const { currentBoard } = useSelector((state: State) => state.postBoard);
  const { postItList } = currentBoard;

  const dispatch = useDispatch();

  const handleDoubleClick = (e: React.MouseEvent<HTMLElement>) => {
    const event = e.nativeEvent;
    const [x, y] = [event.offsetX, event.offsetY];
    dispatch(addPostIt([x, y]));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const payload = {
      id: currentBoard.bId,
      value: e.target.value,
    };
    dispatch(updateBoardName(payload));
  };

  const handleMouseLeave = () => {
    if (!currentBoard.name.length) {
      const payload = {
        id: currentBoard.bId,
        value: 'New Board!',
      };
      dispatch(updateBoardName(payload));
    }
  };

  return (
    <section className="board-wrapper">
      <div className="board-title-bar">
        <h2>
          <span>✔️</span>
          <input value={currentBoard.name} onChange={handleInputChange} onMouseLeave={handleMouseLeave} />
        </h2>
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
