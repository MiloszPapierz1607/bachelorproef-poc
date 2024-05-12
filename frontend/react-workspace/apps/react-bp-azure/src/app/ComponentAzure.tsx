import { Button } from '@react-bp/shared/ui-buttons';
import { useAppInsightsContext } from '@microsoft/applicationinsights-react-js';

function ComponentAzure() {
  const appInsights = useAppInsightsContext();
  return (
    <div className="w-full h-screen gap-x-3 flex justify-center items-center">
      <Button
        variant="blue"
        onClick={(e) => {
          appInsights.trackTrace(
            {
              message: 'This is a test trace',
              severityLevel: 1,
            },
            {
              customPropertyKey: 'customPropertyValue',
            }
          );
        }}
      >
        Send custom log
      </Button>
      <Button
        variant="red"
        onClick={(e) => {
          throw new Error();
        }}
      >
        Throw Error
      </Button>
    </div>
  );
}

export default ComponentAzure;
