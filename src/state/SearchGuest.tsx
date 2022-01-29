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
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const searchGuest = () => {
    const foundUser = users.find(
      (user) => user.name.toLocaleLowerCase() === name
    );
    setUser(foundUser);
  };
  return (
    <div>
      <h3>Search Guest</h3>

      <input
        value={name}
        onChange={(e) => setName(e.target.value.toLocaleLowerCase())}
      />
      <br />
      <button onClick={searchGuest}>Search</button>
      <div>Name : {user && user.name}</div>
      <div>Age : {user && user.age}</div>
    </div>
  );
};

export default SearchGuest;
