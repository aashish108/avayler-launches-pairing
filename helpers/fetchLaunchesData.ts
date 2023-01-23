import { Launches } from '../types/launchesResponse';

const LAUNCHES_API = 'https://api.spacexdata.com/v4/launches';
const fetchLaunchData = async () => {
  const response = await fetch(LAUNCHES_API);
  if (!response.ok) {
    throw new Error(`{Got error code ${response.status}}`);
  }
  const data: Launches[] = await response.json();
  return data;
};

export default fetchLaunchData;
