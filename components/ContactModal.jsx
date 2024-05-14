import React, { useEffect, useRef } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader
} from "@/components/ui/dialog"
import { useFormState, useFormStatus } from 'react-dom'
import { saveContact } from '@/app/_actions'
import { useToast } from '@/components/ui/use-toast'


const ContactModal = ({ isModalActive, setIsModalActive, email }) => {

  const [state, action] = useFormState(saveContact, null)
  const formRef = useRef()
  const { toast } = useToast()

  useEffect(() => {
    if (state?.error) {
      // formRef.current.reset()
      toast({
        title: 'Oops! ',
        description: "Could not save the details now. Please try again later."
      })
    }

    if (state?.data) {
      formRef.current.reset()
      setIsModalActive(false)
      toast({
        title: 'Thank you for your interest. We will reach out to you soon ',
      })
    }
  }, [state])


  return (
    <Dialog open={isModalActive} onOpenChange={setIsModalActive}>
      <DialogContent className="sm:max-w-[479px]">
      <DialogHeader className={"font-bold text-[#080809] text-[10.67px] md:text-[15px] leading-normal"}>Want to get connected with us? </DialogHeader>
        
        <form ref={formRef} action={action} className='flex flex-col gap-y-2 items-center'>
          <input placeholder='Your Name' type='text' name='name' className='w-full bg-[#f2f2f2] placeholder:text-[#39425d]/25  rounded-sm text-[10px] md:text-sm placeholder:text-[10px] md:placeholder:text-sm px-2 md:px-3 py-1.5 md:py-2' />
          <div className='w-full flex gap-x-2'>

            <input placeholder='Age' type='number' name='age' className='w-full bg-[#f2f2f2] placeholder:text-[#39425d]/25  rounded-sm text-[10px] md:text-sm placeholder:text-[10px] md:placeholder:text-sm px-2 md:px-3 py-1.5 md:py-2' />
            <input placeholder='Gender' name='gender' className='w-full bg-[#f2f2f2] placeholder:text-[#39425d]/25  rounded-sm text-[10px] md:text-sm placeholder:text-[10px] md:placeholder:text-sm px-2 md:px-3 py-1.5 md:py-2' />

          </div>
          <input type="email" name="email" id="email" defaultValue={email} className='sr-only' />
          <input placeholder='Contact Number' type='tel' name='mobile' className='w-full bg-[#f2f2f2] placeholder:text-[#39425d]/25  rounded-sm text-[10px] md:text-sm placeholder:text-[10px] md:placeholder:text-sm px-2 md:px-3 py-1.5 md:py-2' />
          <textarea placeholder='Address' type='text' name='address' className='w-full h-12 md:h-16 bg-[#f2f2f2] placeholder:text-[#39425d]/25  rounded-sm text-[10px] md:text-sm placeholder:text-[10px] md:placeholder:text-sm px-2 md:px-3 py-1.5 md:py-2' />
          <SubmitButton />
        </form>
       
      </DialogContent>
    </Dialog>
  )
}

export default ContactModal


const SubmitButton = () => {
  const { pending } = useFormStatus()
 
  return (
    <button type='submit' disabled={pending} className='w-full text-xs/normal md:text-lg/normal text-white bg-[#FD8642] max-w-32 md:max-w-44 rounded-lg font-light py-1 tracking-[-2%]'>{pending ? "Saving.." : "Save"}</button>
  )
}