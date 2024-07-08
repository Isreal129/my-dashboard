import React from 'react';
import PostList from './components/PostList';
import Notifications from './components/Notifications';

const App = () => {
  return (
    <div className="container">
      <h1>User Posts Dashboard</h1>
      <Notifications />
      <PostList />
    </div>
  );
}

export default App;
