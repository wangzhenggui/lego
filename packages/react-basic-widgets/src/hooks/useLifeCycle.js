import { useEffect } from 'react'

const useLifeCycle = (props) => {
  useEffect(() => {
    if (typeof props?.lifeCycle?.didMount === 'function') {
      props?.lifeCycle?.didMount()
    }
    return () => {
      if (typeof props?.lifeCycle?.unMount === 'function') {
        props?.lifeCycle?.unMount()
      }
    }
  }, [])
}

export default useLifeCycle
