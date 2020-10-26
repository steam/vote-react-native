enum Route {
  HOME = 'HOME',
  LOCATION = 'LOCATION',
  POLLING_LOCATIONS = 'POLLING_LOCATIONS',
}

type ScreenNavigatorParamList = {
  [Route.HOME]: undefined
  [Route.LOCATION]: { name?: string }
  [Route.POLLING_LOCATIONS]: { address: string }
}
export { Route, ScreenNavigatorParamList }
