## Directory Structure

Use the following structure for most React apps.

## Folder Structure - React App

- /src
  - /api
    - contains code that allows you to interact with external API resources.
  - /assets
    - All the static assets should reside here and can include but not limited to images, logos, vector icons, fonts, etc. Thus, all assets will be accessible and imported from ‘/assets’
    - Each asset should be registered and exported from the /index.js
  - /components
    - Spectrum of components - will have reusable to base components to very specific application components.
    - Specific components go into their own directory
    - All the components should be registered and exported from /index.js for a single access point to make importing easier
      ```jsx
      import { TextField } from './TextField/TextField';
      import { Select } from './Select/Select';
      import { Radio } from './Radio/Radio';

      export { TextField, Select, Radio };

      OR;

      /*
      	Each component can also have its own index.js
        Forward all exports.
        This pattern is explained further below.
      */
      export * from './Widget';
      export { default } from './Widget';
      ```
      ```jsx
      import { TextField, Select, Radio } from 'components';
      ```
      - Might need a webpack, tsconfig, or jsconfig file to specify the absolute path shortcut. Check it out here https://blog.openreplay.com/react-architecture-patterns-for-your-projects/
      - jsconfig.json example
      ```jsx
      {
        "compilerOptions": {
          "baseUrl": "src"
        },
        "include": ["src"]
      }
      ```
      - Why do this?
        1. Cleaner appearance.
        2. Developers don't need to know inner folder structure to use components.
        3. You can define which components to expose. Only export items in index files for external use; others are internal/private.
        4. You can move, rename, or refactor files inside a feature folder as long as the public API remains unchanged.
    - Create named-exports instead of default exports for all the components. This will avoid any naming conflicts.
  - /context
    - specific context components
  - /hooks
    - reusable React Hooks that can be used by more than one component. So instead of coupling a custom hook tightly to a component, you can put the implementation of it in a dedicated folder which can be used by all React components
  - /pages
    - contains all your React application's web pages.
  - /utils
    - contains app-wide constants and helper methods
- Notes
  - sources: https://www.joshwcomeau.com/react/file-structure/,
