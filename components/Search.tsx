'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from "use-debounce";
import { Input } from './ui/input';
import { Label } from '@/components/ui/label'

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set('search', term);
    } else {
      params.delete('search');
    } 
    replace(`${pathname}?${params.toString()}`);
  }, 600)
  
  return (
    <div className="relative w-[60%] items-center flex flex-1 mb-1 ml-3 h-[60px] py-[9px]">
      <Label htmlFor="search" className="sr-only">
        Search
      </Label>
      <Input
        className="peer block  h-11 rounded-full border   pl-10 text-sm outline-2"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-neutral-300 peer-focus:text-white" />
    </div>
  );
}