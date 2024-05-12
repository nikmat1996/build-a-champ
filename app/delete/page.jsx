'use client'

import { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import DeleteModal from '@/components/DeleteModal'
import { format } from 'date-fns'

const Delete = () => {
  const [events, setEvents] = useState([])
  const [isModalActive, setIsModalActive] = useState(false);
  const [selectedEve, setSelectedEve] = useState({});
  

  const getData = async () => {
    try {
      const response = await fetch('/api/events', { cache: 'no-store' })
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      return response.json()
    } catch (error) {
      console.error('Error fetching data:', error)

      throw error
    }
  }

  useEffect(() => {
    getData()
      .then(res => {
        console.log('Res:', res)
        res.data.forEach(event => {
          setEvents(res.data)
        })
      })
      .catch(error => {
        console.error('Error:', error)
      })
    // setToday(new Date().toISOString())
  }, [])

  const handleClick = (clickedEve) => {
    console.log("clicked")
    setSelectedEve(clickedEve)
    setIsModalActive(true)
  }

  return (
    <div className='py-10 px-3'>
      <Table className="max-w-[800px] mx-auto ">
        {/* <TableCaption>Events</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>Sport</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className=''>Amount</TableHead>
            <TableHead className=''>Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.length > 0 &&
            events.map(eve => (
              <TableRow key={eve.id}>
                <TableCell className='font-medium capitalize'>{eve.sport}</TableCell>
                <TableCell>{format(eve.date, "do LLL yyyy")}</TableCell>
                <TableCell className=''>{eve.price}</TableCell>
                <TableCell className=''><Button onClick={() => handleClick(eve)}>Delete</Button></TableCell>

              </TableRow>
            ))}
        </TableBody>
      </Table>
      <DeleteModal isModalActive={isModalActive} setIsModalActive={setIsModalActive} eve={selectedEve}/>
    </div>
  )
}

export default Delete
