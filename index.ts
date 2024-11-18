import { useCallback, useState } from 'react'

// hooks

export const useRefCallback = <T extends HTMLElement>() => {
  const [element, setElement] = useState<null | T>(null)

  const refCallback = useCallback((node: null | T) => setElement(node), [])

  return { element, refCallback }
}
