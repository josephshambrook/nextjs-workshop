# Developer experience

If you have worked in React at all, you may have observed that it is very unopinionated in how your project is set up. It makes a handful of suggestions about your setup in terms of using JSX and which testing framework to use, but otherwise leaves everything else to the developer to decide and then include. This may explain how the React ecosystem has become so large, because there is a need for plugins to fill these gaps.

Next.js includes a few preconfigured tools to help manage some of these needs. Things like:

- Full, comprehensive support for TypeScript
- ESLint rules provided as default
- Fast Refresh included, providing quick refreshes of content without refreshing state or the whole page, and giving explanations of syntax errors
- Support as far back as IE11, by loading polyfills as certain features are used
- Support for Dynamic Imports
- Support for folder aliases (used in this project)

These inclusions make it a little easier to get started on the project, as some of the more opinionated decisions have been made.
