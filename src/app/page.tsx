import { Button } from '@nextui-org/react'
import React from 'react'

export default function Home(): JSX.Element {
  return (
    <div className="bg-secondary h-full">
      <p className="text-primary">Base Project</p>
      <p className="text-example-color">Example</p>
      <Button color="primary" variant="shadow">
        Shadow
      </Button>
    </div>
  )
}
