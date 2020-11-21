import React, { useEffect, useState } from 'react';
import FishTank from './FishTank.jsx';

const HomePage = ({ user }) => {
  const [fishCount, setFishCount] = useState(5);
  const [tank, setTank] = useState(<FishTank fishCount={fishCount} />);
  const [userDB, setUserDB] = useState(user)

  useEffect(() => {
    fetch('/api').then((data) => data.json())
    .then(user => {
      console.log(user);
      setUserDB(user.user.email.split('@')[0]);
    })
    return () => {
      console.log('unmounted');
    };
  }, []);

  const Header = () => (
    <header className="header1">
      <h1>Welcome to the Aquarium</h1>
      <h2 className="header2">{`Welcome ${userDB || 'Friend!'}!`}</h2>
    </header>
  );


  return (
    <div className="homepage">
      <Header />
      {tank}
    </div>
  );
};

export default HomePage;
