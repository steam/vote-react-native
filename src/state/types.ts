interface PollingLocation {
  address?: Address
  latitude?: number
  longitude?: number
  pollingHours?: string
  sources?: Source[]
}

interface Address {
  locationName?: string
  line1?: string
  city?: string
  state?: string
  zip?: string
}

interface Source {
  name?: string
  official?: boolean
}

interface State {
  error: Error | undefined
  pollingLocations: PollingLocation[]
  status: 'loading' | 'finished' | 'error'
}

export { State, PollingLocation }
