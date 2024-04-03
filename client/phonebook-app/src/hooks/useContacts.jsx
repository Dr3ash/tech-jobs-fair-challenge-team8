import { useState, useEffect } from "react";

// Mock contacts data
const mockContacts = [
  { id: 1, name: "John Doe", email: "john@example.com", telephoneNumber: "234 567 890", address: "123 Main St", company: "ABC Inc", position: "Software Engineer"},
  { id: 2, name: "Jane Smith", email: "jane@example.com", telephoneNumber: "345 678 901", address: "456 Elm St", company: "XYZ Corp", position: "Product Manager"},
  { id: 3, name: "Alice Brown", email: "alice@example.com", telephoneNumber: "456 789 012", address: "789 Oak St", company: "123 LLC", position: "Designer"},
  { id: 4, name: "Bob White", email: "bobwhite@example.com", telephoneNumber: "567 890 123", address: "012 Pine St", company: "456 Ltd", position: "Developer"},
  { id: 5, name: "Charlie Green", email: "cg@ex.com", telephoneNumber: "678 901 234", address: "345 Cedar St", company: "789 Co", position: "Engineer"},
  { id: 6, name: "David Black", email: "db@ex.com", telephoneNumber: "789 012 345", address: "678 Birch St", company: "012 Org", position: "Manager"},
  { id: 7, name: "Eve Blue", email: "eb@ex.com", telephoneNumber: "890 123 456", address: "567 Maple St", company: "345 Net", position: "Director"},
  { id: 8, name: "Frank Grey", email: "fg@ex.com", telephoneNumber: "901 234 567", address: "456 Walnut St", company: "678 Com", position: "Lead"},
  { id: 9, name: "Grace Red", email: "gr@ex.com", telephoneNumber: "012 345 678", address: "789 Pine St", company: "890 Inc", position: "Analyst"},
  // Add more contacts as needed
];

export const useContacts = (filters) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {

    const filterContacts = (contact) => {
      return Object.keys(filters).every(key => {
        // Skip filtering for this criterion if the filter value is empty
        if (!filters[key]) return true;
        // Otherwise, check if the contact matches the filter value (case-insensitive)
        return contact[key]?.toLowerCase().includes(filters[key].toLowerCase());
      });
    };


    // Simulate an API call
    setTimeout(() => {
      const filteredContacts = mockContacts.filter(filterContacts);
      setContacts(filteredContacts);
    }, 1000); // simulate a delay
  }, [filters]); // The empty array ensures this effect runs only once

  return contacts;
};
