export default function Form() {
  return (
    <div className="container">
      <h1>Form</h1>

      {/*
       * action: The action attribute defines where the data gets sent.
       * Its value must be a valid relative or absolute URL.
       * If this attribute isn't provided, the data will be sent to the URL
       * of the page containing the form — the current page.
       * method: The HTTP method to submit the form with. (case insensitive)
       */}
      <form action="/api/submit" method="post">
        <label htmlFor="first">First Name</label>
        <input type="text" id="first" name="first" required />
        <label htmlFor="last">Last Name</label>
        <input type="text" id="last" name="last" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
