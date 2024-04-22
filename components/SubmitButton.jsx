'use client'
 
import { useState } from 'react';
import { useFormStatus } from 'react-dom'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
 
export function SubmitButton() {
  const { pending } = useFormStatus()
  const [isOpen, setIsOpen] = useState(false);
  
 
  return (
    <>
    <button type='submit' disabled={pending} className='text-lg leading-normal py-2.5 w-full md:py-[21px] md:text-[17px] md:leading-[26px] bg-teal-200 rounded-[5px] md:rounded-[10px]  max-w-[204px] capitalize disabled:opacity-80 disabled:cursor-not-allowed'>{pending ? "subscribing.." : "subscribe"}</button>
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
        {/* <DialogTrigger>Open</DialogTrigger> */}
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      {/* <button onClick={(e) =>{e.preventDefault(); setIsOpen(x => !x)}}>o/c</button> */}
    </>
  )
}