import { Button } from '@/Button/Button'
import { BiAlarm } from 'react-icons/bi'

export const ButtonsView = () => {
  return (
    <section className="flex flex-col gap-2 p-2">
      <h1 className="text-3xl uppercase">Button</h1>

      {/* Size large */}
      <div className="flex flex-col gap-2 py-2">
        <h2>Size large</h2>
        <div className="flex flex-wrap gap-2 py-2">
          <Button color="gray" size="large">
            Gray
          </Button>
          <Button color="blue" size="large">
            Blue
          </Button>
          <Button color="purple" size="large">
            Purple
          </Button>
          <Button color="indigo" size="large">
            indigo
          </Button>
          <Button color="violet" size="large">
            violet
          </Button>
          <Button color="green" size="large">
            Green
          </Button>
          <Button color="orange" size="large">
            Orange
          </Button>
          <Button color="red" size="large">
            Red
          </Button>
          <Button color="yellow" size="large">
            Yellow
          </Button>
          <Button color="slate" size="large">
            slate
          </Button>
          <Button color="lime" size="large">
            lime
          </Button>
          <Button color="rose" size="large">
            rose
          </Button>
          <Button color="pink" size="large">
            pink
          </Button>
          <Button color="zinc" size="large">
            zinc
          </Button>
          <Button color="amber" size="large">
            amber
          </Button>
          <Button color="cyan" size="large">
            cyan
          </Button>
          <Button color="teal" size="large">
            teal
          </Button>
          <Button color="emerald" size="large">
            emerald
          </Button>
          <Button color="sky" size="large">
            sky
          </Button>
          <Button color="fuchsia" size="large">
            fuchsia
          </Button>
          <Button color="neutral" size="large">
            neutral
          </Button>
          <Button color="stone" size="large">
            stone
          </Button>
        </div>
      </div>

      {/* Size medium */}
      <div className="flex flex-col gap-2 py-2">
        <h2>Size medium (default)</h2>
        <div className="flex flex-wrap gap-2 py-2">
          <Button color="gray">Gray</Button>
          <Button color="blue">Blue</Button>
          <Button color="purple">Purple</Button>
          <Button color="indigo">indigo</Button>
          <Button color="violet">violet</Button>
          <Button color="green">Green</Button>
          <Button color="orange">Orange</Button>
          <Button color="red">Red</Button>
          <Button color="yellow">Yellow</Button>
          <Button color="slate">slate</Button>
          <Button color="lime">lime</Button>
          <Button color="rose">rose</Button>
          <Button color="pink">pink</Button>
          <Button color="zinc">zinc</Button>
          <Button color="amber">amber</Button>
          <Button color="cyan">cyan</Button>
          <Button color="teal">teal</Button>
          <Button color="emerald">emerald</Button>
          <Button color="sky">sky</Button>
          <Button color="fuchsia">fuchsia</Button>
          <Button color="neutral">neutral</Button>
          <Button color="stone">stone</Button>
        </div>
      </div>

      {/* Size small */}
      <div className="flex flex-col gap-2 py-2">
        <h2>Size small</h2>
        <div className="flex flex-wrap gap-2 py-2">
          <Button color="gray" size="small">
            Gray
          </Button>
          <Button color="blue" size="small">
            Blue
          </Button>
          <Button color="purple" size="small">
            Purple
          </Button>
          <Button color="indigo" size="small">
            indigo
          </Button>
          <Button color="violet" size="small">
            violet
          </Button>
          <Button color="green" size="small">
            Green
          </Button>
          <Button color="orange" size="small">
            Orange
          </Button>
          <Button color="red" size="small">
            Red
          </Button>
          <Button color="yellow" size="small">
            Yellow
          </Button>
          <Button color="slate" size="small">
            slate
          </Button>
          <Button color="lime" size="small">
            lime
          </Button>
          <Button color="rose" size="small">
            rose
          </Button>
          <Button color="pink" size="small">
            pink
          </Button>
          <Button color="zinc" size="small">
            zinc
          </Button>
          <Button color="amber" size="small">
            amber
          </Button>
          <Button color="cyan" size="small">
            cyan
          </Button>
          <Button color="teal" size="small">
            teal
          </Button>
          <Button color="emerald" size="small">
            emerald
          </Button>
          <Button color="sky" size="small">
            sky
          </Button>
          <Button color="fuchsia" size="small">
            fuchsia
          </Button>
          <Button color="neutral" size="small">
            neutral
          </Button>
          <Button color="stone" size="small">
            stone
          </Button>
        </div>
      </div>

      {/* Ghost variant */}
      <div className="flex flex-col gap-2 py-2">
        <h2>Ghost variant</h2>
        <div className="flex flex-wrap gap-2 py-2">
          <Button color="gray" variant="ghost">
            Gray
          </Button>
          <Button color="blue" variant="ghost">
            Blue
          </Button>
          <Button color="purple" variant="ghost">
            Purple
          </Button>
          <Button color="indigo" variant="ghost">
            indigo
          </Button>
          <Button color="violet" variant="ghost">
            violet
          </Button>
          <Button color="green" variant="ghost">
            Green
          </Button>
          <Button color="orange" variant="ghost">
            Orange
          </Button>
          <Button color="red" variant="ghost">
            Red
          </Button>
          <Button color="yellow" variant="ghost">
            Yellow
          </Button>
          <Button color="slate" variant="ghost">
            slate
          </Button>
          <Button color="lime" variant="ghost">
            lime
          </Button>
          <Button color="rose" variant="ghost">
            rose
          </Button>
          <Button color="pink" variant="ghost">
            pink
          </Button>
          <Button color="zinc" variant="ghost">
            zinc
          </Button>
          <Button color="amber" variant="ghost">
            amber
          </Button>
          <Button color="cyan" variant="ghost">
            cyan
          </Button>
          <Button color="teal" variant="ghost">
            teal
          </Button>
          <Button color="emerald" variant="ghost">
            emerald
          </Button>
          <Button color="sky" variant="ghost">
            sky
          </Button>
          <Button color="fuchsia" variant="ghost">
            fuchsia
          </Button>
          <Button color="neutral" variant="ghost">
            neutral
          </Button>
          <Button color="stone" variant="ghost">
            stone
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
