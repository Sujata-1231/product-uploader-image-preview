export type ImagePreviewProps = {
    images: File[];
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    removeImage: (index: number) => void;
    errors: {
        images?: string;
    };
    handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
};
