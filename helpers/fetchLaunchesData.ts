import { Launches } from '../types/launchesResponse';

const fetchLaunchData = async () => {
  const response = await fetch('https://api.spacexdata.com/v4/launches');
  if (!response.ok) {
    throw new Error(`{Got error code ${response.status}}`);
  }
  const data: Launches[] = await response.json();
  return data;
};

export default fetchLaunchData;
