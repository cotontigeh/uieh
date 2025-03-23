import { Display } from '@/docs/components/Display'
import { Button } from '@/ui/Button'
import { Nav, NavContainer, NavLink } from '@/ui/Nav'
import { Heading } from '@/ui/Heading'
import { BiAlbum } from 'react-icons/bi'

export default function NavPage() {
  return (
    <>
      <Heading uppercase>Nav</Heading>
      <Display>
        <Heading variant="h2">Base</Heading>
        <Display className="p-0 bg-base-300 dark:bg-base-300-dark h-[200px]">
          <Nav className="px-4">
            <NavContainer>
              <BiAlbum
                size={34}
                className="text-slate-800 dark:text-slate-300 mr-8 cursor-pointer"
              />
              <NavLink active>Home</NavLink>
              <NavLink>About</NavLink>
              <NavLink className="ml-auto">Sign in</NavLink>
              <Button>Get your ticket</Button>
            </NavContainer>
          </Nav>
        </Display>

        <Heading variant="h2">Primary</Heading>
        <Display className="p-0 bg-base-300 dark:bg-base-300-dark h-[200px]">
          <Nav color="primary" className="px-4">
            <NavContainer>
              <BiAlbum
                size={34}
                className="text-white dark:text-slate-300 mr-8 cursor-pointer"
              />
              <NavLink active>Home</NavLink>
              <NavLink>About</NavLink>
              <NavLink className="ml-auto">Sign in</NavLink>
              <Button color="white">Get your ticket</Button>
            </NavContainer>
          </Nav>
        </Display>

        <Heading variant="h2">Secondary</Heading>
        <Display className="p-0 bg-base-300 dark:bg-base-300-dark h-[200px]">
          <Nav color="secondary" className="px-4">
            <NavContainer>
              <BiAlbum
                size={34}
                className="text-white dark:text-slate-300 mr-8 cursor-pointer"
              />
              <NavLink active>Home</NavLink>
              <NavLink>About</NavLink>
              <NavLink className="ml-auto">Sign in</NavLink>
              <Button color="white">Get your ticket</Button>
            </NavContainer>
          </Nav>
        </Display>

        <Heading variant="h2">Accent</Heading>
        <Display className="p-0 bg-base-300 dark:bg-base-300-dark h-[200px]">
          <Nav color="accent" className="px-4">
            <NavContainer>
              <BiAlbum
                size={34}
                className="text-white dark:text-slate-300 mr-8 cursor-pointer"
              />
              <NavLink active>Home</NavLink>
              <NavLink>About</NavLink>
              <NavLink className="ml-auto">Sign in</NavLink>
              <Button color="white">Get your ticket</Button>
            </NavContainer>
          </Nav>
        </Display>
      </Display>

      {/* Sticky */}
      <Display>
        <Heading variant="h2">Sticky</Heading>
        <Display className="p-0 bg-base-300 dark:bg-base-300-dark">
          <div className="max-h-[300px] overflow-auto">
            <Nav sticky className="px-4">
              <NavContainer>
                <BiAlbum
                  size={34}
                  className="text-slate-800 dark:text-slate-300 mr-8 cursor-pointer"
                />
                <NavLink active>Home</NavLink>
                <NavLink>About</NavLink>
                <NavLink className="ml-auto">Sign in</NavLink>
                <Button color="primary">Get your ticket</Button>
              </NavContainer>
            </Nav>
            <div className="mt-4 px-4 pb-4">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore ea quis, sed esse earum quibusdam excepturi nisi tenetur
                rem cupiditate modi expedita mollitia nemo fugiat sunt, nesciunt
                ad? Illo, et! Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Tempore ea quis, sed esse earum quibusdam
                excepturi nisi tenetur rem cupiditate modi expedita mollitia
                nemo fugiat sunt, nesciunt ad? Illo, et! Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Tempore ea quis, sed esse
                earum quibusdam excepturi nisi tenetur rem cupiditate modi
                expedita mollitia nemo fugiat sunt, nesciunt ad? Illo, et!
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore ea quis, sed esse earum quibusdam excepturi nisi tenetur
                rem cupiditate modi expedita mollitia nemo fugiat sunt, nesciunt
                ad? Illo, et! Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Tempore ea quis, sed esse earum quibusdam
                excepturi nisi tenetur rem cupiditate modi expedita mollitia
                nemo fugiat sunt, nesciunt ad? Illo, et! Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Tempore ea quis, sed esse
                earum quibusdam excepturi nisi tenetur rem cupiditate modi
                expedita mollitia nemo fugiat sunt, nesciunt ad? Illo, et!
              </p>
              <br />
              <br />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore ea quis, sed esse earum quibusdam excepturi nisi tenetur
                rem cupiditate modi expedita mollitia nemo fugiat sunt, nesciunt
                ad? Illo, et! Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Tempore ea quis, sed esse earum quibusdam
                excepturi nisi tenetur rem cupiditate modi expedita mollitia
                nemo fugiat sunt, nesciunt ad? Illo, et! Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Tempore ea quis, sed esse
                earum quibusdam excepturi nisi tenetur rem cupiditate modi
                expedita mollitia nemo fugiat sunt, nesciunt ad? Illo, et!
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore ea quis, sed esse earum quibusdam excepturi nisi tenetur
                rem cupiditate modi expedita mollitia nemo fugiat sunt, nesciunt
                ad? Illo, et! Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Tempore ea quis, sed esse earum quibusdam
                excepturi nisi tenetur rem cupiditate modi expedita mollitia
                nemo fugiat sunt, nesciunt ad? Illo, et! Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Tempore ea quis, sed esse
                earum quibusdam excepturi nisi tenetur rem cupiditate modi
                expedita mollitia nemo fugiat sunt, nesciunt ad? Illo, et!
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore ea quis, sed esse earum quibusdam excepturi nisi tenetur
                rem cupiditate modi expedita mollitia nemo fugiat sunt, nesciunt
                ad? Illo, et! Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Tempore ea quis, sed esse earum quibusdam
                excepturi nisi tenetur rem cupiditate modi expedita mollitia
                nemo fugiat sunt, nesciunt ad? Illo, et! Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Tempore ea quis, sed esse
                earum quibusdam excepturi nisi tenetur rem cupiditate modi
                expedita mollitia nemo fugiat sunt, nesciunt ad? Illo, et!
              </p>
            </div>
          </div>
        </Display>
      </Display>
    </>
  )
}
