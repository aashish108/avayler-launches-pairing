import { useMemo, useEffect, useState } from 'react';
import Launch from './Launch';
import styles from './homepage.module.css';

const Homepage = ({ launchesData, launchesError }) => {
  const [launchData, setLaunchData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLaunchData(launchesData);
    setError(launchesError);
  }, []);

  return (
    <>
      <h1>Launches Data</h1>
      {error && <p>{error}</p>}
      <div className={styles.launchesContainer}>
        {launchData?.length &&
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
    </>
  );
};

export default Homepage;
