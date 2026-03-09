# use-state-safely

A React hook that prevents state updates on unmounted components, avoiding the "Can't perform a React state update on an unmounted component" warning.

## Installation

```bash
npm install @y0n1/use-state-safely
```

or

```bash
yarn add @y0n1/use-state-safely
```

## Usage

Replace `React.useState` with `useStateSafely` in your components:

```tsx
import React from 'react';
import useStateSafely from '@y0n1/use-state-safely';

function MyComponent() {
  const [count, setCount] = useStateSafely(0);

  React.useEffect(() => {
    // This will safely handle async operations
    fetchData().then(data => {
      setCount(data.length);
    });
  }, []);

  return <div>Count: {count}</div>;
}
```

## API

### `useStateSafely<S>(initialState: S): [S, Dispatch<SetStateAction<S>>]`

Returns a stateful value and a function to update it, just like `React.useState`, but prevents updates after the component unmounts.

- **Parameters:**
  - `initialState: S` - The initial state value
- **Returns:** A tuple containing the current state and a setter function that only updates if the component is still mounted

## Why use this?

In React, setting state after a component has unmounted can cause memory leaks and console warnings. This commonly happens with async operations like API calls that complete after the component is no longer in the DOM.

`useStateSafely` ensures that state updates are only applied when the component is still mounted, preventing these issues.

## Example

See the `/example` directory for a live demo.

## License

MIT
