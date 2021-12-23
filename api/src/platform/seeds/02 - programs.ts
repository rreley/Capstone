import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("program").del();

  // Inserts seed entries
  await knex("program").insert([
    { department_id: 1, program_name: "Applied Design" },
    { department_id: 1, program_name: "Art" },
    { department_id: 1, program_name: "Music" },
    { department_id: 1, program_name: "Music Education" },
    { department_id: 1, program_name: "Photography" },
    { department_id: 1, program_name: "Theatre Arts" },
    { department_id: 2, program_name: "Accounting" },
    { department_id: 2, program_name: "Business Analytics" },
    {
      department_id: 2,
      program_name: "Business Information Systems",
    },
    { department_id: 2, program_name: "Economics" },
    { department_id: 2, program_name: "Finance" },
    {
      department_id: 2,
      program_name: "International Business",
    },
    { department_id: 2, program_name: "Management" },
    { department_id: 2, program_name: "Marketing" },
    { department_id: 3, program_name: "Applied Communication" },
    { department_id: 3, program_name: "Mass Communication" },
    {
      department_id: 3,
      program_name: "Professional and Technical Writing",
    },
    { department_id: 4, program_name: "Education" },
    {
      department_id: 4,
      program_name: "Elementary Education K-6",
    },
    {
      department_id: 4,
      program_name: "Interpretation: ASL/English",
    },
    {
      department_id: 4,
      program_name: "Middle Childhood Education",
    },
    { department_id: 4, program_name: "Special Education" },
    {
      department_id: 5,
      program_name: "Civil and Construction Engineering",
    },
    { department_id: 5, program_name: "Construction" },
    {
      department_id: 5,
      program_name: "Construction Management",
    },
    {
      department_id: 5,
      program_name: "Electronics & Computer Engineering Technology",
    },
    {
      department_id: 5,
      program_name: "Mechanical Engineering",
    },
    {
      department_id: 5,
      program_name: "Mechanical Engineering Technology",
    },
    { department_id: 6, program_name: "Applied Science" },
    { department_id: 6, program_name: "General Studies" },
    {
      department_id: 6,
      program_name: "Interdisciplinary Studies",
    },
    {
      department_id: 7,
      program_name: "Communication Sciences and Disorders",
    },
    {
      department_id: 7,
      program_name: "Health Education and Promotion",
    },
    {
      department_id: 7,
      program_name: "K-12 Health and Physical Education",
    },
    { department_id: 7, program_name: "Nursing" },
    {
      department_id: 7,
      program_name: "Pre-Professional Studies",
    },
    { department_id: 8, program_name: "English" },
    { department_id: 8, program_name: "French" },
    { department_id: 8, program_name: "History" },
    { department_id: 8, program_name: "Philosophy" },
    { department_id: 8, program_name: "Spanish" },
    {
      department_id: 8,
      program_name: "Workplace Spanish Certificate of Proficiency",
    },
    { department_id: 9, program_name: "Computer Programming" },
    { department_id: 9, program_name: "Computer Science" },
    { department_id: 9, program_name: "Cybersecurity" },
    { department_id: 9, program_name: "Information Assurance" },
    { department_id: 9, program_name: "Information Science" },
    {
      department_id: 9,
      program_name: "Web Design & Development",
    },
    { department_id: 10, program_name: "Mathematics" },
    {
      department_id: 10,
      program_name: "Mathematics Education",
    },
    { department_id: 11, program_name: "Biology" },
    { department_id: 11, program_name: "Chemistry" },
    { department_id: 11, program_name: "Geology" },
    { department_id: 11, program_name: "Physics" },
    { department_id: 12, program_name: "Anthropology" },
    { department_id: 12, program_name: "Criminal Justice" },
    { department_id: 12, program_name: "Law Enforcement" },
    { department_id: 12, program_name: "Legal Studies" },
    {
      department_id: 12,
      program_name: "Nonprofit Leadership Studies",
    },
    { department_id: 12, program_name: "Political Science" },
    { department_id: 12, program_name: "Psychology" },
    {
      department_id: 12,
      program_name: "Public Administration",
    },
    { department_id: 12, program_name: "Social Work" },
    { department_id: 12, program_name: "Sociology" },
  ]);
}
