import React from "react";
import { PeopleList } from "../PeopleList";

const people = [{
    name: "Ming",
    age: 19,
    hairColor: "Black" 
  }, {
    name: "Li",
    age: '30',
    hairColor: "Brown"
  }, {
    name: "Shu",
    age: 35,
    hairColor: 'Blonde'
  }]

  export const PeopleListPage = () => (
      <>
      <h1>The People List Page</h1>
      <PeopleList people={people} />
      </>
  )