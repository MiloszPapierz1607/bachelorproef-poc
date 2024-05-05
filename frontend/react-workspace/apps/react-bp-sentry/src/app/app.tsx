import {
  Route,
  Routes,
  Link,
  useNavigate,
  BrowserRouter,
} from 'react-router-dom';
import { ComponentSentry } from '@react-bp/component-sentry';
import { HomeSentry } from '@react-bp/home-sentry';
import { Button } from '@react-bp/shared/ui-buttons';
import * as Sentry from '@sentry/react';

const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes);

export function App() {
  return (
    <BrowserRouter>
      <SentryRoutes>
        <Route index element={<Root />} />
        <Route
          path="/sentry"
          element={
            <PageWithNavbar>
              <SentryApp />
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
        <Link to="/sentry" className="font-bold text-lg">
          Home
        </Link>
        <Link to="/sentry/component" className="font-bold text-lg">
          Component
        </Link>
      </div>
    </div>
  );
};

const Root = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen">
      <div className="flex justify-center items-center h-full gap-x-24">
        <Button
          variant="blue"
          onClick={(e) => {
            navigate('/sentry');
          }}
        >
          Sentry
        </Button>
        <Button variant="blue">Elastic APM RUM</Button>
        <Button variant="blue">Azure Application Insights</Button>
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

const SentryApp = () => {
  return <HomeSentry />;
};
