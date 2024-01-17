// Endpoint for querying the fibonacci number

import { Request, Response } from 'express';
import fibonacci from "./fib";

export default (req: Request, res: Response) => {
  let result: string;
  const num: string | undefined = req?.params?.num;
  const parsedNum: number = parseInt(num);

  if (!isNaN(parsedNum)) {
    const fibN: number = fibonacci(parsedNum);

    if (fibN >= 0) {
      result = `fibonacci(${num}) is ${fibN}`;
    } else {
      result = `fibonacci(${num}) is undefined`;
    }
  } else {
    result = `Invalid input: ${num}`;
  }

  res?.send(result);
};