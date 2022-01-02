import React, { useState } from 'react';
import { HiMinusCircle } from 'react-icons/hi';
// import { RiCloseCircleFill } from 'react-icons/ri';
import { PostItInterface } from '../state/reducers/boardReducer';

interface IProps {
  item: PostItInterface;
}

const PostIt: React.FC<IProps> = ({ item }) => {
  const [hidden, setHidden] = useState(false);
  const [x, y] = item.positions;

  const style = {
    left: `${x}px`,
    top: `${y}px`,
  };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setInput({
  //     ...input,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleIconClick = (button: string, id?: number) => {
  const handleIconClick = (button: string) => {
    switch (button) {
      case 'hide':
        setHidden(!hidden);
        break;
      case 'delete':
        // {
        //   const newPostItList = postItList.filter((postIt) => postIt.id !== id);
        //   setPostItList(newPostItList);
        // }
        break;
      default:
        break;
    }
  };

  return (
    <div className="postIt-wrapper" style={style}>
      <div className="title-bar">
        {/* <input type="text" onChange={handleChange} name="title" value={input.title} /> */}
        <input type="text" name="title" value={item.title} />
        <div className="icons">
          <HiMinusCircle className="icon" onClick={() => handleIconClick('hide')} />
          {/* <RiCloseCircleFill className="icon" onClick={() => handleIconClick('delete', item.id)} /> */}
        </div>
      </div>
      {/* <textarea onChange={handleChange} name="content" value={item.content} style={{ visibility: hidden ? 'hidden' : 'visible' }} /> */}
      <textarea name="content" value={item.content} style={{ visibility: hidden ? 'hidden' : 'visible' }} />
    </div>
  );
};

export default PostIt;
