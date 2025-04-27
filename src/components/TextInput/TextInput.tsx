import { cn } from "../../util/utils";
import { IProps } from "./types";

export default function TextInput({
  placeholder,
  type,
  label,
  value,
  invalid,
  disabled,
  className,
  inputClassName,
  labelClassName,
  onChange,
  onBlur,
  name,
}: IProps) {
  return (
    <div className={cn("relative w-full", className)}>
      <input
        name={name}
        type={type}
        value={value}
        id="floating_outlined"
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className={cn(
          "peer block w-full appearance-none rounded-lg border px-2.5 pt-4 pb-2.5 text-base font-medium text-gray-900 focus:outline-none",
          invalid ? "border-red-500" : "border-gray-300",
          disabled ? "bg-gray-50 !text-gray-500" : "",
          inputClassName
        )}
      />
      <label
        htmlFor="floating_outlined"
        className={cn(
          "absolute top-2 left-2 -translate-y-4 scale-75 transform bg-white px-2 text-sm opacity-100 transition-all duration-300",
          "peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:opacity-0",
          "peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:opacity-100",
          invalid ? "text-red-500" : "text-gray-500 peer-focus:text-blue-500",
          labelClassName
        )}
      >
        {label}
      </label>
    </div>
  );
}
