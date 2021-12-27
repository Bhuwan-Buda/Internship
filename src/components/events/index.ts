import React from "react";

export type buttonProps = {
    handleClick : (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

export type inputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export type containerProps = {
    styles: React.CSSProperties
}
