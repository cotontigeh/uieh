import { Display } from '@/components/Display'
import { Heading } from '@/ui/Heading'

export const TitlesView = () => {
  return (
    <>
      <Heading uppercase>Titles</Heading>

      <Display>
        <Heading uppercase>h1. This is the title view (default)</Heading>
        <Heading variant="h2" uppercase>
          h2. This is the title view
        </Heading>
        <Heading variant="h3" uppercase>
          h3. This is the title view
        </Heading>
        <Heading variant="h4" uppercase>
          h4. This is the title view
        </Heading>
        <Heading variant="h5" uppercase>
          h5. This is the title view
        </Heading>
        <Heading variant="h6" uppercase>
          h6. This is the title view
        </Heading>
      </Display>
    </>
  )
}
