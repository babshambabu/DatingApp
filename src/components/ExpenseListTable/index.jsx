import React, { useState } from 'react';

const ExpenseListTable = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const data = [
    { id: 1, date: 'xx/xx/xxxx', invoiceNo: 4954545, category: 'Other', description: 'Paid cash', dr: 0, cr: 4954545 },
    { id: 2, date: 'xx/xx/xxxx', invoiceNo: 4943434, category: 'Office', description: 'Paid cash', dr: 0, cr: 4943434 },
    { id: 3, date: 'xx/xx/xxxx', invoiceNo: 443439, category: 'Dating', description: 'Paid', dr: 0, cr: 443439 },
    { id: 4, date: 'xx/xx/xxxx', invoiceNo: 4434349, category: 'Miscellaneous', description: 'Description', dr: 4434349, cr: 0 },
  ];

  const handleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3">
              <input type="checkbox" />
            </th>
            <th className="px-6 py-3">Sl.No</th>
            <th className="px-6 py-3">Date</th>
            <th className="px-6 py-3">Invoice No</th>
            <th className="px-6 py-3">Category</th>
            <th className="px-6 py-3">Description / Remarks</th>
            <th className="px-6 py-3">DR</th>
            <th className="px-6 py-3">CR</th>
            <th className="px-6 py-3">Invoice</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => handleSelectItem(item.id)}
                />
              </td>
              <td className="px-6 py-4">{item.id}</td>
              <td className="px-6 py-4">{item.date}</td>
              <td className="px-6 py-4">{item.invoiceNo}</td>
              <td className="px-6 py-4">{item.category}</td>
              <td className="px-6 py-4">{item.description}</td>
              <td className="px-6 py-4">{item.dr}</td>
              <td className="px-6 py-4">{item.cr}</td>
              <td className="px-6 py-4">
                <button className="text-gray-500">📄</button>
              </td>
              <td className="px-6 py-4">
                <button className="text-gray-500">✏️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseListTable;
