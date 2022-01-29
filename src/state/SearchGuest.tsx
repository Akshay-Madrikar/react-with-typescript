import { useState } from 'react';

const users = [
  {
    name: 'Akshay',
    age: 25,
  },
  {
    name: 'Pratik',
    age: 27,
  },
];

const SearchGuest: React.FC = () => {
  const [name, setName] = useState('');

  const searchGuest = () => {
    setName('');
  };
  return (
    <div>
      <h3>Search Guest</h3>

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <button onClick={searchGuest}>Search</button>
    </div>
  );
};

export default SearchGuest;
