type XProps = Omit<
  React.HTMLAttributes<SVGElement>,
  'xmlns' | 'viewBox' | 'width' | 'height'
> & { size?: number }

const X = ({ size = 16, className, onClick }: XProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 24 24`}
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    onClick={onClick}
  >
    <path d="M6.225 4.811L4.811 6.225 10.586 12l-5.775 5.775 1.414 1.414L12 13.414l5.775 5.775 1.414-1.414L13.414 12l5.775-5.775-1.414-1.414L12 10.586 6.225 4.811z" />
  </svg>
)

export default X
