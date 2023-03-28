import { useState, useEffect } from 'react';
import axios from 'axios';

function useCounter() {
  const [counter, setCounter] = useState(null);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://www.random.org/integers/',
      params: {
        num: 1,
        min: -50,
        max: 50,
        col: 1,
        base: 10,
        format: 'plain',
        rnd: 'new',
      },
    })
      .then((response) => setCounter(response.data))
      .catch((error) => console.log(error));
  }, []);

  const incCounter = () => {
    if (counter < 50) {
      setCounter((counter) => counter + 1);
    }
  };

  const decCounter = () => {
    if (counter > -50) {
      setCounter((counter) => counter - 1);
    }
  };

  const rndCounter = () => {
    setCounter(+(Math.random() * (50 - -50) + -50).toFixed(0));
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return { counter, incCounter, decCounter, rndCounter, resetCounter };
}

export { useCounter };
