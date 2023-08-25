"use client"
import Image from 'next/image'

function handleSubmit(e: any){
  console.log(`Form content submit event: ${e}`)
}

function handleFileChange(e: any) {
  console.log(`Form uploaded: ${e}`)
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-sm mx-auto p-6 bg-white rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Upload Excel File</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="excelFile" className="block text-sm font-medium text-gray-700">
              Choose an Excel file
            </label>
            <input
              type="file"
              id="excelFile"
              accept=".xls, .xlsx"
              onChange={handleFileChange}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Upload
          </button>
        </form>
      </div>
    </main>
  )
}
