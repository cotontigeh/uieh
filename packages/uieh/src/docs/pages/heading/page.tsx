import { Display } from '@/docs/components/Display'
import { Heading } from '@/ui/Heading'

export default function HeadingPage() {
  return (
    <>
      <Heading uppercase>Titles</Heading>

      <Display>
        <Heading uppercase>h1. This is the title view (default)</Heading>
        <Heading as="h2" variant="h2" uppercase>
          h2. This is the title view
        </Heading>
        <Heading as="h3" variant="h3" uppercase>
          h3. This is the title view
        </Heading>
        <Heading as="h4" variant="h4" uppercase>
          h4. This is the title view
        </Heading>
        <Heading as="h5" variant="h5" uppercase>
          h5. This is the title view
        </Heading>
        <Heading as="h6" variant="h6" uppercase>
          h6. This is the title view
        </Heading>
      </Display>
    </>
  )
}
