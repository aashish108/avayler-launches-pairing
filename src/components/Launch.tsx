import styles from './launch.module.css';
import { Core } from '../../types/launchesResponse';

type launchTypes = {
  name: string;
  date: string;
  payloads: string[];
  image: string;
  success: boolean;
  cores: Core[];
};

const Launch = ({ name, date, payloads, image, success, cores }: launchTypes) => {
  return (
    <div className={styles.launch}>
      <img className={styles.image} src={image} alt={name} />
      <span>Name: {name}</span>
      <span>Date: {date}</span>
      <span>
        Cores:
        {cores.map((core) => (
          <span key={core.core}>{core.core}</span>
        ))}
      </span>
      <span>Payloads:</span>
      <ul>
        {payloads?.map((payload) => (
          <li key={payload}>{payload}</li>
        ))}
      </ul>
      <span className={styles.success}>Success: {success ? 'true' : 'false'}</span>
    </div>
  );
};

export default Launch;
