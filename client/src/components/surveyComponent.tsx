import { h, Fragment } from "preact";
import { Link } from "wouter-preact";

const SurveyComponent = () => {
  return (
    <Fragment>
      <section class="section">
        <div class="dropdown is-hoverable">
          <div class="dropdown-trigger">
            <button
              class="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu"
            >
              <span>Prospect Disposition</span>
              <span class="icon is-small">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <a href="#" class="dropdown-item">
                Interested
              </a>
              <hr class="dropdown-divider" />
              <a href="#" class="dropdown-item">
                Not Interested
              </a>
              <hr class="dropdown-divider" />
              <a href="#" class="dropdown-item">
                Confused
              </a>
              <hr class="dropdown-divider" />
              <a href="#" class="dropdown-item">
                None of the above
              </a>
            </div>
          </div>
        </div>
      </section>

      <div class="box">
        <div class="box">
          <div class="field">
            <label class="label">Notes</label>
            <div>
              <textarea
                class="textarea"
                placeholder="e.g. Any Notes"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="field">
            <label class="label">Email</label>
            <div>
              <textarea
                class="textarea"
                placeholder="e.g. Send an email"
              ></textarea>
            </div>
          </div>
        </div>
        <Link
          href="/prospect"
          class="button is-primary is-large"
          id="surveybtn"
        >
          Next Prospect
        </Link>
      </div>
    </Fragment>
  );
};

export { SurveyComponent };
