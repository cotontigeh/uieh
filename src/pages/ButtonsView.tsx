import { Button } from '@/ui/Button/Button'
import { BiAlarm } from 'react-icons/bi'

export const ButtonsView = () => {
  return (
    <section className="flex flex-col gap-2 p-2">
      <h1 className="text-3xl uppercase">Button</h1>

      {/* Size large */}
      <div className="flex flex-col gap-2 py-2">
        <h2>Size large</h2>
        <div className="flex flex-wrap gap-2 py-2">
          <Button color="blue" size="large">
            Blue
          </Button>
          <Button color="green" size="large">
            Green
          </Button>
          <Button color="red" size="large">
            Red
          </Button>
          <Button color="slate" size="large">
            slate
          </Button>
        </div>
      </div>

      {/* Size medium */}
      <div className="flex flex-col gap-2 py-2">
        <h2>Size medium (default)</h2>
        <div className="flex flex-wrap gap-2 py-2">
          <Button color="blue">Blue</Button>
          <Button color="green">Green</Button>
          <Button color="red">Red</Button>
          <Button color="slate">slate</Button>
        </div>
      </div>

      {/* Size small */}
      <div className="flex flex-col gap-2 py-2">
        <h2>Size small</h2>
        <div className="flex flex-wrap gap-2 py-2">
          <Button color="blue" size="small">
            Blue
          </Button>
          <Button color="green" size="small">
            Green
          </Button>
          <Button color="red" size="small">
            Red
          </Button>
          <Button color="slate" size="small">
            slate
          </Button>
        </div>
      </div>

      {/* Ghost variant */}
      <div className="flex flex-col gap-2 py-2">
        <h2>Ghost variant</h2>
        <div className="flex flex-wrap gap-2 py-2">
          <Button color="blue" variant="ghost">
            Blue
          </Button>
          <Button color="green" variant="ghost">
            Green
          </Button>
          <Button color="red" variant="ghost">
            Red
          </Button>
          <Button color="slate" variant="ghost">
            slate
          </Button>
        </div>
      </div>

      {/* AsChild */}
      <div className="flex flex-col gap-2 py-2">
        <h2>AsChild</h2>
        <div className="flex gap-2 py-2">
          <Button color="blue" asChild>
            <a href="#">
              <BiAlarm /> AsChild
            </a>
          </Button>
        </div>
      </div>

      {/* Disable */}
      <div className="flex flex-col gap-2 py-2">
        <h2>Disable</h2>
        <div className="flex gap-2 py-2">
          <Button color="green" disable>
            Disable
          </Button>
        </div>
      </div>
    </section>
  )
}
