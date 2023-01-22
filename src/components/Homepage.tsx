import { useMemo, useEffect, useState } from 'react';
import Launch from './Launch';
import styles from './homepage.module.css';

const Homepage = () => {
  const [launchData, setLaunchData] = useState([]);

  const fetchData = async () => {
    const res = await fetch('/api/launches');
    const data = await res.json();
    setLaunchData(data.slice(0, 10));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.launchesContainer}>
      {launchData.length &&
        launchData.map((launch) => (
          <Launch
            key={launch.id}
            name={launch.name}
            date={launch.date_utc}
            payloads={launch.payloads}
            image={launch.links.patch.small}
            cores={launch.cores}
            success={launch.success}
          />
        ))}
    </div>
  );
};

export default Homepage;
