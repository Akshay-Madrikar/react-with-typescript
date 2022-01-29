import ReactDOM from 'react-dom';
import GuestList from './state/GuestList';
import SearchGuest from './state/SearchGuest';

const App = () => {
  return (
    <div>
      <h1>Hi there!!</h1>
      <GuestList />
      <SearchGuest />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
