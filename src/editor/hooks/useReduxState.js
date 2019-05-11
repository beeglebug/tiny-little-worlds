import { useDispatch, useSelector } from 'react-redux'

export default function useReduxState (selector, action) {
  const dispatch = useDispatch()
  const value = useSelector(selector)
  const setValue = (...args) => dispatch(action(...args))
  return [ value, setValue ]
}
