import { useEffect, useRef, useState } from 'react';

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
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const searchGuest = () => {
    const foundUser = users.find(
      (user) => user.name.toLocaleLowerCase() === name
    );
    setUser(foundUser);
  };

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h3>Search Guest</h3>

      <input
        ref={inputRef}
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
