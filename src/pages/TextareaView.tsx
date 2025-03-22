import { Display } from '@/components/Display'
import { Textarea } from '@/ui/Textarea'
import { Heading } from '@/ui/Heading'

export const TextareaView = () => {
  return (
    <>
      <Heading uppercase>Textarea</Heading>
      <Display>
        <Heading variant="h2">Colors</Heading>
        <Textarea placeholder="Textarea base color" />
        <Textarea color="primary" placeholder="Textarea primary color" />
        <Textarea color="secondary" placeholder="Textarea secondary color" />
        <Textarea color="accent" placeholder="Textarea accent color" />
        <Textarea color="neutral" placeholder="Textarea neutral color" />
        <Textarea color="info" placeholder="Textarea info color" />
        <Textarea color="success" placeholder="Textarea success color" />
        <Textarea color="warning" placeholder="Textarea warning color" />
        <Textarea color="error" placeholder="Textarea error color" />
      </Display>
    </>
  )
}
