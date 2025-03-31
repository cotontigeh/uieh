import { Display } from '@/docs/components/Display'
import { Heading } from '@/ui/Heading'
import { Select } from '@/ui/select'

export default function SelectPage() {
  return (
    <>
      <Heading uppercase>Select</Heading>

      <Display>
        <Select name="status" aria-label="Project status">
          <option value="active">Active</option>
          <option value="paused">Paused</option>
          <option value="delayed">Delayed</option>
          <option value="canceled">Canceled</option>
        </Select>
        <Select color="primary" name="status" aria-label="Project status">
          <option value="active">Active</option>
          <option value="paused">Paused</option>
          <option value="delayed">Delayed</option>
          <option value="canceled">Canceled</option>
        </Select>
        <Select color="secondary" name="status" aria-label="Project status">
          <option value="active">Active</option>
          <option value="paused">Paused</option>
          <option value="delayed">Delayed</option>
          <option value="canceled">Canceled</option>
        </Select>
        <Select color="accent" name="status" aria-label="Project status">
          <option value="active">Active</option>
          <option value="paused">Paused</option>
          <option value="delayed">Delayed</option>
          <option value="canceled">Canceled</option>
        </Select>
        <Select color="neutral" name="status" aria-label="Project status">
          <option value="active">Active</option>
          <option value="paused">Paused</option>
          <option value="delayed">Delayed</option>
          <option value="canceled">Canceled</option>
        </Select>
        <Select color="info" name="status" aria-label="Project status">
          <option value="active">Active</option>
          <option value="paused">Paused</option>
          <option value="delayed">Delayed</option>
          <option value="canceled">Canceled</option>
        </Select>
        <Select color="success" name="status" aria-label="Project status">
          <option value="active">Active</option>
          <option value="paused">Paused</option>
          <option value="delayed">Delayed</option>
          <option value="canceled">Canceled</option>
        </Select>
        <Select color="warning" name="status" aria-label="Project status">
          <option value="active">Active</option>
          <option value="paused">Paused</option>
          <option value="delayed">Delayed</option>
          <option value="canceled">Canceled</option>
        </Select>
        <Select color="error" name="status" aria-label="Project status">
          <option value="active">Active</option>
          <option value="paused">Paused</option>
          <option value="delayed">Delayed</option>
          <option value="canceled">Canceled</option>
        </Select>
      </Display>
    </>
  )
}
