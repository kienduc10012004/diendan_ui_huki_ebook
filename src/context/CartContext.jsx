import React, { createContext, useContext, useState, useMemo } from 'react';
import { booksData } from '../data/mockData';
import { useToast } from './ToastContext';
import { Link, NavLink } from 'react-router-dom';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: "atomic-habits-paper",
      bookId: "atomic-habits",
      title: "Atomic Habits – Thay Đổi Tí Hon, Hiệu Quả Bất Ngờ",
      publisher: "Alpha Books Official",
      format: "Sách giấy (Bìa mềm cao cấp)",
      price: 129000,
      originalPrice: 169000,
      quantity: 1,
      cover: booksData[0]?.cover || '',
      type: "physical"
    },
    {
      id: "deep-work-ebook",
      bookId: "deep-work",
      title: "Deep Work – Làm Ra Làm, Chơi Ra Chơi",
      publisher: "Alpha Books Official",
      format: "Ebook DRM (EPUB + PDF)",
      price: 79000,
      originalPrice: 119000,
      quantity: 1,
      cover: booksData[3]?.cover || '',
      type: "ebook"
    },
    {
      id: "tam-ly-hoc-paper",
      bookId: "tam-ly-hoc-ve-tien",
      title: "Tâm Lý Học Về Tiền (The Psychology of Money)",
      publisher: "Nhà Sách First News Trí Việt",
      format: "Sách giấy (Bìa mềm dập nổi)",
      price: 149000,
      originalPrice: 189000,
      quantity: 2,
      cover: booksData[2]?.cover || '',
      type: "physical"
    }
  ]);

  const { showToast } = useToast();

  const addToCart = (book, format = "ebook") => {
    const isEbook = format === "ebook";
    const isCombo = format === "combo";
    const price = isEbook ? book.priceEbook : (isCombo ? book.priceCombo : book.pricePaper);
    const formatName = isEbook
      ? "Ebook DRM Bản Quyền"
      : (isCombo ? "Combo Sách Giấy + Ebook" : "Sách Giấy Cao Cấp");

    const originalPrice = isEbook
      ? book.originalPriceEbook
      : book.originalPricePaper;

    const newItem = {
      id: `${book.id}-${format}-${Date.now()}`,
      bookId: book.id,
      title: book.title,
      publisher: book.publisher,
      format: formatName,
      price: price,
      originalPrice: originalPrice,
      quantity: 1,
      cover: book.cover,
      type: isEbook ? "ebook" : "physical"
    };

    setCartItems(prev => [...prev, newItem]);
    showToast(`Đã thêm "${book.title}" vào giỏ hàng!`);
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    showToast("Đã xóa ấn phẩm khỏi giỏ hàng");
  };

  const updateQuantity = (id, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, Math.min(99, item.quantity + delta));
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
    [cartItems]
  );
  const totalItemsCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      subtotal,
      totalItemsCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
