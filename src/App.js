import { Header } from './Components/Header';
import { Routing } from './Routes';

/**
 * Header is rendered on all pages
 * Routing specifies the content within each page
 */

export const App = () => {
  return (
    <>
      <Header />
      <Routing />
    </>
  );
};
