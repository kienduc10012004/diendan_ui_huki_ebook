import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useToast } from '../../context/ToastContext';

export default function Toast() {
  const { toastMessage } = useToast();

  if (!toastMessage) return null;

  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] bg-[#17201f] text-white px-5 py-3 rounded-2xl shadow-2xl text-sm font-medium flex items-center gap-2 animate-fade-in-up"
      role="status"
      aria-live="polite"
    >
      <span className="material-symbols-outlined text-base text-[#94f5d6]">check_circle</span>
      <span>{toastMessage}</span>
    </div>
  );
}
