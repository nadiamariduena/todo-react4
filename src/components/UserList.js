import React from "react";
// here you are receiving the properties/props from the List.js
const UserList = (props) => {
  // this line props.list.map , correspond to the list, the name of what i am using in props in List.js
  /*
      constructor(props) {
    //   constructor is where i initialize what i will use
    // the 'super' is going to take anything super important from 'props' and pass it
    super(props);
    // State is GOING to automatically refresh THE RENDER and getting the new update whenever I change the STATE
    // TO use the state, you can use 'this.' as this represent what you are currently building
    //
    this.state = {
      userInput: "", //the user input field with an empty field ''
      list: "", //  this is the list array, its build based on what the user will type inside the userInput
    };
    //
  }
*/
  const toDos = props.list.map((item, i) => (
    <li key={i}>
      {item}{" "}
      <i
        onClick={() => {
          console.log(item);

          props.del(item); //the fake function calling from the parent List.js
        }}
      >
        🗑
      </i>
    </li>
  ));
  return <ul>{toDos}</ul>;
};

export default UserList;
