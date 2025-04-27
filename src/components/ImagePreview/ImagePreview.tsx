type ImagePreviewProps = {
  images: File[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeImage: (index: number) => void;
  errors: {
    images?: string;
  };
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
};

const ImagePreview: React.FC<ImagePreviewProps> = ({
  images,
  handleChange,
  removeImage,
  errors,
  handleBlur,
}) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      if (images.length + e.target.files.length > 3) {
        alert("You can only upload up to 3 images.");
        return;
      }
      handleChange(e);
    }
  };
  return (
    <div className="flex flex-col items-center p-4 w-full max-w-md bg-white">
      <label className="block font-semibold mb-2">Upload Images (max 3)</label>

      {images.length < 3 && (
        <label className="cursor-pointer transition">
          <img
            src="./src/assets/upload_alt.svg"
            alt="upload-icon"
            width={50}
            height={50}
            className="mb-2"
          />
          <input
            name="images"
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            onBlur={handleBlur}
            className="hidden"
          />
        </label>
      )}

      {/* Image Previews */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-4">
        {images.map((file, index) => (
          <div key={index} className="relative group w-full">
            <img
              src={URL.createObjectURL(file)}
              alt={`Preview ${index + 1}`}
              className="w-full h-48 object-cover rounded shadow"
            />
            <button
              onClick={() => removeImage(index)}
              type="button"
              className="absolute top-2 right-2 bg-red-500 cursor-pointer text-white text-xs rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      {errors.images && (
        <p className="text-red-500 text-sm mt-2">{errors.images}</p>
      )}
    </div>
  );
};

export default ImagePreview;
