import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';
import Homepage from './Homepage';
import response from '../../tests/response';

fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
});

test('Homepage has the relevant info', async () => {
  fetchMock.mockResponseOnce(JSON.stringify(response));
  render(<Homepage />);

  expect(await screen.findByText(/FalconSat/)).toBeInTheDocument();
  expect(await screen.findByText(/coreIdTest/)).toBeInTheDocument;
  expect(await screen.findByText(/payloadIdTest/)).toBeInTheDocument();
  expect(await screen.findByText(/Success: false/)).toBeInTheDocument();
});
