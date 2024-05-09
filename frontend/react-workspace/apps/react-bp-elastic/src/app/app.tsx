import { Route, Link, BrowserRouter, Routes } from 'react-router-dom';
//@ts-expect-error kkk
import { ApmRoutes, withTransaction } from '@elastic/apm-rum-react';
import ComponenElastic from './ComponenElastic';
import HomeElastic from './HomeElastic';
import { Button } from '@react-bp/shared/ui-buttons';
import apm from './rum';

export function App() {
  return (
    <div className="w-full h-screen gap-x-3 flex justify-center items-center">
      <Button
        variant="blue"
        onClick={(e) => {
          const transaction = apm.getCurrentTransaction();

          transaction?.startSpan('button click span');

          transaction?.end();
        }}
      >
        Send custom log
      </Button>
      <Button
        variant="red"
        onClick={(e) => {
          throw Error();
        }}
      >
        Throw Error
      </Button>
    </div>
  );
}

export default App;

const Navbar = () => {
  return (
    <div className="bg-stone-400 w-full h-[40px]">
      <div className="flex h-full gap-x-8 justify-center items-center">
        <Link to="/" className="font-bold text-lg">
          Home
        </Link>
        <Link to="/elastic/component" className="font-bold text-lg">
          Component
        </Link>
      </div>
    </div>
  );
};

const PageWithNavbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="h-screen">{children}</div>
    </>
  );
};
