import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin } from '@microsoft/applicationinsights-react-js';

const reactPlugin = new ReactPlugin();
const ai = new ApplicationInsights({
  config: {
    connectionString: 'instrumentationKey=f93d5196-2149-4456-a950-674a21dc5f55',
    extensions: [reactPlugin],
    enableAutoRouteTracking: true,
    disableAjaxTracking: false,
    autoTrackPageVisitTime: true,
    enableCorsCorrelation: true,
    enableRequestHeaderTracking: true,
    enableResponseHeaderTracking: true,
    enableDebug: true,
  },
});
ai.loadAppInsights();

export const appInsights = ai.appInsights;
export { reactPlugin };
