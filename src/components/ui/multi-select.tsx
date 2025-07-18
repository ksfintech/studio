'use client';

import * as React from 'react';
import { Check, X, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export type MultiSelectOption = {
  value: string;
  label: string;
};

interface MultiSelectProps {
  options: MultiSelectOption[];
  selected: string[];
  onChange: (selected: string[]) => void;
  className?: string;
  placeholder?: string;
}

export function MultiSelect({
  options,
  selected,
  onChange,
  className,
  placeholder = 'Select options...',
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);

  const selectedSet = React.useMemo(() => new Set(selected), [selected]);

  const handleSelect = (value: string) => {
    const newSelectedSet = new Set(selectedSet);
    if (newSelectedSet.has(value)) {
      newSelectedSet.delete(value);
    } else {
      newSelectedSet.add(value);
    }
    onChange(Array.from(newSelectedSet));
  };

  const handleRemove = (value: string) => {
    const newSelectedSet = new Set(selectedSet);
    newSelectedSet.delete(value);
    onChange(Array.from(newSelectedSet));
  };
  
  const getLabel = (value: string) => {
    return options.find(option => option.value === value)?.label || value;
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn('w-full justify-between h-auto min-h-10', className)}
        >
          <div className="flex gap-1 flex-wrap">
            {selected.length > 0 ? (
              selected.map(value => (
                <Badge
                  variant="secondary"
                  key={value}
                  className="mr-1"
                  onClick={e => {
                    e.stopPropagation();
                    handleRemove(value);
                  }}
                >
                  {getLabel(value)}
                  <X className="h-3 w-3 ml-1" />
                </Badge>
              ))
            ) : (
              <span className="text-muted-foreground">{placeholder}</span>
            )}
          </div>
          <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map(option => (
                <CommandItem
                  key={option.value}
                  onSelect={() => handleSelect(option.value)}
                  value={option.value}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      selectedSet.has(option.value) ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
