import { Button } from '@heroui/react'
import React from 'react'

export default function Home(): JSX.Element {
  return (
    <div className="bg-white h-full w-full">
      <p className="text-primary text-2xl font-bold p-10 ">Invitaxa </p>
      <p className="text-example-color">Example</p>
      <Button className='bg-red-500' size='lg' radius='full' variant='shadow'>
        Shadow
      </Button>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  )
}
