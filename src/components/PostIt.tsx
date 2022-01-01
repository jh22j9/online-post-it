import React, { useState } from 'react';
import { HiMinusCircle } from 'react-icons/hi';
import { RiCloseCircleFill } from 'react-icons/ri';
import { IState as Props } from './Board';
interface IProps {
  item: {
    id: number;
    title: string;
    content: string;
    positions: number[];
  };
  postItList: Props['postItList'];
  setPostItList: React.Dispatch<React.SetStateAction<Props['postItList']>>;
}

const PostIt: React.FC<IProps> = ({ item, postItList, setPostItList }) => {
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

  const handleIconClick = (button: string, id?: number) => {
    switch (button) {
      case 'hide':
        setHidden(!hidden);
        break;
      case 'delete':
        {
          const newPostItList = postItList.filter((postIt) => postIt.id !== id);
          setPostItList(newPostItList);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="postIt-wrapper" style={style}>
      <div className="title-bar">
        <input type="text" onChange={handleChange} name="title" value={input.title} />
        <div className="icons">
          <HiMinusCircle className="icon" onClick={() => handleIconClick('hide')} />
          <RiCloseCircleFill className="icon" onClick={() => handleIconClick('delete', item.id)} />
        </div>
      </div>
      <textarea onChange={handleChange} name="content" value={input.content} style={{ visibility: hidden ? 'hidden' : 'visible' }} />
    </div>
  );
};

export default PostIt;
