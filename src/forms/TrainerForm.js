import React, { useState } from "react";

function TrainerForm({ onAddTrainer }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [education, setEducation] = useState("");
  const [workplace, setWorkplace] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTrainer = {
      id: Date.now(),
      name,
      image: image || "/default.jpg",
      education,
      workplace,
    };
    onAddTrainer(newTrainer);
    setName("");
    setImage("");
    setEducation("");
    setWorkplace("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-900 p-4 rounded-lg">
      <h2 className="text-lg font-bold text-white mb-2">새 트레이너 등록</h2>
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 mb-2 text-black rounded"
        required
      />
      <input
        type="text"
        placeholder="이미지 URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="w-full p-2 mb-2 text-black rounded"
      />
      <input
        type="text"
        placeholder="교육 이력"
        value={education}
        onChange={(e) => setEducation(e.target.value)}
        className="w-full p-2 mb-2 text-black rounded"
        required
      />
      <input
        type="text"
        placeholder="근무지"
        value={workplace}
        onChange={(e) => setWorkplace(e.target.value)}
        className="w-full p-2 mb-2 text-black rounded"
        required
      />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
        등록
      </button>
    </form>
  );
}

export default TrainerForm;
