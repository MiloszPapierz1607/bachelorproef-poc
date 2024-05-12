import { AppInsightsContext } from '@microsoft/applicationinsights-react-js';
import { Route, Routes, Link } from 'react-router-dom';
import { reactPlugin } from './ApplicationInsightsService';
import ComponentAzure from './ComponentAzure';
import HomeAzure from './HomeAzure';

export function App() {
  return (
    <AppInsightsContext.Provider value={reactPlugin}>
      <Routes>
        <Route
          index
          element={
            <PageWithNavbar>
              <HomeAzure />
            </PageWithNavbar>
          }
        />
        <Route
          path="/azure/component"
          element={
            <PageWithNavbar>
              <ComponentAzure />
            </PageWithNavbar>
          }
        />
      </Routes>
    </AppInsightsContext.Provider>
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
        <Link to="/azure/component" className="font-bold text-lg">
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
