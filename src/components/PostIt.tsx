import React from 'react';
import { HiMinusCircle } from 'react-icons/hi';
import { RiCloseCircleFill } from 'react-icons/ri';
interface IState {
  item: {
    id: number;
    title: string;
    content: string;
    positions: number[];
  };
}

const PostIt: React.FC<IState> = ({ item }) => {
  const [x, y] = item.positions;

  const style = {
    left: `${x}px`,
    top: `${y}px`,
  };

  return (
    <div className="postIt-wrapper" style={style}>
      <div className="postIt-title-bar">
        {item.title}
        <div className="icons">
          <HiMinusCircle />
          <RiCloseCircleFill />
        </div>
      </div>
      <div className="postIt-content">{item.content}</div>
    </div>
  );
};

export default PostIt;
