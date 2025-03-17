import { cn } from '@/lib/utils'
import { Burger } from '@/ui/Burger'
import { BiAlbum } from 'react-icons/bi'

type NavHeaderProps = {
  mobile?: boolean
  onCloseClick?: () => void
}

export const NavHeader = ({ mobile, onCloseClick }: NavHeaderProps) => {
  return (
    <div
      className={cn(
        'relative text-xl flex gap-2 items-center font-semibold p-2 pb-4 mb-2 mt-2 w-full',
        'border-b border-base-300 dark:border-base-300/30'
      )}
    >
      <BiAlbum size={34} className={cn('cursor-pointer')} />
      UIEH
      {mobile && (
        <Burger
          size="small"
          color="white"
          className="ml-auto"
          isOpen
          onClick={() => onCloseClick && onCloseClick()}
        />
      )}
    </div>
  )
}
