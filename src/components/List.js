// 1
import React from "react";
import UserList from "./UserList";
// 2
export default class List extends React.Component {
  // 3 inside the constructor you need to pass the "props" like an argument.
  // always when you will use a "constructor", you will use the 'super'.
  constructor(props) {
    //   constructor is where i initialize what i will use
    // the 'super' is going to take anything super important from 'props' and pass it
    super(props);
    // State is GOING to automatically refresh THE RENDER and getting the new update whenever I change the STATE
    // TO use the state, you can use 'this.' as this represent what you are currently building
    //
    this.state = {
      userInput: "", //the user input field with an empty field ''
      list: [], //  this is the list array, its build based on what the user will type inside the userInput
    };
    //
  }
  render() {
    //
    this.changeHandel = (e) => {
      // setState : it will not immediately change, it will just check and then take the time and do the task
      this.setState({ userInput: e.target.value.trim() });
      console.log(e.target.value); //actual preview of what the user is  typing

      //   so here i am changing the userInput and assigning a new value to it
      /* 
    so what is the new value from  e.target.value.trim()? in event 'e' that contains this onChange={this.changeHandel} 


    */
      /*The trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).*/
    };
    //
    // i can use a normal function here.
    //  bind will make me add more lines of code to get the same result.
    // bind, will help me to use the this. keyword when using the constructor, but its better to use this way to use less code.
    //
    this.add = (e) => {
      e.preventDefault();
      const userText = this.state.userInput;
      //   with this update "setState" i want that after the user hit enter, the field is empty again
      this.setState({
        userInput: "", //empty field
        list: [...this.state.list, userText], //here i tell that i want to keep the old array which is array, and i want to add things to it, got to the browser and test it to see what it does.
      });
    };
    //
    //-------
    // fake function , i dont have the function in the child but i will call it there
    // this is the way i pass the function to a child: del={this.remove}/> and then there i can use that function
    this.remove = (itemToRemove) => {
      const newArr = this.state.list.filter((item) => item !== itemToRemove);
      console.log(newArr);
      this.setState({
        list: newArr,
      });
    };

    //
    // ------
    return (
      <React.Fragment>
        <form onSubmit={this.add}>
          <input
            type="text"
            value={this.state.userInput}
            // after creating the UserList.js and maping through the items, you will not
            // be able to type anymore, so to prevent this, add a event handler onChange
            onChange={this.changeHandel}
            placeholder="type something"
          />
          <input type="submit" value="Add" />
        </form>
        <UserList list={this.state.list} del={this.remove} />
        {/* 
        -list has a child called UserList, this UserList is inside the UserList.js,
        and there i am processing the view 
        
        -the view dont know anything about the DATA,dont know what elements are inside of it
        but what it knows is about the onClick on that element, i have that event i can register on click.

        -the child cannot send data to the parent which is List.js but List.js can send to children but there
        s a way to send small information to the parent by creating a fake function.
        
        
        */}
      </React.Fragment>
    );
  }
}

// to use the snippet:
// imr : Import React
// imrc : import react component
// cc  : Class Component
// ccc : Class Component With Constructor
//  https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets
