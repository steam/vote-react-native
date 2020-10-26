import { loadPollingPlaces } from '../api'
import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()
import fetchMock from 'jest-fetch-mock'

beforeEach(() => {
  fetchMock.resetMocks()
})

test('getPollingLocations', async () => {
  const dispatch = jest.fn()
  fetchMock.mockResponseOnce(JSON.stringify({ getPollingLocations: ['1', '2'] }))
  await loadPollingPlaces(dispatch, '123 E. Voter Ave. Denver, CO 80238')
  expect(dispatch).toBeCalledTimes(2)
})
