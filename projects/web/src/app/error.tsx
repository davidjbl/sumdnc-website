'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect } from 'react';

// AIDEV-NOTE: Error boundary for handling runtime errors
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Something went wrong!</CardTitle>
          <CardDescription>An error occurred while processing your request.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-md bg-destructive/10 p-4">
              <p className="text-sm text-destructive">
                {error.message || 'An unexpected error occurred'}
              </p>
            </div>
            <Button onClick={() => reset()} className="w-full">
              Try again
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
