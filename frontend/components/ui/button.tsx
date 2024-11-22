import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
}, ref) => {
    return (
        <button
            className={cn(
                "w-auto rounded-full bg-black border border-transparent px-3 py-3 text-white transition hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            disabled={disabled}
            ref={ref}
            type={type}
            {...props}
        >
            {children}
        </button>
    );
});

Button.displayName = "Button";

export default Button;