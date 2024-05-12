import { Route, Link, Routes, BrowserRouter } from 'react-router-dom';
//@ts-expect-error kkk
import { ApmRoutes, withTransaction } from '@elastic/apm-rum-react';
import ComponenElastic from './ComponenElastic';
import HomeElastic from './HomeElastic';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <PageWithNavbar>
              <HomeElastic />
            </PageWithNavbar>
          }
        />
        <Route
          path="/elastic/component"
          element={
            <PageWithNavbar>
              <ComponenElastic />
            </PageWithNavbar>
          }
        />
      </Routes>
    </BrowserRouter>
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
