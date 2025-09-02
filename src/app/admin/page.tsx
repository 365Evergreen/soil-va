import React from 'react';

const AdminPage = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold mb-6">Admin UI Management</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-gray-100 rounded-lg p-6 shadow">
          <h2 className="text-xl font-semibold mb-2">Add New Components</h2>
          <p className="text-gray-600">Manage reusable UI blocks for your site.</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add Component</button>
        </div>
        <div className="bg-gray-100 rounded-lg p-6 shadow">
          <h2 className="text-xl font-semibold mb-2">New Pages</h2>
          <p className="text-gray-600">Create and organize site pages.</p>
          <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Add Page</button>
        </div>
        <div className="bg-gray-100 rounded-lg p-6 shadow">
          <h2 className="text-xl font-semibold mb-2">New Page Templates</h2>
          <p className="text-gray-600">Design and manage page templates.</p>
          <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Add Template</button>
        </div>
        <div className="bg-gray-100 rounded-lg p-6 shadow">
          <h2 className="text-xl font-semibold mb-2">New Forms</h2>
          <p className="text-gray-600">Create forms for data collection.</p>
          <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">Add Form</button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
