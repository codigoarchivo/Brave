import { FC, forwardRef, HTMLProps } from 'react'

import Link from 'next/link'

import Button from '@mui/material/Button'

interface PropsButton {
    name: string,
    href: string,
    startIcon: any,
    color?: "primary" | "secondary",
    variant?: "text" | "outlined" | "contained" | undefined,
    size?: "small" | "medium" | "large" | undefined,
}

export const SomeButton: FC<PropsButton> = ({ href, startIcon, size, variant, name, color }) => {
    type ButtonProps = HTMLProps<HTMLButtonElement>

    const MyButton = forwardRef<HTMLButtonElement, ButtonProps>(({ onClick, href }, ref) => {
        return (
            <Button
                color={color}
                href={href}
                onClick={onClick}
                ref={ref}
                size={size}
                startIcon={startIcon}
                variant={variant}
            >
                {name}
            </Button>
        )
    })

    MyButton.displayName = 'MyButton';

    return (
        <Link href={href} passHref>
            <MyButton />
        </Link>
    )
}
