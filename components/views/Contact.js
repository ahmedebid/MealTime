import html from "html-literal";

export default () => html`
  <main>
    <section id="contact">
      <div class="form-header">
        <h2>Stay in Touch.</h2>
      </div>
      <form class="form-wrapper" action="https://formspree.io/f/xwkangwe" method="POST">
        <div class="name-form">
          <label class="label" for="name">Name</label>
          <input class="input" type="text" name="name" id="name" required />
        </div>
        <div class="email-form">
          <label class="label" for="email">Email</label>
          <input class="input" type="email" name="_replyto" id="email" required />
        </div>
        <div class="message-form">
          <label class="label" for="message">Message</label>
          <textarea name="message" id="message" cols="55" rows="10"></textarea>
        </div>

        <button class="form-wrapper button" type="submit">Send</button>
      </form>
    </section>

    <section>
      <svg
        class="circle circle-1"
        width="243"
        height="243"
        viewBox="0 0 243 243"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="121.5"
          cy="121.5"
          r="121.5"
          fill="white"
          fill-opacity="0.45"
        />
      </svg>
      <svg
        class="circle circle-2"
        width="243"
        height="243"
        viewBox="0 0 243 243"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="121.5"
          cy="121.5"
          r="121.5"
          fill="white"
          fill-opacity="0.45"
        />
      </svg>
      <svg
        class="circle circle-3"
        width="243"
        height="243"
        viewBox="0 0 243 243"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="121.5"
          cy="121.5"
          r="121.5"
          fill="white"
          fill-opacity="0.45"
        />
      </svg>
    </section>
  </main>
`;
