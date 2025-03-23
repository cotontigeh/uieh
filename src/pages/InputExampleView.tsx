import { Display } from '@/components/Display'
import { Input } from '@/ui/Input'
import { Heading } from '@/ui/Heading'
import { Button } from '@/ui'

export const InputExampleView = () => {
  return (
    <>
      <Heading uppercase>Inputs Example</Heading>

      <Display>
        <Heading variant="h2">Basic auth form</Heading>
        <div className="p-4 ring-1 ring-base-100/10 rounded-lg m-auto w-3/4 lg:w-2/4">
          <div className="flex flex-col gap-4">
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
          </div>
          <Button fullWidth className="mt-4">
            Login
          </Button>
        </div>
      </Display>

      <Display>
        {/* TODO: use label from headlessUI */}
        <Heading variant="h2">Input with label</Heading>
        <div className="p-4 ring-1 ring-base-100/10 rounded-lg m-auto w-3/4 lg:w-2/4">
          <div className="flex flex-col gap-4">
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
          </div>
          <Button fullWidth className="mt-4">
            Login
          </Button>
        </div>
      </Display>

      <Display>
        {/* TODO: use label from headlessUI */}
        <Heading variant="h2">Register form</Heading>
        <div className="p-4 ring-1 ring-base-100/10 rounded-lg m-auto w-3/4 lg:w-2/4">
          <div className="flex flex-col gap-4">
            <Input type="text" placeholder="Username" />
            <Input type="email" placeholder="Email" />
            <div className="flex gap-4">
              <Input
                type="password"
                placeholder="Password"
                className="flex-1"
              />
              <Input
                type="password"
                className="flex-1"
                placeholder="Confirm password"
              />
            </div>
            {/* TODO: Create checkbox component */}
            <div className="flex gap-3 items-center">
              <Input id="terms" name="terms" type="checkbox" />
              <label htmlFor="terms">Accept terms</label>
            </div>
          </div>
          <Button color="success" fullWidth className="mt-4">
            Register
          </Button>
        </div>
      </Display>
    </>
  )
}
