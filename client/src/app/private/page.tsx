// client/src/app/private/page.tsx

'use client';

import { useState } from 'react';

export default function PrivatePage() {
  const [state, setState] = useState({
    isLoading: false,
    response: undefined,
    error: undefined,
  });

  const callApi = async () => {
    setState((previous) => ({ ...previous, isLoading: true }));

    try {
      const response = await fetch('/api/private', {});
      const data = await response.json();

      setState((previous) => ({
        ...previous,
        response: data,
        error: undefined,
      }));
    } catch (error) {
      setState((previous) => ({
        ...previous,
        response: undefined,
        error,
      }));
    } finally {
      setState((previous) => ({ ...previous, isLoading: false }));
    }
  };

  const { isLoading, response, error } = state;

  if (!isLoading) {
    return (
      <>
        <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Private Page
        </h1>

        <button
          onClick={callApi}
          className="block rounded hover:opacity-70 text-white bg-pink-800/50 px-2 py-1 mt-10"
        >
          Call API
        </button>

        <div className="mt-20">
          {response && <div>{JSON.stringify(response)}</div>}
        </div>
      </>
    );
  }
}
