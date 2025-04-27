/**
 * A reusable and accessible input component with floating label support.
 *
 * This component is ideal for forms where users need to enter values such as name,
 * email, or any other type of input. It provides a Material-style floating label
 * that animates based on input focus or when a value is present.
 *
 * @param placeholder - Text shown inside the input when empty and unfocused.
 * @param type - The HTML input type (e.g., "text", "email", "password").
 * @param label - The floating label shown above the input field.
 * @param value - The current value of the input field.
 * @param invalid - Whether the input is in an error state (e.g., failed validation).
 * @param disabled - Whether the input is disabled (non-editable).
 * @param className - Additional custom class names for the container.
 * @param onChange - Callback fired when the input value changes.
 * @param onBlur - Optional callback triggered when the input loses focus.
 *
 * @returns A styled input field with floating label behavior and validation handling.

 */

import { cn } from "../../util/utils";

// import { cn } from "../../util/utils";

interface IProps {
  /** The placeholder text displayed inside the input when empty. */
  placeholder?: string;

  /** The HTML input type (e.g., "text", "email", "password"). */
  type: string;

  /** The label text shown as a floating label above the input. */
  label: string;

  /** The current value of the input field. */
  value: string;

  /** Whether the input is in an invalid or error state (shows red styling). */
  invalid?: boolean;

  /** Whether the input is disabled and non-interactive. */
  disabled?: boolean;

  /** Additional custom class names for the container element. */
  className?: string;

  /** Additional custom class names for the input element. */
  inputClassName?: string;

  /** Additional custom class names for the label element. */
  labelClassName?: string;

  /** Callback fired when the input value changes. */
  onChange: (text: string) => void;

  /** Optional callback fired when the input loses focus. */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;

  name?: string;
}

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
