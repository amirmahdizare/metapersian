import { redirect } from 'next/navigation'
import React from 'react'

export default function page() {
  return redirect('/levels/1/general-info')
}
