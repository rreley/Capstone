export interface Prospect {
  t_number: string;
  activated: boolean;
  first_name: string;
  middle_name: string;
  last_name: string;
  term: string;
  level: string;
  primary_program_id: BigInteger;
  secondary_program_id: BigInteger;
  decision: string;
  street_address_1: string;
  street_address_2: string;
  street_address_3: string;
  city: string;
  state: string;
  zip_code: string;
  phone_number: string;
  email_address: string;
  ualr_email: string;
  ethnicity: string;
  admission_type: string;
  sex: string;
  student_type: string;
  created_at: string;
  updated_at: string;
}
