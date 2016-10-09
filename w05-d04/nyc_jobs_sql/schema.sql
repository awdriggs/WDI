DROP TABLE if exists jobs;

CREATE TABLE jobs(
  id SERIAL PRIMARY KEY,
  agency VARCHAR(255),
  posting_type VARCHAR(255),
  positions INTEGER,
  business_title VARCHAR(255),
  civil_service_title VARCHAR(255),
  title_code_no VARCHAR(255),
  level VARCHAR(255),
  salary_range_from INTEGER,
  salary_range_to INTEGER,
  salary_frequency VARCHAR(255),
  work_location VARCHAR(255),
  work_unit VARCHAR(255),
  description TEXT,
  posting_date DATE,
  posting_updated DATE
);