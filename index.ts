import { useCallback, useState } from 'react'

// hooks

export const useRefCallback = <T extends HTMLElement>() => {
  const [element, setElement] = useState<T | null>(null)

  const refCallback = useCallback((node: T | null) => setElement(node), [])

  return [element, refCallback] as const
}
