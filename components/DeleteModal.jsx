import React, { useEffect, useRef } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader
} from "@/components/ui/dialog"
import { useFormState, useFormStatus } from 'react-dom'
import { deleteEvent, saveContact } from '@/app/_actions'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'


const DeleteModal = ({ isModalActive, setIsModalActive, eve }) => {

  const [state, action] = useFormState(deleteEvent, null)
  const formRef = useRef()
  const { toast } = useToast()
  const router = useRouter()


  useEffect(() => {
    if (state?.error) {
      // formRef.current.reset()
      toast({
        title: 'Oops! ',
        description: "Could not delete. " + state.error.message
      })
    }

    if (state?.success) {
      formRef.current.reset()
      setIsModalActive(false)
      toast({
        title: state.success,
      })
      router.refresh() 
    }
  }, [state])


  return (
    <Dialog open={isModalActive} onOpenChange={setIsModalActive}>
      <DialogContent className="sm:max-w-[479px]">
      <DialogHeader className={"font-bold text-[#080809] text-[10.67px] md:text-[15px] leading-normal"}>Confirm Delete? </DialogHeader>
        
        <form ref={formRef} action={action} className='flex flex-col gap-y-2 items-center'>
            <input name='id' defaultValue={eve?.id} className='hidden'/>
            <input placeholder='PIN' type='password' name='password' className='w-full bg-[#f2f2f2] placeholder:text-[#39425d]/25  rounded-sm text-[10px] md:text-sm placeholder:text-[10px] md:placeholder:text-sm px-2 md:px-3 py-1.5 md:py-2' />

          <SubmitButton />
        </form>
       
      </DialogContent>
    </Dialog>
  )
}

export default DeleteModal


const SubmitButton = () => {
  const { pending } = useFormStatus()
 
  return (
    <button type='submit' disabled={pending} className='w-full text-xs/normal md:text-lg/normal text-white bg-[#FD8642] max-w-32 md:max-w-44 rounded-lg font-light py-1 tracking-[-2%]'>{pending ? "Deleting.." : "Delete"}</button>
  )
}