import type { GetServerSideProps } from 'next';
import Homepage from '../src/components/Homepage';
import { Launches } from '../types/launchesResponse';
import fetchLaunchData from '../helpers/fetchLaunchesData';

type Props = {
  launchesData: Launches[] | null;
  launchesError: string;
};

export default function Home({ launchesData, launchesError }: Props) {
  return <Homepage launchesData={launchesData} launchesError={launchesError} />;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ req, res }) => {
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=172800');

  const fetchData = async () => {
    const data: Launches[] = await fetchLaunchData();
    return data.splice(0, 10);
  };

  let launchesData, launchesError;
  try {
    launchesData = await fetchData();
    launchesError = '';
  } catch (e) {
    launchesData = null;
    console.error(e);
    launchesError = `${e.message}`;
  }
  return {
    props: {
      launchesData,
      launchesError,
    },
  };
};
