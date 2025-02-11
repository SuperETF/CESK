import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TrainerSearch() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = () => {
    navigate(`/trainer-list?search=${search}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <div className="flex flex-col items-center w-full max-w-md">
        <img src="/logo.png" alt="Logo" className="w-40 md:w-48 lg:w-56 mb-8" />
        <div className="w-full flex space-x-2">
          <input
            className="flex-1 p-4 text-lg text-black rounded-lg border border-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500"
            placeholder="트레이너 이름을 입력하세요."
            value={search}
            onChange={handleSearch}
          />
          <button
            onClick={handleSearchSubmit}
            className="px-6 py-4 text-lg bg-blue-500 rounded-lg text-white hover:bg-blue-700 transition"
          >
            검색
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrainerSearch;
