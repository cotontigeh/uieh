import { Display } from '@/components/Display'
import { Button } from '@/ui/Button'
import { Nav, NavContainer, NavLink } from '@/ui/Nav'
import { BiAlbum } from 'react-icons/bi'

export const NavView = () => {
  return (
    <>
      <h1>Nav</h1>
      <Display>
        <h2>Base</h2>
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

        <h2>Primary</h2>
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

        <h2>Secondary</h2>
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

        <h2>Accent</h2>
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
        <h2>Sticky</h2>
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
