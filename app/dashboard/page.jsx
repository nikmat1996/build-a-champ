import React from 'react'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

const sports = [
  { value: 'football', label: 'Football' },
  { value: 'badminton', label: 'Badminton' },
  { value: 'basketball', label: 'Basketball' },
  { value: 'soccer', label: 'Soccer' },
  { value: 'tennis', label: 'Tennis' },
  { value: 'swimming', label: 'Swimming' },
  { value: 'running', label: 'Running' },
  { value: 'cycling', label: 'Cycling' },
  { value: 'golf', label: 'Golf' },
  { value: 'hiking', label: 'Hiking' }
]

const page = () => {
  return (
    <section className='mx-auto h-screen max-w-4xl border-x-2  py-10'>
      <form action='' className='flex flex-col items-center gap-y-10'>
        <h2>ADD EVENT</h2>
        <Select name='sport'>
          <SelectTrigger className='w-[200px]'>
            <SelectValue placeholder='Select Sport' />
          </SelectTrigger>
          <SelectContent>
            {sports.map(sport =><SelectItem key={sport.value} value={sport.value}>{sport.label}</SelectItem>)}
          </SelectContent>
        </Select>
      </form>
    </section>
  )
}

export default page
