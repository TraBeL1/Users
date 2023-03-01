import './App.css';
import Test from "./Test";
import Users from "./Users";

const App = () => {
  const users = [
    {
      firstName: "John",
      lastName: "Doe",
      age: 25,
      phone: "555-555-5555",
      email: "john.doe@example.com",
      imageUrl: "https://robohash.org/john",
      gender: "Male"
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      age: 28,
      phone: "555-555-5555",
      email: "jane.doe@example.com",
      imageUrl: "https://robohash.org/jane",
      gender: "Female"
    },
    {
      firstName: "Bob",
      lastName: "Smith",
      age: 32,
      phone: "555-555-5555",
      email: "bob.smith@example.com",
      imageUrl: "https://robohash.org/bob",
      gender: "Male"
    },
    {
      firstName: "Alice",
      lastName: "Johnson",
      age: 19,
      phone: "555-555-5555",
      email: "alice.johnson@example.com",
      imageUrl: "https://robohash.org/alice",
      gender: "Female"
    },
    {
      firstName: "David",
      lastName: "Lee",
      age: 41,
      phone: "555-555-5555",
      email: "david.lee@example.com",
      imageUrl: "https://robohash.org/david",
      gender: "Male"
    },
    {
      firstName: "Maggie",
      lastName: "Brown",
      age: 22,
      phone: "555-555-5555",
      email: "maggie.brown@example.com",
      imageUrl: "https://robohash.org/maggie",
      gender: "Female"
    },
    {
      firstName: "Peter",
      lastName: "Chen",
      age: 29,
      phone: "555-555-5555",
      email: "peter.chen@example.com",
      imageUrl: "https://robohash.org/peter",
      gender: "Male"
    },
    {
      firstName: "Rachel",
      lastName: "Kim",
      age: 36,
      phone: "555-555-5555",
      email: "rachel.kim@example.com",
      imageUrl: "https://robohash.org/rachel",
      gender: "Female"
    },
    {
      firstName: "Tom",
      lastName: "Wang",
      age: 27,
      phone: "555-555-5555",
      email: "tom.wang@example.com",
      imageUrl: "https://robohash.org/tom",
      gender: "Male"
    },
    {
      firstName: "Sophia",
      lastName: "Garcia",
      age: 31,
      phone: "555-555-5555",
      email: "sophia.garcia@example.com",
      imageUrl: "https://robohash.org/sophia",
      gender: "Female"
    }
  ];

  return (
    <div style={{display: "flex", flexWrap: "wrap", flexDirection:"row", justifyContent: "space-between", alignItems: "center"}}>
      {
        users.map(value => <Users key={users.phone}{...value}/> )
      }

    </div>

  );

}

export default App;
