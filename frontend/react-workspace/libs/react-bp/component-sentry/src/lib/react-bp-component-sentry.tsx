import { useEffect, useState } from 'react';
import { Button } from '@react-bp/shared/ui-buttons';
import { ClipLoader } from 'react-spinners';
import * as Sentry from '@sentry/react';

export function ComponentSentry() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShouldRender(true);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="w-full h-screen gap-x-3 flex justify-center items-center">
      {shouldRender ? (
        <>
          <Button
            variant="blue"
            onClick={() => {
              /*Sentry.getCurrentScope().setTransactionName(
                'Button click transaction'
              );

              Sentry.captureMessage('This is a test log', 'log');*/
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
        </>
      ) : (
        <ClipLoader loading={!shouldRender} size={150} />
      )}
    </div>
  );
}

export default ComponentSentry;
