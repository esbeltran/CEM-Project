CREATE DATABASE scwdb;

-- set extension for uuid 
-- USE IN PSQL: create extension if not exists "uuid-ossp";
CREATE TABLE users(
  user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  contact_no CHAR(255),
  user_type INT NOT NULL
);