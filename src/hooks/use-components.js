import { useContext } from 'react';
import ComponentsContext from '../util/components-context';

export default function useComponents() {
  return useContext(ComponentsContext);
}
