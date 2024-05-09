import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  useLocation,
  useNavigationType,
  createRoutesFromChildren,
  matchRoutes,
} from 'react-router-dom';

import App from './app/app';

import * as Sentry from '@sentry/react';
import reportWebVitals from './app/reportWebVitals';

Sentry.init({
  dsn: 'https://4ac9f5ea906209cca87c851637bd6696@o4507193389023232.ingest.de.sentry.io/4507203937501264',
  integrations: [
    Sentry.replayIntegration(),
    Sentry.metrics.metricsAggregatorIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
      useLocation,
      useNavigationType,
      createRoutesFromChildren,
      matchRoutes,
    }),
  ],
  release: '1.0.0',
  sampleRate: 1.0,
  debug: true,
  sendDefaultPii: true,
  tracesSampleRate: 1.0,
  tracePropagationTargets: ['localhost', /^http:\/\/localhost:8080\/api/],
  replaysSessionSampleRate: 1,
  replaysOnErrorSampleRate: 1.0,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals();
