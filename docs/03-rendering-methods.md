# Rendering methods

Perhaps the main feature of Next.js is its ability to switch between methods of pre-rendering pages based on the APIs used. This means some pages can be fully rendered ahead of time at build-time, or rendered on the server when the page is requested.

## Explanations

Before going into how Next.js allows different rendering methods, let's go into what these different methods are and explain their differences.

### Client-side rendering (CSR)

By default, React renders the UI entirely on the browser, via a method called Client-side rendering. When creating a React application, all logic around how and when to render pieces of the UI are contained within the JavaScript (thus enabling the "Single Page App" name, or "SPA"). The HTML sent by the server contains barebones HTML, usually including a location render the JavaScript.

Then, when a client (i.e. a browser) requests a page:

1. The (minimal) HTML is downloaded, containing any links to resources like CSS or JavaScript
2. The page downloads these resources and starts parsing them
3. Once the JavaScript is fully parsed, the UI is displayed to the user

During steps 1 and 2 here, the browser does not display anything to the user,and usually takes longer to finish if the JavaScript is a significant size. However, as the JavaScript typically contains the content for multiple pages, subsequent page loads are very fast.

![Illustration of Client-side rendering](https://miro.medium.com/max/1400/1*9upv_6-qmVIoBdt4JYy_sg.png)
_An illustration of Client-side rendering by [Yudhajit Adhikary](https://yudhajitadhikary.medium.com/client-side-rendering-vs-server-side-rendering-in-react-js-next-js-b74b909c7c51)._

### Server-side rendering (SSR)

When SSR is enabled, the page

### Static site generation (SSG)

### Incremental static regeneration (ISR)

## Benefits and drawbacks

Having this flexibility for choosing a rendering method
