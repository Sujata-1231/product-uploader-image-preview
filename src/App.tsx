import { useState } from "react";

import ImagePreview from "./components/ImagePreview/ImagePreview";
import { ProductFormData } from "./components/ProductForm/types";
import ProductForm from "./components/ProductForm/ProductForm";

function App() {
  const [formData, setFormData] = useState<ProductFormData>({
    title: "",
    category: "",
    tags: "",
    images: [],
  });

  const [errors, setErrors] = useState<{
    title?: string;
    category?: string;
    tags?: string;
    images?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement &
      HTMLSelectElement;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "images"
          ? [...prev.images, ...(files ? Array.from(files) : [])]
          : value,
    }));

    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };

      if (name === "title" && value.trim()) {
        delete newErrors.title;
      }

      if (name === "category" && value) {
        delete newErrors.category;
      }

      if (name === "tags" && value.trim()) {
        delete newErrors.tags;
      }

      if (name === "images" && files && files.length > 0) {
        delete newErrors.images;
      }

      return newErrors;
    });
  };

  const removeImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const validateForm = () => {
    const newErrors: {
      title?: string;
      category?: string;
      tags?: string;
      images?: string;
    } = {};
    if (!formData.title.trim()) newErrors.title = "Title is required.";
    if (!formData.category) newErrors.category = "Category must be selected.";
    if (!formData.tags) newErrors.tags = "Tags are required";
    if (formData.images.length === 0)
      newErrors.images = "At least one image is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const files = (e.target as HTMLInputElement).files;

    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };

      if (name === "title") {
        if (!value.trim()) {
          newErrors.title = "Title is required.";
        } else {
          delete newErrors.title;
        }
      }

      if (name === "category") {
        if (!value) {
          newErrors.category = "Category must be selected.";
        } else {
          delete newErrors.category;
        }
      }

      if (name === "tags") {
        if (!value) {
          newErrors.tags = "Tags are required.";
        } else {
          delete newErrors.tags;
        }
      }

      if (name === "images") {
        if (!files || files.length === 0) {
          newErrors.images = "At least one image is required.";
        } else {
          delete newErrors.images;
        }
      }

      return newErrors;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Form Data:", formData);
      setIsSubmitting(false);
      setSuccess(true);
      setFormData({
        title: "",
        category: "",
        tags: "",
        images: [],
      });

      setTimeout(() => setSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-col w-full max-w-5xl gap-6 rounded-xl bg-white p-4 md:p-6 shadow-md justify-between"
      >
        {success && (
          <div className="fixed top-5 left-1/2  bg-green-500 -translate-x-1/2 text-white px-4 py-2 rounded shadow-lg animate-bounce z-50">
            Product Uploaded Successfully!
          </div>
        )}
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:items-start md:justify-center">
          <ProductForm
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            handleBlur={handleBlur}
          />
          <ImagePreview
            images={formData.images}
            handleChange={handleChange}
            removeImage={removeImage}
            errors={errors}
            handleBlur={handleBlur}
          />
        </div>
        <div className="flex flex-col md:flex-row justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition w-full md:w-auto cursor-pointer"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Submit Product"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
