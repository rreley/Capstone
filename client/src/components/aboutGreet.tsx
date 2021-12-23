import { h, Fragment } from "preact";

const AboutGreet = () => {
  return (
    <Fragment>
      <div class="box" id="grad">
        <section class="hero">
          <div class="hero-body">
            <p class="title" id="title">
              Student Recruitment App
            </p>
            <p class="subtitle" id="title">
              Click to login button to begin!
            </p>
          </div>
        </section>
      </div>

      <div class="box" id="grad">
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child">
              <p id="title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Molestie at elementum eu facilisis sed odio. Consequat semper
                viverra nam libero. Aliquam faucibus purus in massa tempor.
                Vitae congue mauris rhoncus aenean vel elit scelerisque mauris
                pellentesque. Augue interdum velit euismod in pellentesque massa
                placerat duis ultricies. Sagittis vitae et leo duis ut diam.
              </p>
            </article>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export { AboutGreet };
