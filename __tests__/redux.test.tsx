import counterReducer, { increment, decrement } from '../redux/counterSlice';

describe('counterSlice', () => {
  const initialState = { value: 5 };
  it('should return the initial state', () => {
    // Test the initial state
    expect(counterReducer(undefined, { type: 'DEFAULT' })).toEqual(
      initialState
    );
  });

  it('should handle increment action', () => {
    // Test increment action
    const nextState = counterReducer(initialState, increment());
    expect(nextState.value).toEqual(6);
  });

  it('should handle decrement action', () => {
    // Test decrement action
    const nextState = counterReducer(initialState, decrement());
    expect(nextState.value).toEqual(4);
  });
});
