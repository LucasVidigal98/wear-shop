import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import logoImg from "../assets/logo.svg"
import { Container, DialogClose, DialogContent, Header } from "../styles/pages/app"

import Image from "next/future/image"
import { Bag, X } from "@phosphor-icons/react"
import * as Dialog from '@radix-ui/react-dialog';


globalStyles()

function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button>
              <Bag size={32} color="#8D8D99" />
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="DialogOverlay" />

            <DialogContent className="DialogContent">

              <Dialog.Title className="DialogTitle">Sacola de compras</Dialog.Title>

              <DialogClose asChild>
                <X size={24} />
              </DialogClose>

            </DialogContent>
          </Dialog.Portal>
        </Dialog.Root>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}

export default App
