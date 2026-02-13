import React from "react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl text-center max-w-sm w-full">
        <h2 className="text-2xl font-bold text-pink-500 mb-4">
          💖 Yayyyy!
        </h2>
        <p className="text-gray-700 mb-4">
          Naina, you just made my day 💕
        </p>
        <button
          onClick={onClose}
          className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition"
        >
          Close 💞
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
