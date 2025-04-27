# product-uploader-image-preview

## How to Run the Project

- git clone https://github.com/Sujata-1231/product-uploader-image-preview.git
- cd product-uploader-image-preview
- npm install
- npm run dev
- Open http://localhost:5173 to view it in the browser

## Time Taken

- Approximately 4–5 hours, including coding, polishing, and setting up the project.

## AI Tools Used

    ChatGPT 4.0

        Helped in suggesting better toast message placement (top-center) instead of an alert box.

        Assisted in refining the handleChange logic for combined image and input field handling.

        Suggested UI improvements for responsive layouts (mobile full-width buttons, desktop right-aligned).

    GitHub Copilot

        Assisted with auto-completing boilerplate code, speeding up the writing of React components and TypeScript types.

        Provided quick suggestions for Tailwind classes while styling the form and layout.

        Helped predict code patterns for form validation, reducing development time and typos.
    My Contribution vs Copilot:

While Copilot gave suggestions, I made sure to manually verify and modify the logic to match the challenge requirements.
Using Copilot helped me save around 20–25% of time, especially for boilerplate and common UI patterns, allowing me to focus more on layout, UX, and functionality.

Features

    Product Info Form (Title, Category, Tags input)

    Upload up to 3 images

    Preview uploaded images

    Responsive Layout:

        Desktop: Side-by-side Form and Image Preview

        Mobile: Vertical stacking

    Bonus Features:

        Simulated loading spinner while saving

        Success toast notification after submission

    Built fully using Tailwind CSS (no drag-drop libraries, minimal custom CSS)

Tech Stack

    React 18

    Vite

    TypeScript

    Tailwind CSS

### Potential Improvements and Future Enhancements

1. Form Validation UX

- Add a red border (border-red-500) around fields that have validation errors to make errors more visible.

2. Form Submission Behavior

- Keep the "Submit" button disabled until the form is fully valid (all fields filled, images uploaded) and enable it dynamically.

3. Custom Reusable Components

- Create a reusable button component with built-in loading state, disabled state, and consistent styles.

4. Dynamic Color Themes

- Implement a utility to generate dynamic Tailwind classes for different theme colors (e.g., primary, success, danger) to make theming easier.

5. Better Toast Management

- Instead of manually showing a success toast, integrate a lightweight toast library like react-hot-toast or build a minimal custom toast component.

6. Image Preview Enhancements

- Show file size and type under each previewed image.

7. Accessibility (a11y) Improvements

- Improve focus styles for keyboard navigation.
- Add proper ARIA labels for upload buttons and form fields.
