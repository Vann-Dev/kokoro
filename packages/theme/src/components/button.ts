import { VariantProps, tv } from "tailwind-variants";

const button = tv({
    base: "font-medium px-6 py-3 rounded-full enabled:hover:opacity-80 transition-opacity duration-100 disabled:opacity-80 text-white",
    variants: {
        variant: {
            primary: "bg-primary",
            secondary: "bg-secondary",
            outline: "border-primary border-2",
            danger: "bg-danger",
            warning: "bg-warning",
            ghost: "bg-transparent",
            link: "hover:underline"
        }
    },
    defaultVariants: {
        variant: "primary"
    }
});

export type ButtonVariantProps = VariantProps<typeof button>;

export { button };
