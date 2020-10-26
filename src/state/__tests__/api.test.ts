import { getPollingLocations } from '../'

test('getPollingLocations', async () => {
  const locations = await getPollingLocations('10174 E. 59th Ave. Denver, CO 80238')
  expect(locations).toEqual({})
})
