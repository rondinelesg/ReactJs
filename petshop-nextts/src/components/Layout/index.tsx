import { Footer } from "./Footer"

export const metadata = {
  title: 'PetShop',
  description: 'A petshop',
}
type children = React.ReactNode;
export default function Layout({ children }: { children: children }) {
  return (
    <html lang="pt-BR">
      <head>
      </head>
      <body>
        {children}
      </body>
      <footer>
      </footer>
    </html>
  )
}
