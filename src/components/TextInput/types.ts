export interface IProps {
    placeholder?: string;
    type: string;
    label: string;
    value: string;
    invalid?: boolean;
    disabled?: boolean;
    className?: string;
    inputClassName?: string;
    labelClassName?: string;
    onChange: (text: string) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    name?: string;
}