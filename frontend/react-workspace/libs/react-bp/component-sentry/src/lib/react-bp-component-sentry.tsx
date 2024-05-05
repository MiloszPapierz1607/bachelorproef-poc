import { useEffect, useState } from 'react';
import { Button } from '@react-bp/shared/ui-buttons';
import { ClipLoader } from 'react-spinners';

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
          <Button variant="blue">Send custom log</Button>
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
