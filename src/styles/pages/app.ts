import { styled } from "..";
import * as Dialog from '@radix-ui/react-dialog';


export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  button: {
    backgroundColor: '$gray800',
    padding: '12px',
    borderRadius: '6px',
    width: '3.5rem',
    height: '3.5rem',
    outline: 'none',
    border: 'none',
    cursor: 'pointer'
  },
})

export const DialogContent = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  width: 480,
  height: '100vh',
  background: '$gray800',
  padding: 48,
});

export const DialogClose = styled(Dialog.Close, {
  position: 'absolute',
  top: 28,
  right: 28,
  cursor: 'pointer',
  color: '$gray300'
});
