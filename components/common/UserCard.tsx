import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website, company, address }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">@{username}</p>
      </div>
      <p className="text-gray-600">Email: {email}</p>
      <p className="text-gray-600">Phone: {phone}</p>
      <p className="text-gray-600">Website: <a href={`https://${website}`} className="text-blue-500 underline">{website}</a></p>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-700">Company</h3>
        <p className="text-gray-600">{company.name}</p>
        <p className="text-gray-600 italic">{company.catchPhrase}</p>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-700">Address</h3>
        <p className="text-gray-600">{`${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`}</p>
      </div>
    </div>
  );
};

export default UserCard;