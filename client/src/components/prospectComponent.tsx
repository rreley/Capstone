import { h, Fragment } from "preact";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "preact/hooks";
import { Loading } from "./loading";
import { Link } from "wouter-preact";
// import { Prospect } from "../interfaces/prospect.interface";

interface Prospect {
  activated: boolean;
  admission_type: string;
  admit_date: string;
  city: string;
  decision: string;
  email_address: string;
  ethnicity: string;
  first_name: string;
  last_name: string;
  level: string;
  middle_name: string;
  phone_number: string;
  primary_department_name: string;
  primary_program_name: string;
  secondary_department_name: string;
  secondary_program_name: string;
  sex: string;
  state: string;
  street_address_1: string;
  street_address_2: string;
  street_address_3: string;
  student_type: string;
  t_number: string;
  term: string;
  ualr_email: string;
  zip_code: string;
}

const ProspectComponent = () => {
  const [prospect, setProspect] = useState<Prospect>();
  const { isLoading, getAccessTokenSilently } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  const fetchProspect = async () => {
    try {
      const token = await getAccessTokenSilently();

      const response = await fetch(`http://localhost:5001/api/prospects/next`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const responseData = await response.json();
      setProspect(responseData.result);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchProspect();
  }, []);

  return (
    <Fragment>
      {!prospect && <Loading />}

      {prospect && (
        <div class="card">
          <div class="card-content">
            <div class="columns">
              <div class="column is-4">
                <div class="box">
                  <div class="content">
                    <label class="label">Name</label>
                    <p>
                      {prospect.first_name + " "}
                      {prospect.middle_name + " "}
                      {prospect.last_name}
                    </p>
                  </div>
                  <div class="content">
                    <label class="label">Admission Type</label>
                    <p>{prospect.admission_type}</p>
                  </div>
                  <div class="content">
                    <label class="label">Term</label>
                    <p>{prospect.term}</p>
                  </div>
                  <div class="content">
                    <label class="label">Admit Date</label>
                    <p>{prospect.admit_date}</p>
                  </div>
                  <div class="content">
                    <label class="label">Sex</label>
                    <p>{prospect.sex}</p>
                  </div>
                  <div class="content">
                    <label class="label">Ethnicity</label>
                    {prospect.ethnicity}
                  </div>
                  <div class="content">
                    <label class="label">City</label>
                    <p>{prospect.city}</p>
                  </div>
                  <div class="content">
                    <label class="label">State</label>
                    <p>{prospect.state}</p>
                  </div>
                </div>
              </div>
              <div class="column is-8">
                <div className="box">
                  <div class="content">
                    <label class="label">Phone #</label>
                    <p>{prospect.phone_number}</p>
                  </div>
                </div>

                <div class="box">
                  <div class="content">
                    <label class="label">Primary Program</label>
                    <p>{prospect.primary_program_name}</p>
                  </div>
                  <div class="content">
                    <label class="label">Department</label>
                    <p>{prospect.primary_department_name}</p>
                  </div>
                </div>
                <div class="box">
                  <div class="content">
                    <label class="label">Secondary Program</label>
                    <p>{prospect.secondary_program_name}</p>
                  </div>
                  <div class="content">
                    <label class="label">Department</label>
                    <p>{prospect.secondary_department_name}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <Link
                      href="/survey"
                      class="button is-primary is-large"
                      id="btn"
                    >
                      Survey
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export { ProspectComponent };
