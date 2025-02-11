import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const trainers = [
  {
    id: 1,
    name: "채정욱",
    image: "/jeonguk.png", // 로컬 이미지 경로 수정
    education: "NASM CPT",
    experience: "10년",
    attitude: "친절함",
    attendance: "95%",
    workplace: "서울 피트니스 센터"
  },
  {
    id: 2,
    name: "이영희",
    image: "https://drive.google.com/uc?export=view&id=67890",
    education: "재활 트레이닝 과정",
    experience: "7년",
    attitude: "체계적",
    attendance: "98%",
    workplace: "부산 웰니스 스튜디오"
  },
  {
    id: 3,
    name: "김철수",
    image: "https://drive.google.com/uc?export=view&id=11223",
    education: "운동 전문가 과정",
    experience: "5년",
    attitude: "엄격함",
    attendance: "90%",
    workplace: "인천 트레이닝 센터"
  }
];

function TrainerList() {
  const location = useLocation();
  const navigate = useNavigate();
  const [filteredTrainers, setFilteredTrainers] = useState([]);

  useEffect(() => {
    const query = new URLSearchParams(location.search).get("search") || "";
    setFilteredTrainers(trainers.filter((trainer) => trainer.name.includes(query)));
  }, [location.search]);

  const handleTrainerClick = (trainer) => {
    navigate(`/trainer/${trainer.id}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <div className="absolute top-4 left-4">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-700"
        >
          🔍 검색 화면으로
        </button>
      </div>
      <h1 className="text-2xl font-bold mb-6">검색 결과</h1>
      <div className="w-full max-w-md flex flex-col items-center space-y-4 mt-4">
        {filteredTrainers.length > 0 ? (
          filteredTrainers.map((trainer) => (
            <div
              key={trainer.id}
              className="p-4 w-full flex items-center bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition cursor-pointer"
              onClick={() => handleTrainerClick(trainer)}
            >
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-16 h-16 rounded-full border-2 border-gray-500"
              />
              <div className="ml-4">
                <p className="text-lg font-bold">{trainer.name}</p>
                <p className="text-sm text-gray-300">{trainer.workplace}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400">검색 결과가 없습니다.</p>
        )}
      </div>
    </div>
  );
}

export default TrainerList;
