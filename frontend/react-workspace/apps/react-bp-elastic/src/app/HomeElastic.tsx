import { Button } from '@react-bp/shared/ui-buttons';
import axios from 'axios';
import { useState } from 'react';

export function HomeElastic() {
  const [countData, setCountDate] = useState(0);
  const [server400error, setServer400error] = useState('');
  const [server500error, setServer500error] = useState('');

  const fetch200 = async () => {
    const response = await axios.get<number>(
      'http://localhost:8080/api/counts',
      {
        withCredentials: true,
      }
    );

    setCountDate(response.data);
  };

  const fetch200Delay = async () => {
    const response = await axios.get<number>(
      'http://localhost:8080/api/counts/delay',
      {
        withCredentials: true,
      }
    );
    setCountDate(response.data);
  };

  const fetch400 = async () => {
    try {
      await axios.get<number>('http://localhost:8080/api/counts/clienterror', {
        withCredentials: true,
      });
    } catch (e) {
      const error = e as any; // Explicitly cast 'e' to 'any'
      setServer400error(error.response?.data);
    }
  };

  const fetch500 = async () => {
    try {
      await axios.get<number>('http://localhost:8080/api/counts/servererror');
    } catch (e) {
      const error = e as any; // Explicitly cast 'e' to 'any'
      setServer500error(error.response?.data);
    }
  };

  return (
    <div className="h-full grid grid-cols-4">
      <div className="flex flex-col gap-y-3 justify-center items-center">
        <Button
          variant="blue"
          onClick={(e) => {
            fetch200();
          }}
        >
          HTTP 200
        </Button>
        <p>{countData}</p>
      </div>
      <div className="flex flex-col gap-y-3 justify-center items-center">
        <Button
          variant="blue"
          onClick={(e) => {
            fetch200Delay();
          }}
        >
          HTTP 200
        </Button>
        <p>{countData}</p>
      </div>
      <div className="flex flex-col gap-y-3 justify-center items-center">
        <Button
          variant="blue"
          onClick={(e) => {
            fetch400();
          }}
        >
          HTTP 400
        </Button>
        <p>{server400error}</p>
      </div>
      <div className="flex flex-col gap-y-3 justify-center items-center">
        <Button
          onClick={(e) => {
            fetch500();
          }}
          variant="blue"
        >
          HTTP 500
        </Button>
        <p>{server500error}</p>
      </div>
    </div>
  );
}

export default HomeElastic;
