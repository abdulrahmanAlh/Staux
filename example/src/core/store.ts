import { CombinGroups, ConfigureStore, TypedUseSelectorHook } from 'staux'
import productGroup from './groups/planet'

// create store
const groups = CombinGroups({
  reducer: {
    planet: productGroup
  }
})

type RootState = typeof groups

export const { useSelector, dispatch } = ConfigureStore(groups)

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useAppDispatch = () => dispatch
