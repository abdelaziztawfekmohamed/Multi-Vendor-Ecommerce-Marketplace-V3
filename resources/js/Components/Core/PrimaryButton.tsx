import { ButtonHTMLAttributes } from "react";

export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={
                `btn btn-primary text-white/75 hover:text-white rounded-xl ` +
                className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
