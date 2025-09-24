import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'
import { Burger } from '@/ui/Burger'
import { BiAlbum } from 'react-icons/bi'

type NavHeaderProps = {
  mobile?: boolean
  showThemeToggle?: boolean
  onCloseClick?: () => void
  className?: string
}

export const NavHeader = ({
  mobile,
  onCloseClick,
  showThemeToggle = false,
  className
}: NavHeaderProps) => {
  const { toggleTheme, theme } = useTheme()

  return (
    <div
      className={cn(
        'relative text-xl flex gap-2 items-center font-semibold p-2 pb-4 mb-2 mt-2 w-full',
        'border-b border-base-300 dark:border-base-300/30',
        className
      )}
    >
      <BiAlbum size={34} className={cn('cursor-pointer')} />
      UIEH
      {showThemeToggle ? (
        <div
          onClick={toggleTheme}
          className="sticky top-0 right-0 select-none flex gap-2 items-center cursor-pointer ml-auto text-sm"
        >
          <span className={theme === 'dark' ? 'font-bold' : undefined}>
            Dark
          </span>
          /
          <span className={theme === 'light' ? 'font-bold' : undefined}>
            Light
          </span>
        </div>
      ) : null}
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
