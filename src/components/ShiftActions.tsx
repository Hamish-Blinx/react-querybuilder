import * as React from 'react';
import { useShiftActions } from '../hooks';
import type { ShiftActionsProps } from '../types';

/**
 * Default "shift up"/"shift down" buttons used by {@link QueryBuilder}.
 */
export const ShiftActions = ({
  path,
  disabled,
  className,
  labels,
  titles,
  testID,
  lastInGroup,
  schema: { combinators, dispatchQuery, getQuery },
}: ShiftActionsProps) => {
  const { shiftUp, shiftUpDisabled, shiftDown, shiftDownDisabled } = useShiftActions({
    combinators,
    disabled,
    dispatchQuery,
    getQuery,
    lastInGroup,
    path,
  });

  return (
    <div data-testid={testID} className={className}>
      <button disabled={shiftUpDisabled} onClick={shiftUp} title={titles?.shiftUp}>
        {labels?.shiftUp}
      </button>
      <button disabled={shiftDownDisabled} onClick={shiftDown} title={titles?.shiftDown}>
        {labels?.shiftDown}
      </button>
    </div>
  );
};

ShiftActions.displayName = 'ShiftActions';
