/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const Allocation_Wise_Report = () => {


  return (
    <div className="container mx-auto my-4 p-10">
    <h1 className="text-left space-x-4 flex text-2xl font-bold mt-2 mb-4">Allocation-Wise Report</h1>
    <table className="min-w-full mx-auto border-collapse border border-gray-200">
      <thead>
        <tr>
          <th className="px-4 py-2 bg-gray-100 border border-gray-300 text-left font-bold text-sm">GROUPS</th>
          <th className="px-4 py-2 bg-gray-100 border border-gray-300 text-left font-bold text-sm">PLANS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-4 py-2 border border-gray-300 text-left text-sm">GROUP-A:</td>
          <td className="px-4 py-2 border border-gray-300 text-left text-sm">RS:500</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border border-gray-300 text-left text-sm">GROUP-B:</td>
          <td className="px-4 py-2 border border-gray-300 text-left text-sm">RS:500</td>
        </tr>
      </tbody>
    </table>
  </div>
);
  
}

export default Allocation_Wise_Report
