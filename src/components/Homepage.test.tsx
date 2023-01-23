import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Homepage from './Homepage';
import response from '../../tests/response';

test('Homepage has the relevant launch card info', async () => {
  render(<Homepage launchesData={response} launchesError="" />);

  expect(await screen.findByText(/FalconSat/)).toBeInTheDocument();
  expect(await screen.findByText(/coreIdTest/)).toBeInTheDocument;
  expect(await screen.findByText(/payloadIdTest/)).toBeInTheDocument();
  expect(await screen.findByText(/Success: false/)).toBeInTheDocument();
  expect(await screen.findByText(/Engine failure at 33 seconds and loss of vehicle/)).toBeInTheDocument();
});

test('Homepage shows header', async () => {
  render(<Homepage launchesData={response} launchesError="" />);

  expect(await screen.findByText(/Launches Data/)).toBeInTheDocument();
});

test('Homepage shows error message', async () => {
  render(<Homepage launchesData="" launchesError="Error 500" />);

  expect(await screen.findByText(/Error 500/)).toBeInTheDocument();
});
