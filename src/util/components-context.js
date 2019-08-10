import { createContext } from 'react';

import Link from '../components/Link';
import Image from '../components/images/Image';
import Head from '../components/Head';

const ComponentsContext = createContext({ Link, Image, Head });

export default ComponentsContext;
