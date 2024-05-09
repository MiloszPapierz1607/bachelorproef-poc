import { Button } from '@react-bp/shared/ui-buttons';
import apm from './rum';

function ComponentElastic() {
  return (
    <div className="w-full h-screen gap-x-3 flex justify-center items-center">
      <Button
        variant="blue"
        onClick={(e) => {
          const transaction = apm.startTransaction();

          transaction?.startSpan('button click span');

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
          } catch (err) {
            apm.captureError('error message');
          }
        }}
      >
        Throw Error
      </Button>
    </div>
  );
}

export default ComponentElastic;
