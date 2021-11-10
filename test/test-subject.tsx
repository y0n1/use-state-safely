import * as React from 'react';
import useStateSafely from '../src';

type TestSubjectProps = {
  /** When set to false, will use React.useState. */
  safe?: boolean;
};

export const UPDATE_STATE_DELAY = 1000;

export const TestSubject = ({ safe = false }: TestSubjectProps) => {
  const useStateImpl = safe ? useStateSafely : React.useState;
  const [state, setState] = useStateImpl(false);

  React.useEffect(() => {
    window.setTimeout(() => {
      setState(true);
    }, UPDATE_STATE_DELAY);
  }, [setState]);

  return <h2>{state}</h2>;
};
