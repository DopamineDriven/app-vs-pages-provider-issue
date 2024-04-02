import dynamic from 'next/dynamic';

export const Icon = dynamic(() => import('./Icon'));

export const SimpleRSC = dynamic(() => import('./SimpleRSC'), {ssr: true});

export const SimpleClientComponent = dynamic(() => import('./SimpleClientComponent'));

export const SocialIcon = dynamic(() => import('./SocialIcon'));

