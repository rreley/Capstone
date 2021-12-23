import { h, Fragment } from "preact";
import axios from "axios";
import { useState } from "preact/hooks";

const ImportComponent = () => {
  const [fileSelected, setFileSelected] = useState<File>();
  const [_uploadedFile, setUploadedFile] = useState({});
  const [filename, setFilename] = useState("");

  const onChange = (e: Event) => {
    //TS complains here, but text/csv file obj is in the web console

    const target = e.currentTarget as HTMLInputElement;

    const fileList: File = (target.files as FileList)[0];

    //const fileList = e.currentTarget.files;

    if (!fileList) return;

    setFileSelected(fileList);
    setFilename(fileList.name);
  };

  const onSubmit = async (e: Event) => {
    e.preventDefault();

    if (fileSelected) {
      const formData = new FormData();
      formData.append("file", fileSelected);

      try {
        const res = await axios.post(
          `http://localhost:5001/api/import`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        const { fileName, filePath } = res.data;

        setUploadedFile({ fileName, filePath });
      } catch (err: any) {
        console.log(err);
      }
    }

    console.log(fileSelected);
  };

  return (
    <Fragment>
      <div class="box" id="grad">
        <section class="hero">
          <div class="hero-body">
            <p class="title" id="title">
              Import Data
            </p>
            <p class="subtitle" id="title">
              Upload a CSV File.
            </p>
          </div>
        </section>
      </div>

      <div class="card">
        <div class="card-content">
          <div class="box">
            <form onSubmit={onSubmit}>
              <div class="field">
                <div class="file is-info has-name">
                  <label class="file-label">
                    <input class="file-input" type="file" onChange={onChange} />
                    <span class="file-cta">
                      <span class="file-label">Choose File…</span>
                    </span>
                    <span class="file-name">{filename}</span>
                  </label>
                </div>
              </div>
              <div class="field">
                <input type="submit" value="Upload" class="button is-primary" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export { ImportComponent };
