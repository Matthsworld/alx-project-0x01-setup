import React, { useState } from "react";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";

const Users: React.FC<{ users: UserData[] }> = ({ users }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [allUsers, setAllUsers] = useState(users);

  const handleAddUser = (newUser: UserData) => {
    setAllUsers([...allUsers, { ...newUser, id: allUsers.length + 1 }]);
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="p-4 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold">Users</h1>
      </header>
      <main className="p-4">
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-500 px-4 py-2 text-white rounded-lg"
        >
          Add User
        </button>
        <div className="mt-4">
          {allUsers.map((user) => (
            <div key={user.id} className="border-b py-2">
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
          ))}
        </div>
      </main>
      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;

/*
import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";

const Users: React.FC<{ users: UserProps[] }> = ({ users }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-semibold mb-6">User Profiles</h1>
        <div className="grid grid-cols-2 gap-4">
          {users.map((user: UserProps) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
*/