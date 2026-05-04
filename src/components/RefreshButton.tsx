'use client';
import { useRouter } from 'next/navigation';
import Button from './Button';

export default function RefreshButton() {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.refresh()}
      variant="secondary"
      className="mb-3"
    >
      Refresh
    </Button>
  );
}
