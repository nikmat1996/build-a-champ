import React from 'react';
import { useToast } from "@/components/ui/use-toast";
import Image from 'next/image';
import mailIcon from '@/assets/icons/mailIcon.svg';
import { SubmitButton } from './SubmitButton';

const EmailForm = () => {

    // const { toast } = useToast()

  return (
    <form className='flex flex-col md:flex-row gap-x-6 gap-y-[30px] justify-center items-center'>
      <div className=' relative'>
        <input type='text' name='email' id='email' className='pl-12 md:pl-16 h-full rounded-[7px] md:rounded-[10px] outline-teal-300 w-screen max-w-[294px] md:max-w-[421px] py-4 md:py-[23px] text-xs md:text-sm'/>
        <Image src={mailIcon} alt='mail icon' className='w-[14px] md:w-[21px] absolute top-1/2 -translate-y-1/2 ml-5 pointer-events-none' />
        </div>
        <SubmitButton />
    </form>
  )
}

export default EmailForm
