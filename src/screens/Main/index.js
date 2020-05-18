/* eslint-disable linebreak-style */
import React, { useState } from "react";
import Header from "../shared/Header";
import Table from "../shared/Table";

export default function Main() {
  const usersInitial = [
    { idUser: 1, firstName: "Jan", lastName: "Kowalski" },
    { idUser: 2, firstName: "Zdzislaw", lastName: "Zebra" },
    { idUser: 3, firstName: "Zenon", lastName: "Zupa" },
    { idUser: 4, firstName: "Stefan", lastName: "Salata" },
    { idUser: 5, firstName: "Genowefa", lastName: "Grzmot" },
    { idUser: 6, firstName: "Ziuta", lastName: "Anatol" },
    { idUser: 7, firstName: "Barnaba", lastName: "Młot" },
  ];

  const [users, setUsers] = useState(usersInitial);
  const [selectedUser, setSelectedUser] = useState({});
  const [setSelectedHeader] = useState({});

  const addUser = (e) => {
    if (!users.length) {
      setUsers([
        ...users,
        {
          idUser: 1,
          firstName: "AAA",
          lastName: "BBB",
        },
      ]);
    } else {
      setUsers([
        ...users,
        {
          idUser: users[users.length - 1].idUser + 1,
          firstName: "AAA",
          lastName: "BBB",
        },
      ]);
    }
  };

  const deleteUser = (n) => {
    const newUsers = users
      .slice()
      .filter((n) => n.idUser !== selectedUser.idUser);
    setUsers([...newUsers]);
  };

  const sortUser = (c) => {
    if (c === "first name") {
      users.sort((u1, u2) => {
        const u1FName = u1.firstName.toLowerCase();
        const u2FName = u2.firstName.toLowerCase();
        let a = 0;
        if (u1FName > u2FName) {
          a = 1;
        } else if (u1FName < u2FName) {
          a = -1;
        }
        return a;
      });
    } else if (c === "last name") {
      users.sort((u1, u2) => {
        const u1LName = u1.lastName.toLowerCase();
        const u2LName = u2.lastName.toLowerCase();
        let a = 0;
        if (u1LName > u2LName) {
          a = 1;
        } else if (u1LName < u2LName) {
          a = -1;
        }
        return a;
      });
    } else if (c === "id user") {
      users.sort((u1, u2) => {
        let a = 0;
        if (u1.idUser > u2.idUser) {
          a = 1;
        } else if (u1.idUser < u2.idUser) {
          a = -1;
        }
        return a;
      });
    }
    setUsers([...users]);
  };

  const setCurrentlySelectedUser = (user) => {
    setSelectedUser(user);
  };

  const setCurrentlySelectedHeader = () => {
    setSelectedHeader();
  };
  return (
    <>
      <Header />
      <div className="container">
        <br />
        <button type="button" onClick={addUser} className="btn">
          Dodaj użytkownika
        </button>
        <button
          type="button"
          onClick={deleteUser}
          className="btn"
          style={{ float: "right" }}
        >
          Usuń użytkownika
        </button>
        <Table
          users={users}
          setSelectedUser={setCurrentlySelectedUser}
          selectedUser={selectedUser}
          setSelectedHeader={setCurrentlySelectedHeader}
          sortUser={sortUser}
        />
      </div>
    </>
  );
}
