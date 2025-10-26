import type { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  footerElement?: ReactNode;
  navElement?: ReactNode;
}

export const Page: FC<Props> = ({ children, footerElement, navElement }) => {
  return (
    <main className="">
      <nav> {navElement} </nav>
      <section>{children}</section>
      <footer> {footerElement}</footer>
    </main>
  );
};
