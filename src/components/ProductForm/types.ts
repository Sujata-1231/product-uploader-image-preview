export type ProductFormData = {
    title: string;
    category: string;
    tags: string;
    images: File[];
};

export type ProductFormProps = {
    formData: {
        title: string;
        category: string;
        tags: string;
        onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    };
    errors: {
        title?: string;
        category?: string;
        tags?: string;
    };
    handleChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
    handleSubmit: (e: React.FormEvent) => void;
    isSubmitting: boolean;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    handleBlur: (
        e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
};
