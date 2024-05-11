'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useToast } from '@/components/ui/use-toast'
import Image from 'next/image'
import mailIcon from '@/assets/icons/mailIcon.svg'
import { SubmitButton } from './SubmitButton'
import { useFormState } from 'react-dom'
import { subscribe } from '@/app/_actions'
import ContactModal from './ContactModal'

const EmailForm = () => {
  const { toast } = useToast()
  const [emailState, action] = useFormState(subscribe, null)
  const formRef = useRef()
  const [isModalActive, setIsModalActive] = useState(false);
  

  useEffect(() => {
    if (emailState?.error) {
      // formRef.current.reset()
      toast({
        title: 'Error! ',
        description: emailState.error.email
      })
    }

    if (emailState?.success) {
      console.log(emailState)
      formRef.current.reset()
      toast({
        title: 'Success! ',
        description: emailState.success.email + ' subscribed to news letter.'
      })
      setIsModalActive(true)
    }
  }, [emailState])

  return (
    <>
      <form
        ref={formRef}
        action={action}
        className='flex flex-col items-center justify-center gap-x-6 gap-y-[30px] md:flex-row'
      >
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
        <p aria-live='polite' className='sr-only'>
          {emailState?.error?.email}
        </p>
      </form>
      <ContactModal isModalActive={isModalActive} setIsModalActive={setIsModalActive}/>
    </>
  )
}

export default EmailForm
