import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { decrement, increment } from './counterSlice';

function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="container mx-auto flex h-[100vh] flex-col items-center justify-center bg-red-50">
      <h1>{count}</h1>
      <div className="flex gap-2">
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={() => dispatch(increment())}
          type="submit"
        >
          +
        </button>
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={() => dispatch(decrement())}
          type="submit"
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
