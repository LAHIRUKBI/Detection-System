'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function OnboardScreen() {
  const router = useRouter();

  useEffect(() => {
    // තත්පර 2කට පසු /home පිටුවට යොමු කිරීම
    const timer = setTimeout(() => {
      router.push('/home');
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-green-700 text-white">
      <div className="animate-pulse text-center">
        <h1 className="mb-4 text-5xl font-extrabold tracking-wider">ELEPHANT</h1>
        <p className="text-xl font-light">Warning & Detection System</p>
      </div>
      <div className="mt-10 h-1 w-48 overflow-hidden rounded bg-green-900">
        <div className="h-full animate-[ping_2s_ease-in-out_infinite] bg-white"></div>
      </div>
    </div>
  );
}