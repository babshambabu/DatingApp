import React from 'react';
import ExpenseForm from '../../components/ExpenseForm';
import ExpenseListTable from '../../components/ExpenseListTable';
import { TopBar } from '../../components';

function AccountsScreen() {
  return (
    <div className="w-[calc(100vw-4rem)] h-full  overflow-auto ">
      <TopBar />
    <div className="min-h-screen bg-gray-100 p-6 flex">
      <div className="w-1/3">
        <ExpenseForm />
      </div>
      <div className="w-2/3 ml-6">
        <ExpenseListTable />
      </div>
    </div>
    </div>
  );
}

export default AccountsScreen;
