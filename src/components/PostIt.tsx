import React from 'react';
import { HiMinusCircle } from 'react-icons/hi';
import { RiCloseCircleFill } from 'react-icons/ri';
interface IState {
  item: {
    id: number;
    title: string;
    content: string;
  };
}

const PostIt: React.FC<IState> = ({ item }) => {
  return (
    <div className="postIt-wrapper">
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
