'use client'
 
import { useFormStatus } from 'react-dom'
 
export function SubmitButton() {
  const { pending } = useFormStatus()
 
  return (
    <button type='submit' disabled={pending} className='text-xs sm:text-lg/normal py-2.5 px-[65px] md:px-[47px] md:py-[21px] md:text-[17px] md:leading-[26px] bg-teal-200 rounded-[5px] md:rounded-[10px]  max-w-[204px] capitalize'>subscribe</button>
  )
}