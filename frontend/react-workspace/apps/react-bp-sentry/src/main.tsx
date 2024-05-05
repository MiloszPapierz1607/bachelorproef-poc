import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {
  useLocation,
  useNavigationType,
  createRoutesFromChildren,
  matchRoutes,
} from 'react-router-dom';

import App from './app/app';

import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: 'https://4ac9f5ea906209cca87c851637bd6696@o4507193389023232.ingest.de.sentry.io/4507203937501264',
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),

    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
      useLocation,
      useNavigationType,
      createRoutesFromChildren,
      matchRoutes,
    }),
  ],
  debug: true,
  sendDefaultPii: true,
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ['localhost', /^http:\/\/localhost:8080\/api/],
  // Session Replay
  replaysSessionSampleRate: 1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
