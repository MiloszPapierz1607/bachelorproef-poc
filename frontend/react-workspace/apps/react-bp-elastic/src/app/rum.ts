import { init as initApm } from '@elastic/apm-rum';

const apm = initApm({
  serviceName: 'my-service-name',
  serverUrl:
    'https://ab3fc474e330459e8bf95ff4c651c5c9.apm.europe-west4.gcp.elastic-cloud.com/',
  environment: 'my-environment',
  distributedTracingOrigins: ['http://localhost:4200', 'http://localhost:8080'],
  logLevel: 'debug',
});

export default apm;
