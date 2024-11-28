import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../store/productSlice';

const EditProduct = ({ product, onClose }) => {
  const [formData, setFormData] = useState(product);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct({ id: product.id, updatedData: formData }));
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
      ></textarea>
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
      />
      <button type="submit">Сохранить</button>
      <button type="button" onClick={onClose}>Отмена</button>
    </form>
  );
};

export default EditProduct;
