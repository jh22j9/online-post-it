import React, { useState } from 'react';
import { HiMinusCircle } from 'react-icons/hi';
import { RiCloseCircleFill } from 'react-icons/ri';
interface IProps {
  item: {
    id: number;
    title: string;
    content: string;
    positions: number[];
  };
}

const PostIt: React.FC<IProps> = ({ item }) => {
  const [input, setInput] = useState({
    title: '제목을 입력하세요.',
    content: '내용을 입력하세요.',
  });
  const [hidden, setHidden] = useState(false);
  const [x, y] = item.positions;

  const style = {
    left: `${x}px`,
    top: `${y}px`,
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleHideButton = () => {
    setHidden(!hidden);
  };

  return (
    <div className="postIt-wrapper" style={style}>
      <div className="title-bar">
        <input type="text" onChange={handleChange} name="title" value={input.title} />
        <div className="icons">
          <HiMinusCircle className="icon" onClick={handleHideButton} />
          <RiCloseCircleFill className="icon" />
        </div>
      </div>
      <textarea onChange={handleChange} name="content" value={input.content} style={{ visibility: hidden ? 'hidden' : 'visible' }} />
    </div>
  );
};

export default PostIt;
