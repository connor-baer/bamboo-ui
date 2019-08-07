import { createContext } from 'react';

import Link from '../components/Link';
import Head from '../components/Head';

const ComponentsContext = createContext({ Link, Head });

export default ComponentsContext;
