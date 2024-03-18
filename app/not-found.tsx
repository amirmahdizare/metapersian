import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className='flex flex-col gap-2 justify-center items-center h-full text-black'>به زودی...
    <Link className='text-blue-600' prefetch={false} href={'/levels/reporter'}>بازگشت</Link>
    </div>
  )
}
