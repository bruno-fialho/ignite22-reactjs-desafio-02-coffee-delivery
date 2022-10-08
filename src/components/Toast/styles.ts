import styled from 'styled-components'
import * as ToastPrimitive from '@radix-ui/react-toast'

export const ToastViewport = styled(ToastPrimitive.Viewport)`
  position: absolute;
  top: 1rem;
  left: calc(50% - 12.5rem);
`

export const ToastRoot = styled(ToastPrimitive.Root)`
  width: 25rem;
  background-color: ${(props) => props.theme['yellow-light']};
  box-shadow: 0px 6px 24px ${(props) => props.theme['base-label']};
  border-radius: 6px;
  padding: 1rem;
  list-style: none;
  position: relative;
  display: flex;
  flex-direction: row;
`

export const ToastTitle = styled(ToastPrimitive.Title)`
  color: ${(props) => props.theme['yellow-dark']};
  font-size: 1.25rem;
  font-weight: 800;
`

export const ToastDescription = styled(ToastPrimitive.Description)`
  color: ${(props) => props.theme['base-text']};
`

export const ToastContent = styled.div`
  flex: 1;
`

export const ToastClose = styled(ToastPrimitive.Close)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: transparent;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  svg {
    width: 1rem;
    height: 1rem;
  }

  &:hover {
    opacity: 0.7;
  }
`
