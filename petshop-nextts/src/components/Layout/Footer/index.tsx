import { Fragment } from "react";


export function Footer() {
  return (
    <Fragment>
      <footer className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
        <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
          <p>© 2023 Copyright:</p>
          <a className="text-neutral-800 dark:text-neutral-400" href="https://tailwind-elements.com/">PetShop</a>
        </div>
      </footer>
    </Fragment>
  );
}