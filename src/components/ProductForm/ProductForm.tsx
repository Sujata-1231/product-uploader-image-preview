import Dropdown from "../DropDown/DropDown";
import TextInput from "../TextInput/TextInput";
import { ProductFormProps } from "./types";

const ProductForm: React.FC<ProductFormProps> = ({
  formData,
  errors,
  handleChange,
  handleSubmit,
  handleBlur,
}) => {
  return (
    <div
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-md p-4 bg-white"
    >
      <div>
        <label className="block font-semibold mb-1">Product Title</label>
        <TextInput
          type="text"
          name="title"
          value={formData.title}
          onChange={(text) =>
            handleChange({
              target: { name: "title", value: text },
            } as React.ChangeEvent<HTMLInputElement>)
          }
          placeholder="Product Title"
          label={"Product Title"}
          onBlur={handleBlur}
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>

      <div>
        <label className="block font-semibold mb-1">Category</label>
        <Dropdown
          name="category"
          value={formData.category}
          options={[
            { label: "Select", value: "" },
            { label: "T-shirt", value: "T-shirt" },
            { label: "Dress", value: "Dress" },
            { label: "Hoodie", value: "Hoodie" },
          ]}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.category && (
          <p className="text-red-500 text-sm">{errors.category}</p>
        )}
      </div>

      <div>
        <label className="block font-semibold mb-1">Tags</label>
        <TextInput
          type="text"
          name="tags"
          value={formData.tags}
          onChange={(text) =>
            handleChange({
              target: { name: "tags", value: text },
            } as React.ChangeEvent<HTMLInputElement>)
          }
          placeholder="e.g., summer, casual, trendy"
          label={"Tags (comma separated)"}
          onBlur={handleBlur}
        />
        {errors.tags && <p className="text-red-500 text-sm">{errors.tags}</p>}
      </div>
    </div>
  );
};

export default ProductForm;
