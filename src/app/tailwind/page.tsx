import React from 'react'

function TailwindPage() {
  return (
    <div className='container mx-auto p-4 bg-gray-200 min-h-screen'>
      <div className='font-bold text-4xl text-blue-500'>TailwindCSS</div>
      <div className='flex justify-between'>
        <div className='bg-amber-200'>sidebar</div>
        <div className='bg-red-200'>main</div>
      </div>
    </div>
  )
}

export default TailwindPage