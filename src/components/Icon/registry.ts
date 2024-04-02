import dynamic from 'next/dynamic';

export const registry = {
  Close: {
    title: 'Close',
    component: dynamic(() => import(`./components/Close`)),
  },
  Download: {
    title: 'Download',
    component: dynamic(() => import(`./components/Download`)),
  },
  Facebook: {
    title: 'Facebook',
    component: dynamic(() => import(`./components/Facebook`)),
  },
  Plus: {
    title: 'Plus',
    component: dynamic(() => import(`./components/Plus`)),
  },
};
