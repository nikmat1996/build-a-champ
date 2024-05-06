import { useFormStatus } from 'react-dom'

export function SubmitButton() {
  const { pending } = useFormStatus()
 
  return (
    <button type='submit' disabled={pending} className='text-lg leading-normal py-2.5 w-full md:py-[21px] md:text-[17px] md:leading-[26px] bg-teal-200 rounded-[5px] md:rounded-[10px]  max-w-[204px] hover:opacity-85 capitalize disabled:opacity-80 disabled:cursor-not-allowed'>{pending ? "subscribing.." : "subscribe"}</button>
  )
}