import * as React from 'react';

export default function useStateSafely<S>(
  initialState: S,
): [S, React.Dispatch<React.SetStateAction<S>>] {
  const mountedRef = React.useRef(false);
  React.useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const [state, setState] = React.useState(initialState);
  const setStateSafely: React.Dispatch<React.SetStateAction<S>> = React.useCallback((arg) => {
    if (mountedRef.current) {
      setState(arg);
    }
  }, []);

  return [state, setStateSafely];
}
