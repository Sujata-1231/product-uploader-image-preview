export type Option = {
    label: string;
    value: string;
};

export type DropdownProps = {
    name: string;
    value: string;
    options: Option[];
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => void;
};
