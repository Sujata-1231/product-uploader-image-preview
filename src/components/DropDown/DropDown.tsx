import React, { useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import { DropdownProps } from "./types";

const Dropdown: React.FC<DropdownProps> = ({
  name,
  value,
  options,
  onChange,
  onBlur,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, isOpen, () => {
    if (isOpen) {
      setIsOpen(false);
      if (onBlur) {
        const fakeEvent = {
          target: { name, value },
        } as unknown as React.FocusEvent<HTMLInputElement | HTMLSelectElement>;
        onBlur(fakeEvent);
      }
    }
  });

  const handleOptionSelect = (selectedValue: string) => {
    if (selectedValue === "") return;

    const fakeChangeEvent = {
      target: {
        name,
        value: selectedValue,
      },
    } as unknown as React.ChangeEvent<HTMLInputElement>;

    onChange(fakeChangeEvent);
    setIsOpen(false);
  };

  const selectedLabel =
    options.find((option) => option.value === value)?.label ||
    "Select Category";

  return (
    <div ref={dropdownRef} className="relative w-full">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full border border-gray-300 rounded p-2 text-left bg-white"
      >
        {selectedLabel}
      </button>

      {/* Dropdown list */}
      <div
        className={`absolute z-10 w-full bg-white border border-gray-300 rounded mt-1 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionSelect(option.value)}
              className={`p-2 hover:bg-gray-100 cursor-pointer transition ${
                option.value === "" ? "text-gray-400 pointer-events-none" : ""
              }`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
