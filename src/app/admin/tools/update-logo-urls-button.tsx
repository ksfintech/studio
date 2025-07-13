'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { updateLogoUrlsAction } from '../actions';
import { Image, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function UpdateLogoUrlsButton() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleUpdateLogoUrls = async () => {
    setIsLoading(true);
    try {
      const result = await updateLogoUrlsAction();
      
      if (result.success) {
        toast({
          title: 'Success',
          description: result.message,
        });
      } else {
        toast({
          title: 'Error',
          description: result.message,
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update logo URLs.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleUpdateLogoUrls}
      disabled={isLoading}
      variant="outline"
      className="flex items-center gap-2"
    >
      {isLoading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Image className="h-4 w-4" />
      )}
      Update Logo URLs
    </Button>
  );
} 