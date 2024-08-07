import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <Button>Add friend</Button>
        <FormAddFriend />
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;

function FriendsList() {
  return (
    <ul>
      {initialFriends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button onClick={() => console.log("eee")}>
        {/* {isSelected ? 'Close' : 'Select'} */}
        Close
      </Button>
    </li>
  );
}

function FormAddFriend() {
  return (
    <form className="form form-add-friend">
      <label>Friend name</label>
      <input type="text" />

      <label>Image URL</label>
      <input type="text" />

      <Button onClick={() => console.log("eee")}>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <from className="form form-split-bill">
      <h2>Split a bill with x</h2>
      <label>Bill value</label>
      <input type="text" />
      <label>Your expense</label>
      <input type="text" />
      <label>x's expense</label>
      <input type="text" />

      <label>who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">x</option>
      </select>
      <input type="text" />
      <Button onClick={() => console.log("eee")}>Split bill</Button>
    </from>
  );
}
