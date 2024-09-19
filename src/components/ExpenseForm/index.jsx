import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the date picker styles

const ExpenseForm = () => {
  const [startDate, setStartDate] = useState(null); // State to handle date

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Expense</h2>
      
      <form className="space-y-4">
        {/* Date Picker Field */}
        <div className="relative">
          <label className="block text-sm font-medium mb-1">Date</label>
      <div className="relative">
            <DatePicker 
              selected={startDate} 
              onChange={(date) => setStartDate(date)} 
              className=" w-full px-10 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              dateFormat="yyyy/MM/dd"
              placeholderText=""             
              wrapperClassName="w-full" />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
              📅
            </span>
          </div>
        </div>
        {/* Invoice No Field */}
        <div className="relative">
          <label className="block text-sm font-medium mb-1">Invoice No</label>
          <input 
            type="text" 
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <button className="absolute right-3 top-8 text-indigo-500 focus:outline-none">Clear</button>
        </div>

        {/* Category Field */}
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select 
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option>Other</option>
            <option>Office</option>
            <option>Dating</option>
            <option>Miscellaneous</option>
          </select>
        </div>

        {/* Description/Remarks Field */}
        <div>
          <label className="block text-sm font-medium mb-1">Description / Remarks</label>
          <input 
            type="text" 
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* DR / CR Fields */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">DR</label>
            <input 
              type="number" 
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">CR</label>
            <input 
              type="number" 
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Add Invoice Button */}
        <div>
          <label className="block text-sm font-medium mb-1">Invoice</label>
          <button 
            type="button"
            className="mt-1 px-4 py-3 border-2 border-dashed border-gray-300 w-full text-center text-gray-500 rounded-lg"
          >
            + Add Invoice
          </button>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="mt-6 w-full bg-fuchsia-800 hover:bg-fuchsia-700 text-white py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
