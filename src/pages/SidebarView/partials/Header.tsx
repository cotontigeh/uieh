import { cn } from '@/lib/utils'
// import { Burger } from '@/ui/Burger'
import { BiAlbum } from 'react-icons/bi'

export const Header = () => {
  return (
    <div
      className={cn(
        'relative text-xl flex gap-2 items-center font-semibold p-2 pb-4 mb-2 mt-2 w-full',
        'border-b border-base-300 dark:border-base-300/30'
      )}
    >
      <BiAlbum size={34} className={cn('cursor-pointer')} />
      UIEH
      {/* <Burger size="small" color="white" className="ml-auto" isOpen /> */}
    </div>
  )
}
