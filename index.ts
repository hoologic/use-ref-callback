import { useCallback, useState } from 'react'

// hooks

export const useRefCallback = <T extends HTMLElement>(): [T | null, (node: T | null) => void] => {
  const [element, setElement] = useState<T | null>(null)

  const refCallback = useCallback((node: T | null) => setElement(node), [])

  return [element, refCallback]
}
