import { ApiClient } from 'api-client'
import { useState } from 'react'

export function useClient () {
  const [client] = useState(
    new ApiClient()
  )

  return client
}
