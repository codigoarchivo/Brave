import { FC, forwardRef, HTMLProps, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import { UIContext } from '../../context/ui';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

interface PropsButton {
    name?: string | ReactJSXElement,
    href?: any,
    startIcon?: any,
    color?: any,
    variant?: any,
    size?: "small" | "medium" | "large" | undefined,
}

type ButtonProps = HTMLProps<HTMLButtonElement>

export const SomeButton: FC<PropsButton> = ({ href, startIcon, size, variant, name, color }) => {
    const { lineProgressMenu, lineProgress } = useContext(UIContext);
    const { asPath } = useRouter();
    const progress = () => {
        lineProgressMenu()
        // dos segundos vuelve a false
        setTimeout(() => lineProgressMenu(), 2000);
    };

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
        <Link href={!lineProgress ? href : asPath} passHref>
            <MyButton onClick={progress} />
        </Link>
    )

}
