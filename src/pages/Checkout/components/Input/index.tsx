import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react'
import { CustomInput } from './styles'

interface InputBaseProps extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputBaseProps> = (
  { isError = false, ...rest },
  ref,
) => {
  return <CustomInput ref={ref} isError={isError} {...rest} />
}

export const Input = forwardRef(InputBase)
