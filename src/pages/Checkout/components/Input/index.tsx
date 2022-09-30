import { InputHTMLAttributes } from 'react'
import { CustomInput } from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: Props) {
  return <CustomInput {...rest} />
}
