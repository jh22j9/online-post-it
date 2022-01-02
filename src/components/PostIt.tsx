import React from 'react';
import { HiMinusCircle } from 'react-icons/hi';
import { RiCloseCircleFill } from 'react-icons/ri';
import { PostItInterface } from '../state/reducers/boardReducer';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../state';
import { deletePostIt, hidePostIt } from '../state/action-creators';

interface IProps {
  item: PostItInterface;
}

const PostIt: React.FC<IProps> = ({ item }) => {
  const { currentBoard } = useSelector((state: State) => state.postBoard);
  const { postItList } = currentBoard;
  const hidden = postItList.find((postIt) => postIt.pId === item.pId)?.hidden;

  const [x, y] = item.positions;
  const style = {
    left: `${x}px`,
    top: `${y}px`,
  };

  const dispatch = useDispatch();
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setInput({
  //     ...input,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleIconClick = (button: string, id?: number) => {
  const handleIconClick = (button: string, id: number) => {
    switch (button) {
      case 'hide':
        dispatch(hidePostIt(id));
        break;
      case 'delete':
        dispatch(deletePostIt(id));
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
          <HiMinusCircle className="icon" onClick={() => handleIconClick('hide', item.pId)} />
          <RiCloseCircleFill className="icon" onClick={() => handleIconClick('delete', item.pId)} />
        </div>
      </div>
      {/* <textarea onChange={handleChange} name="content" value={item.content} style={{ visibility: hidden ? 'hidden' : 'visible' }} /> */}
      <textarea name="content" value={item.content} style={{ visibility: hidden ? 'hidden' : 'visible' }} />
    </div>
  );
};

export default PostIt;
