import { Fragment } from 'react';

import Counter from './components/Counter';
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <Fragment>
      <Header />
      <UserProfile />
      <Counter />
    </Fragment>
  );
}

export default App;
