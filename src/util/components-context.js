import { createContext } from 'react';

import Head from '../components/Head';
import Link from '../components/typography/Link';
import Image from '../components/images/Image';
import Align from '../components/layout/Align';

const ComponentsContext = createContext({ Head, Link, Image, Align });

export default ComponentsContext;
