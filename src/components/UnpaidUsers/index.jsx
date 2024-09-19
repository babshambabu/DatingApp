import React from 'react';

const users = [
  { name: 'Samantha W.', id: '123456789', category: 'Dating' },
  { name: 'Tony Soap', id: '123456789', category: 'Matrimony' },
  { name: 'Jordan Nico', id: '123456789', category: 'Matrimony' },
  { name: 'Karen Hope', id: '123456789', category: 'Matrimony' },
  { name: 'Nadila Adja', id: '123456789', category: 'Matrimony' },
];

const UnpaidUsers = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg text-blue-900 font-semibold mb-4">Unpaid Users</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <div className="mr-5">
              <div className="h-8 w-8 bg-purple-200  rounded-full  "></div>
            </div>
            <div className="text-xs text-blue-800 font-bold mr-10 ">{user.name}</div>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 ">
              <div className=" text-xs text-blue-900 mr-10">{user.id}</div>
              <div className=" text-xs text-gray-500 mr-10">{user.category}</div>
              <div className=" text-gray-400 text-xl font-bold text-right ">...</div>
            </div>


          </li>
        ))}
      </ul>
      {/* Pagination */}
      <div className="flex justify-end mt-4">
        <div className="px-3 py-1">
        <svg  width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5125 20.6761L1.04846 11.2361C0.600461 10.8521 0.600461 10.1481 1.04846 9.76415L11.5125 0.324149C12.1845 -0.283851 13.2725 0.164149 13.2725 1.06015L13.2725 19.9401C13.2725 20.8361 12.1845 21.2841 11.5125 20.6761Z" fill="#A098AE" />
        </svg>
        </div>
        <button className="px-3 py-1 border rounded-full bg-blue-800 text-white">1</button>
        <button className="px-3 py-1 border rounded-full ml-2">2</button>
        <button className="px-3 py-1 border rounded-full ml-2">3</button>
        <div className="px-3 py-1">
        <svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.48754 0.323851L12.9515 9.76385C13.3995 10.1479 13.3995 10.8519 12.9515 11.2359L2.48754 20.6759C1.81554 21.2839 0.727539 20.8359 0.727539 19.9399L0.727539 1.05985C0.727539 0.163851 1.81554 -0.284149 2.48754 0.323851Z" fill="#A098AE" />
        </svg>
        </div>
      </div>
    </div>
  );
};

export default UnpaidUsers;
