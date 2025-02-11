import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { trainers } from "../pages/TrainerList"; // 리스트에서 트레이너 정보 가져오기

function TrainerDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const trainer = trainers.find((t) => t.id === parseInt(id));

  if (!trainer) {
    return <div className="text-white text-center mt-10">트레이너 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <div className="absolute top-4 left-4 flex space-x-2">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600"
        >
          ← 뒤로 가기
        </button>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-700"
        >
          🔍 검색 화면으로
        </button>
      </div>
      <img src={trainer.image} alt={trainer.name} className="w-32 h-32 rounded-full mb-4 border-2 border-gray-500" />
      <h1 className="text-2xl font-bold">{trainer.name}</h1>
      <p className="text-lg text-gray-300 mt-2">{trainer.workplace}</p>
      <p className="mt-4 text-md"><strong>교육:</strong> {trainer.education}</p>
      <p className="mt-2 text-md"><strong>경력:</strong> {trainer.experience}</p>
      <p className="mt-2 text-md"><strong>교육 태도:</strong> {trainer.attitude}</p>
      <p className="mt-2 text-md"><strong>출결:</strong> {trainer.attendance}</p>
    </div>
  );
}

export default TrainerDetail;
