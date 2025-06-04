'use client'

import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { CheckIcon, CopyIcon } from 'lucide-react'
import { useId, useRef, useState } from 'react'

export default function CopyInput({ value }: { value: string }) {
  const id = useId()
  const inputRef = useRef<HTMLInputElement>(null)
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (inputRef.current) {
      await navigator.clipboard.writeText(inputRef.current.value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    }
  }

  return (
    <div className="relative min-w-[220px]">
      <Input
        id={id}
        className=""
        placeholder="Copy something..."
        value={value}
        disabled={true}
        type="text"
        ref={inputRef}
      />
      <button
        className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-8 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
        type="button"
        onClick={handleCopy}
        aria-label="Copy to clipboard"
      >
        <div className={cn('transition-all', copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0')}>
          <CheckIcon className="stroke-emerald-500" size={16} aria-hidden="true" />
        </div>
        <div className={cn('absolute transition-all', copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100')}>
          <CopyIcon size={16} aria-hidden="true" />
        </div>
      </button>
    </div>
  )
}
