import React from 'react';

const AccountInfo = ({ formData, setFormData }) => {
  return (
    <div className="max-w-md mx-auto pt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">Account Information</h2>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="privilege">Privilege:</label>
        <select
          id="privilege"
          value={formData.privilege}
          onChange={(e) => setFormData({ ...formData, privilege: e.target.value })}
          className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select...</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="representative">Representative</option>
        </select>
      </div>
    </div>
  );
}

export default AccountInfo;