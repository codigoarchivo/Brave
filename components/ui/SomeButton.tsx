import { FC, forwardRef, HTMLProps } from 'react'

import Link from 'next/link'

import Button from '@mui/material/Button'

interface PropsButton {
    name: string,
    href: string,
    startIcon: any,
    variant?: "text" | "outlined" | "contained" | undefined,
    size?: "small" | "medium" | "large" | undefined,
}

export const SomeButton: FC<PropsButton> = ({ href, startIcon, size, variant, name }) => {
    type ButtonProps = HTMLProps<HTMLButtonElement>

    const MyButton = forwardRef<HTMLButtonElement, ButtonProps>(({ onClick, href }, ref) => {
        return (
            <Button size={size} className={'color'} variant={variant} startIcon={startIcon} href={href} onClick={onClick} ref={ref}>
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
