import { Display } from '@/components/Display'
import { Textarea } from '@/ui/Textarea'

export const TextareaView = () => {
  return (
    <>
      <h1>Textarea</h1>
      <Display>
        <h2>Colors</h2>
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
