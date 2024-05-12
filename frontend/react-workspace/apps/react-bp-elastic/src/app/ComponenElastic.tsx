import { apm } from '@elastic/apm-rum';
import { Button } from '@react-bp/shared/ui-buttons';

function ComponentElastic() {
  return (
    <div className="w-full h-screen gap-x-3 flex justify-center items-center">
      <Button
        variant="blue"
        onClick={(e) => {
          const transaction = apm.startTransaction(
            'my test transaction',
            'custom',
            {
              managed: true,
            }
          );

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
