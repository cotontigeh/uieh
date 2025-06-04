import { Display } from '@/docs/components/Display'
import { Card, CardContent, CardFooter, CardHeader } from '@/ui/Card'
import { CardFooterButton } from '@/ui/Card/CardFooterButton'
import { Heading } from '@/ui/Heading'

export default function CardPage() {
  return (
    <>
      <Heading uppercase>Card</Heading>

      <Display>
        <Card>
          <CardHeader>
            <Heading variant="h3" uppercase>
              Title
            </Heading>
          </CardHeader>
          <CardContent variant="line">
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
          </CardContent>
          <CardFooter>Anything lorem ipsum footer content</CardFooter>
        </Card>
      </Display>

      <Display>
        <Card>
          <CardHeader>
            <Heading variant="h3" uppercase>
              Title
            </Heading>
          </CardHeader>
          <CardContent variant="line">
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
          </CardContent>
          <CardFooter variant="button">Button</CardFooter>
        </Card>
      </Display>

      <Display>
        <Card>
          <CardHeader>
            <Heading variant="h3" uppercase>
              Title
            </Heading>
          </CardHeader>
          <CardContent variant="line">
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
          </CardContent>
          <CardFooter variant="buttons">
            <CardFooterButton>Button 1</CardFooterButton>
            <CardFooterButton color="success">Button 2</CardFooterButton>
          </CardFooter>
        </Card>
      </Display>
    </>
  )
}
