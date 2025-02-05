import { BiAlarm } from 'react-icons/bi'
import { Badge } from './Badge/Badge'
import { Button } from './Button'

function App() {
  return (
    <>
      <h1 className="text-3xl uppercase">uieh</h1>

      <section className="flex flex-col gap-2 p-2">
        {/* Size large */}
        <div className="flex flex-col gap-2 py-2">
          <h2>Size large</h2>
          <div className="flex gap-2 ">
            <Badge color="gray" size="large">
              Gray
            </Badge>
            <Badge color="blue" size="large">
              Blue
            </Badge>
            <Badge color="purple" size="large">
              Purple
            </Badge>
            <Badge color="green" size="large">
              Green
            </Badge>
            <Badge color="orange" size="large">
              Orange
            </Badge>
            <Badge color="red" size="large">
              Red
            </Badge>
            <Badge color="yellow" size="large">
              Yellow
            </Badge>
          </div>
        </div>

        {/* Size medium */}
        <div className="flex flex-col gap-2 py-2">
          <h2>Size medium (default)</h2>
          <div className="flex gap-2 py-2">
            <Badge color="gray">Gray</Badge>
            <Badge color="blue">Blue</Badge>
            <Badge color="purple">Purple</Badge>
            <Badge color="green">Green</Badge>
            <Badge color="orange">Orange</Badge>
            <Badge color="red">Red</Badge>
            <Badge color="yellow">Yellow</Badge>
          </div>
        </div>

        {/* Size small */}
        <div className="flex flex-col gap-2 py-2">
          <h2>Size small</h2>
          <div className="flex gap-2 py-2">
            <Badge color="gray" size="small">
              Gray
            </Badge>
            <Badge color="blue" size="small">
              Blue
            </Badge>
            <Badge color="purple" size="small">
              Purple
            </Badge>
            <Badge color="green" size="small">
              Green
            </Badge>
            <Badge color="orange" size="small">
              Orange
            </Badge>
            <Badge color="red" size="small">
              Red
            </Badge>
            <Badge color="yellow" size="small">
              Yellow
            </Badge>
          </div>
        </div>

        {/* Variant dotted */}
        <div className="flex flex-col gap-2 py-2">
          <h2>Variant dotted</h2>
          <div className="flex gap-2 py-2">
            <Badge variant="dotted" color="gray">
              Gray
            </Badge>
            <Badge variant="dotted" color="blue">
              Blue
            </Badge>
            <Badge variant="dotted" color="purple">
              Purple
            </Badge>
            <Badge variant="dotted" color="green">
              Green
            </Badge>
            <Badge variant="dotted" color="orange">
              Orange
            </Badge>
            <Badge variant="dotted" color="red">
              Red
            </Badge>
            <Badge variant="dotted" color="yellow">
              Yellow
            </Badge>
          </div>
        </div>

        {/* Dissmissable */}
        <div className="flex flex-col gap-2 py-2">
          <h2>Dissmissable</h2>
          <div className="flex gap-2 py-1">
            <Badge variant="dotted" color="gray" size="large" dissmissable>
              Gray
            </Badge>
            <Badge variant="dotted" color="blue" size="large" dissmissable>
              Blue
            </Badge>
            <Badge variant="dotted" color="purple" size="large" dissmissable>
              Purple
            </Badge>
            <Badge variant="dotted" color="green" size="large" dissmissable>
              Green
            </Badge>
            <Badge variant="dotted" color="orange" size="large" dissmissable>
              Orange
            </Badge>
            <Badge variant="dotted" color="red" size="large" dissmissable>
              Red
            </Badge>
            <Badge variant="dotted" color="yellow" size="large" dissmissable>
              Yellow
            </Badge>
          </div>

          <div className="flex gap-2 py-1">
            <Badge variant="dotted" color="gray" dissmissable>
              Gray
            </Badge>
            <Badge variant="dotted" color="blue" dissmissable>
              Blue
            </Badge>
            <Badge variant="dotted" color="purple" dissmissable>
              Purple
            </Badge>
            <Badge variant="dotted" color="green" dissmissable>
              Green
            </Badge>
            <Badge variant="dotted" color="orange" dissmissable>
              Orange
            </Badge>
            <Badge variant="dotted" color="red" dissmissable>
              Red
            </Badge>
            <Badge variant="dotted" color="yellow" dissmissable>
              Yellow
            </Badge>
          </div>

          <div className="flex gap-2 py-1">
            <Badge variant="dotted" color="gray" size="small" dissmissable>
              Gray
            </Badge>
            <Badge variant="dotted" color="blue" size="small" dissmissable>
              Blue
            </Badge>
            <Badge variant="dotted" color="purple" size="small" dissmissable>
              Purple
            </Badge>
            <Badge variant="dotted" color="green" size="small" dissmissable>
              Green
            </Badge>
            <Badge variant="dotted" color="orange" size="small" dissmissable>
              Orange
            </Badge>
            <Badge variant="dotted" color="red" size="small" dissmissable>
              Red
            </Badge>
            <Badge variant="dotted" color="yellow" size="small" dissmissable>
              Yellow
            </Badge>
          </div>
        </div>

        {/* asChild */}
        <div className="flex flex-col gap-2 py-2">
          <h2>asChild</h2>
          <div className="flex gap-2 py-2">
            <Badge color="blue" asChild>
              <a href="#">asChild "a"</a>
            </Badge>
            <Badge color="gray" asChild>
              <a href="#">asChild "a"</a>
            </Badge>
            <Badge color="purple" asChild>
              <a href="#">asChild "a"</a>
            </Badge>
            <Badge color="green" asChild>
              <a href="#">asChild "a"</a>
            </Badge>
            <Badge color="orange" asChild>
              <a href="#">asChild "a"</a>
            </Badge>
            <Badge color="red" asChild>
              <a href="#">asChild "a"</a>
            </Badge>
            <Badge color="yellow" asChild>
              <a href="#">asChild "a"</a>
            </Badge>
          </div>
          <div className="flex gap-2 py-2">
            <Badge variant="dotted" color="blue" asChild>
              <a href="#">asChild "a"</a>
            </Badge>
            <Badge variant="dotted" color="gray" asChild>
              <a href="#">asChild "a"</a>
            </Badge>
            <Badge variant="dotted" color="purple" asChild>
              <a href="#">asChild "a"</a>
            </Badge>
            <Badge variant="dotted" color="green" asChild>
              <a href="#">asChild "a"</a>
            </Badge>
            <Badge variant="dotted" color="orange" asChild>
              <a href="#">asChild "a"</a>
            </Badge>
            <Badge variant="dotted" color="red" asChild>
              <a href="#">asChild "a"</a>
            </Badge>
            <Badge variant="dotted" color="yellow" asChild>
              <a href="#">asChild "a"</a>
            </Badge>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-2 p-2">
        {/* Size large */}
        <div className="flex flex-col gap-2 py-2">
          <h2>Size large</h2>
          <div className="flex gap-2 py-2">
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
          </div>
        </div>

        {/* Size medium */}
        <div className="flex flex-col gap-2 py-2">
          <h2>Size medium (default)</h2>
          <div className="flex gap-2 py-2">
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
          </div>
        </div>

        {/* Size small */}
        <div className="flex flex-col gap-2 py-2">
          <h2>Size small</h2>
          <div className="flex gap-2 py-2">
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
          </div>
        </div>

        {/* Ghost variant */}
        <div className="flex flex-col gap-2 py-2">
          <h2>Ghost variant</h2>
          <div className="flex gap-2 py-2">
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
    </>
  )
}

export default App
