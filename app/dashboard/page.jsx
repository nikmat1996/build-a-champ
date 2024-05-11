"use client"

import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import TimePicker from 'react-time-picker';
import { useFormState } from 'react-dom'
import { addEvent } from '../_actions';
import { useToast } from '@/components/ui/use-toast';


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

const genderOpt = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'both', label: 'Male and Female' }
]

const Dashboard = () => {

  const [date, setDate] = useState()
  const [value, onChange] = useState('10:00');
  const { toast } = useToast()
  // console.log(date)
  
  const submitAction = async (formData) => {

   formData.set('date', date)
    const res = await addEvent(formData)
    // console.log(res)
    if(res.success){
      toast({
        title: 'Success! ',
        description: "Event Added."
      })
      return
    }

    if(res.error){
      toast({
        title: 'Failed! ',
        description: res.error.message
      })
    }
  }
  

  return (
    <section className='mx-auto max-w-4xl border-x-2  py-10'>
      <form action={submitAction} className='flex flex-col items-center gap-y-10 px-2'>
        <h2>ADD EVENT</h2>


        <Select name='sport'>
          <SelectTrigger className='w-full max-w-[400px] text-muted-foreground text-sm'>
            <SelectValue placeholder='Select Sport' />
          </SelectTrigger>
          <SelectContent>
            {sports.map(sport =><SelectItem key={sport.value} value={sport.value}>{sport.label}</SelectItem>)}
          </SelectContent>
        </Select>

        <Popover >
          <PopoverTrigger asChild name='date'>
            <Button
              variant={"outline"}
              className={cn(
                "w-full max-w-[400px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" name="date">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(val) => {
                setDate(val)
              }}
              initialFocus
              name="date"
            />
          </PopoverContent>
        </Popover>

        <TimePicker onChange={onChange} value={value} className={"w-full max-w-[400px] rounded-lg"}/>

        <Select name='gender'>
          <SelectTrigger className='w-full max-w-[400px] text-muted-foreground text-sm'>
            <SelectValue placeholder='Select Gender' />
          </SelectTrigger>
          <SelectContent>
            {genderOpt.map(opt =><SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>)}
          </SelectContent>
        </Select>

        <Input type="text" name={"category"} placeholder="Category" className="w-full max-w-[400px]"/>
        <Input type="number" name={"price"} placeholder="Price" className="w-full max-w-[400px]"/>
        <textarea type="textarea" name={"address"} placeholder="Address" className="w-full max-w-[400px] text-sm border rounded-lg p-2 placeholder-[#64748B] focus-within:outline-black "/>
        <Input type="tel" name={"phone"} placeholder="Phone" className="w-full max-w-[400px]"/>


        <Input type="text" name={"url"} placeholder="Image url" className="w-full max-w-[400px]"/>

        <Input type="password" name={"password"} placeholder="PIN" className="w-full max-w-[400px]"/>


        <Button type="submit" className="px-20">Add</Button>

      </form>
    </section>
  )
}

export default Dashboard
