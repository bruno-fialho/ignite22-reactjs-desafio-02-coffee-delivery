import { X } from 'phosphor-react'
import * as ToastPrimitive from '@radix-ui/react-toast'

import {
  ToastClose,
  ToastContent,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'

interface ToastProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  message: string
  type: 'error' | 'notification'
}

export function Toast({ open, onOpenChange, message, type }: ToastProps) {
  return (
    <ToastPrimitive.Provider duration={5000}>
      <ToastRoot open={open} onOpenChange={onOpenChange}>
        <ToastContent>
          <ToastTitle>
            <h3>{type === 'error' ? 'Erro' : 'Sucesso'}</h3>
          </ToastTitle>
          <ToastPrimitive.Description>{message}</ToastPrimitive.Description>
          <ToastClose aria-label="Close">
            <X />
          </ToastClose>
        </ToastContent>
      </ToastRoot>

      <ToastViewport />
    </ToastPrimitive.Provider>
  )
}
