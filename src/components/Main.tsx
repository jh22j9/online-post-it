import React from 'react';
import Board from './Board';
import Sidebar from './Sidebar';
const Main: React.FC = () => {
  return (
    <main>
      <Sidebar />
      <Board />
    </main>
  );
};

export default Main;
