import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("department").del();

  // Inserts seed entries
  await knex("department").insert([
    {
      college_name:
        "College of Humanities, Arts, Social Sciences, and Education",
      department_name: "Art and Design",
      department_desc:
        "The Department of Art and Design offers undergraduate instruction leading to a baccalaureate degree in art (BA in Art) with concentrations in art history, studio art, and art education.",
    },
    {
      college_name: "College of Business, Health, and Human Services",
      department_name: "Business",
      department_desc:
        "The School of Business is home to multiple professional programs at both the undergraduate and graduate levels. The school provides quality business education, delivered by research engaged faculty in partnership with the business community, to prepare students for professional careers and enhance regional economic development.",
    },
    {
      college_name:
        "College of Humanities, Arts, Social Sciences, and Education",
      department_name: "Communications",
      department_desc:
        "Applied communication looks at how communication theory and principles can be used to better the communication that takes place in a variety of contexts. In our program, we focus primarily on interpersonal and organizational contexts, helping students analyze and develop messages, anticipate communication barriers and accomplish communicative goals, and embrace differences and influence discourse around them.  Students learn to “apply” theory to everyday situations in order to improve the communication within those situations.",
    },
    {
      college_name:
        "College of Humanities, Arts, Social Sciences, and Education",
      department_name: "Education",
      department_desc:
        "The department strives to provide balanced teacher education programs that embody institutional and college goals, the Arkansas Department of Education Division of Elementary and Secondary Education (DESE) teacher licensure requirements, guidelines of learned societies and professional associations, and contemporary educational philosophies and practices.",
    },
    {
      college_name:
        "Donaghey College of Science, Technology, Engineering, and Mathematics",
      department_name: "Engineering",
      department_desc:
        "The Donaghey College of Science, Technology, Engineering and Mathematics (DCSTEM) is committed to providing the STEM workforce that will build Arkansas’ future, and to developing a quality faculty that can contribute both to our overall educational needs and to the intellectual base of the state. To accomplish these goals, DCSTEM provides the necessary intellectual basis for students to be successful and provides its faculty with facilities and resources to make major contributions to our state. We work closely with UAMS and other educational institutions in the state and enhance our resources through the acquisition of external funds from federal agencies, private foundations, and other private enterprises.",
    },
    {
      college_name: "Does this have a college per se?",
      department_name: "General Programs",
      department_desc:
        "The Associate of Arts in General Studies is designed to reinforce academic achievement and to serve as a stepping-stone to a bachelor’s degree. This associate’s degree provides graduates with a means of professional advancement within their workplace.",
    },
    {
      college_name: "College of Business, Health, and Human Services",
      department_name: "Health",
      department_desc:
        "The College of Business, Health, and Human Services is home to multiple professional programs offering associate, baccalaureate, master’s, and doctorate degrees as well as certificates of proficiency, graduate certificates, and minors. Academic units within CBHHS include the School of Business, School of Counseling, Human Performance, and Rehabilitation, School of Criminal Justice and Criminology, School of Nursing, School of Social Work, and Department of Speech Language Pathology. CBHHS is also home to three centers and public service units including the Arkansas Small Business Technology and Development Center, Arkansas Economic Development Institute, and MidSouth.",
    },
    {
      college_name:
        "College of Humanities, Arts, Social Sciences, and Education",
      department_name: "Humanities and Culture",
      department_desc:
        "The College of Humanities, Arts, Social Sciences, and Education (CHASSE) includes disciplines in communications, humanities, the arts, social sciences, and education. The college also houses the Associate of Arts degree in General Studies, a B.A. in Interdisciplinary Studies, and the Bachelor of Applied Science. A large proportion of the core curriculum is offered in CHASSE.",
    },
    {
      college_name:
        "Donaghey College of Science, Technology, Engineering, and Mathematics",
      department_name: "Information Technology",
      department_desc:
        "The Department of Information Science seeks to expand human and technical capabilities through information in a world where information is of central importance to personal, organizational, social, political, technical, and economic progress. Information Science makes sense of the data that people gather using information technologies and systems. The programs that reside in the Department of Information Science ... ",
    },
    {
      college_name:
        "Donaghey College of Science, Technology, Engineering, and Mathematics",
      department_name: "Mathematics",
      department_desc:
        "The objectives of the department are to prepare students to enter graduate school, to teach at the elementary and secondary levels, to understand and use mathematics in other fields of knowledge with basic mathematical skills for everyday living, and to be employed and to act in a consulting capacity on matters concerning mathematics.",
    },
    {
      college_name:
        "Donaghey College of Science, Technology, Engineering, and Mathematics",
      department_name: "Natural Sciences",
      department_desc:
        "The College of Humanities, Arts, Social Sciences, and Education (CHASSE) includes disciplines in communications, humanities, the arts, social sciences, and education. The college also houses the Associate of Arts degree in General Studies, a B.A. in Interdisciplinary Studies, and the Bachelor of Applied Science. A large proportion of the core curriculum is offered in CHASSE.",
    },
    {
      college_name:
        "College of Humanities, Arts, Social Sciences, and Education",
      department_name: "Social Sciences",
      department_desc:
        "The College of Humanities, Arts, Social Sciences, and Education (CHASSE) includes disciplines in communications, humanities, the arts, social sciences, and education. The college also houses the Associate of Arts degree in General Studies, a B.A. in Interdisciplinary Studies, and the Bachelor of Applied Science. A large proportion of the core curriculum is offered in CHASSE.",
    },
  ]);
}
