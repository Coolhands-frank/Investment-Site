"use client"
import React from 'react';
import Select, { components } from 'react-select';
import Link from 'next/link';

const options = [
  { value: 'Services', label: 'Services', url: '/services' },
  { value: 'Register', label: 'Register', url: '#' },
  { value: 'Sign In', label: 'Sign In', url: '#' },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    boxShadow: 'none',
    border: 'none',
    backgroundColor: "",
    margin: 0,
    padding: 0,
  }),
  input: (provided) => ({
    ...provided,
    display: 'none', // Hide the input element
    margin: 0,
    padding: 0,
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: '0.375rem', // Rounded corners for the dropdown
    backgroundColor: '#E5E7EB',
    width: "fit",
    
         // Margin top like Tailwind's 'mt-1'
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: 0, // Remove padding inside the value container
    margin: 0,
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    padding: 0, // Remove padding inside the indicators container
    margin: 0,
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#4B5563', // Change the color of the placeholder text
    '&:hover': {
      color: '#9c4221',
    }
  }),
  option: (provided, state) => ({
    ...provided,
    width: "100%",
    backgroundColor: state.isSelected ? '' : '', // Selected background color
    color: '#4B5563',           // Selected text color
    '&:hover': {
      color: '#9c4221',
    },
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    margin: 0,
    padding: 0,
    color: '#9CA3AF', // Color of the dropdown arrow
    '&:hover': {
      color: '#6B7280', // Hover color of the dropdown arrow 
    },
  }),
  indicatorSeparator: () => ({
    display: 'none', // Remove the separator line
    margin: 0,
    padding: 0,
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#4B5563', // Text color of the selected value
    margin: 0,
    padding: 0,
  }),
};


const CustomOption = (props) => {
  return (
    <components.Option {...props}>
      <Link href={props.data.url} passHref>
        {props.children}
      </Link>
    </components.Option>
  );
};

export default function CustomSelect() {
  return (
    <Select
      options={options}
      components={{ Option: CustomOption }} // Override the Option component
      styles={customStyles}
      placeholder="Pages"
      isSearchable={false}
    />
  );
}