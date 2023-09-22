## Context

React context is a way to pass state or global variables around your application without prop drilling.

## When to Use?

Context is most commonly used for global state. This is in contrast to local state, which is only used in a single place within the application. That said, there's a spectrum between local state and global state; it isn't binary! Don't reach for context right away. See if you can better organize your components to avoid prop drilling

## How to use it?

1. Create a new context with `React.createContext`.
2. Use the `Provider` component, from that context, to wrap around the application. Pass it a bundle of values that you need in other parts of the app.
3. Wrap setState or other functions in useCallback and then their values as an object in useMemo before they are passed to a context provider.
4. Pluck the data you need from context, with the `useContext` hook.

### Pros

- Avoids prop drilling (passing multiple props through components that don't need it) for deeply nested components
- Less places to change code if a drilled prop no longer is needed by a component
- Can replace redux or other state management for simplier apps

### Cons

- More code to write than just passing props
- Triggers a re-render when any property on context updates which could lead to performance issues if a larger application or passing larger objects

### Provider Components

Best practice dictates that concerns should be separated, and only one item should be created within each context. To enhance code readability, it's best to create a Provider component where all functionalities related to a particular piece of state are placed in one context, which can then be imported into the original file.

## Overriding Context

You can override the context for a part of the tree by wrapping that part in a provider with a different value.

```
<ThemeContext.Provider value="dark">
  ...
  <ThemeContext.Provider value="light">
    <Footer />
  </ThemeContext.Provider>
  ...
</ThemeContext.Provider>
```

You can nest and override providers as many times as you need.

### Rules of Thumb

- If you find you keep having to pass a prop through a component, you should probably use context for it.
- Create separate contexts in different files within a context directory. You can then import/export these components where they are needed throughout the application.

### Any Gotchas?

- useContext() always looks for the closest provider above the component that calls it. It searches upwards and does not consider providers in the component from which you’re calling useContext()

- When passing an object as the value on a Context Provider, always memoize it with the useMemo() hook so we are only regenerating that object when one of the state values changes in the object. Same goes for functions, but instead useCallback is required. This will take care of a performance issue that might creep up with regenerating objects and will avoid rerenders of underlying context when their specific value does not change. A component that contains the object can still rerender, but again, if the context value does not change then the context will not rerender. Note: you cannot memoize the actual Context Provider that receives a React element as props. It is better to memoize the value that we pass through.

```
import { useCallback, useMemo } from 'react';

function MyApp() {
  const [currentUser, setCurrentUser] = useState(null);

  const login = useCallback((response) => {
    storeCredentials(response.credentials);
    setCurrentUser(response.user);
  }, []);

  const contextValue = useMemo(() => ({
    currentUser,
    login
  }), [currentUser, login]);

  return (
    <AuthContext.Provider value={contextValue}>
      <Page />
    </AuthContext.Provider>
  );
}
```
