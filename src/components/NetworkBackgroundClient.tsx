// Chargeur client-only du fond animé : three.js/@react-three/fiber ne doivent
// jamais être exécutés côté serveur (prerender Next.js) — d'où le dynamic ssr:false
'use client';

import dynamic from 'next/dynamic';

const NetworkBackground = dynamic(() => import('@/components/NetworkBackground'), {
  ssr: false,
});

export default function NetworkBackgroundClient() {
  return <NetworkBackground />;
}
