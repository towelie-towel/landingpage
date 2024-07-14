'use client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    breakpoints: {
        base: '0em', // 0px
        sm: '30em', // ~480px. em is the GOAT.
        md: '48em', // ~768px
        lg: '62em', // ~992px
        xl: '80em', // ~1280px
        '2xl': '96em', // ~1536px
    },
    colors: {
        green: {
            50: "#F0FFF4",
            100: "#C6F6D5",
            200: "#0AC05E",
            300: "#68D391",
            400: "#48BB78",
            500: "#38A169",
            600: "#2F855A",
            700: "#276749",
            800: "#22543D",
            900: "#1C4532",
        },
    },
})

export function Providers({ children }: { children: React.ReactNode }) {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}