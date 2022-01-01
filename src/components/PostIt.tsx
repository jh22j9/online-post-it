import React from 'react';

interface IState {
  item: {
    id: number;
    title: string;
    content: string;
  };
}

const PostIt: React.FC<IState> = ({ item }) => {
  return <div className="postIt-wrapper">{item.content}</div>;
};

export default PostIt;
