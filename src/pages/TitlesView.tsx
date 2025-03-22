import { Display } from '@/components/Display'
import { Title } from '@/ui/Title'

export const TitlesView = () => {
  return (
    <>
      <Title uppercase>Titles</Title>

      <Display>
        <Title uppercase>h1. This is the title view (default)</Title>
        <Title variant="h2" uppercase>
          h2. This is the title view
        </Title>
        <Title variant="h3" uppercase>
          h3. This is the title view
        </Title>
        <Title variant="h4" uppercase>
          h4. This is the title view
        </Title>
        <Title variant="h5" uppercase>
          h5. This is the title view
        </Title>
        <Title variant="h6" uppercase>
          h6. This is the title view
        </Title>
      </Display>
    </>
  )
}
