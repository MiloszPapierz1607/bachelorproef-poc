import { Button } from '@react-bp/shared/ui-buttons';
import { useEffect } from 'react';
import apm from './rum';

function ComponentElastic() {
  useEffect(() => {
    const tr = apm.getCurrentTransaction();

    if (tr && tr.type === 'route-change') {
      const span = tr.startSpan('route change span');

      setTimeout(() => {
        span?.end();
        tr.end();
      }, 1);
    }
  }, []);

  return (
    <div className="w-full h-screen gap-x-3 flex justify-center items-center">
      <Button
        variant="blue"
        onClick={(e) => {
          const transaction = apm.startTransaction(
            'button click event',
            'custom'
          );

          for (let i = 0; i < 100; i++) {
            console.log(i);
          }

          transaction?.end();
        }}
      >
        Send custom log
      </Button>
      <Button
        variant="red"
        onClick={(e) => {
          try {
            throw Error();
          } catch (error) {
            apm.captureError(error as Error);
          }
        }}
      >
        Throw Error
      </Button>
    </div>
  );
}

export default ComponentElastic;
