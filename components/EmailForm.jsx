import React from 'react'
import { useToast } from '@/components/ui/use-toast'
import Image from 'next/image'
import mailIcon from '@/assets/icons/mailIcon.svg'
import { SubmitButton } from './SubmitButton'



const EmailForm = () => {
  // const { toast } = useToast()

  return (
    <form className='flex flex-col items-center justify-center gap-x-6 gap-y-[30px] md:flex-row'>
      <div className=' relative'>
        <input
          type='text'
          name='email'
          id='email'
          placeholder='Your email'
          className='h-full w-screen max-w-[294px] rounded-[7px] py-4 pl-12 text-xs outline-teal-300 md:max-w-[421px] md:rounded-[10px] md:py-[23px] md:pl-16 md:text-sm'
        />
        <Image
          src={mailIcon}
          alt='mail icon'
          className='pointer-events-none absolute top-1/2 ml-5 w-[14px] -translate-y-1/2 md:w-[21px]'
        />
      </div>
      <SubmitButton />
      <p aria-live=''></p>
    </form>
  )
}

export default EmailForm
