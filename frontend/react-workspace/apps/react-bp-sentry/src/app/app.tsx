import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import HomeSentry from './HomeSentry';
import * as Sentry from '@sentry/react';
import ComponentSentry from './ComponentSentry';

const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes);

export function App() {
  return (
    <BrowserRouter>
      <SentryRoutes>
        <Route
          index
          element={
            <PageWithNavbar>
              <HomeSentry />
            </PageWithNavbar>
          }
        />
        <Route
          path="/sentry/component"
          element={
            <PageWithNavbar>
              <ComponentSentry />
            </PageWithNavbar>
          }
        />
      </SentryRoutes>
    </BrowserRouter>
  );
}

export default Sentry.withProfiler(App);

const Navbar = () => {
  return (
    <div className="bg-stone-400 w-full h-[40px]">
      <div className="flex h-full gap-x-8 justify-center items-center">
        <Link to="/" className="font-bold text-lg">
          Home
        </Link>
        <Link to="/sentry/component" className="font-bold text-lg">
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
