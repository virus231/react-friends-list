import React from 'react';
import './App.css';


const App = () => (<PersonList/>);

const PersonList = () => {
  const people = [
    {
      img: 22,
      name: 'john',
      job: 'PM'
    },
    {
      img: 23,
      name: 'Vlad',
      job: 'developer'
    },
    {
      img: 24,
      name: 'Peter',
      job: 'Designer'
    }
  ]

  return (
    <section>
      <Person person={people[0]}/>
      <Person person={people[1]}/>
      <Person person={people[2]}/>
      
    </section>
  )
};

const Person = (props) => {
  const {img,job,name} = props.person
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;

  return (
    <div className="person">
      <img src={url} alt="Person img"/>
      <h1>
        {name}
      </h1>
      <h4>
        {job}
      </h4>
    </div>
  )
};






export default App;
