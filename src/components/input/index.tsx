import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { FieldValues, UseFormGetValues, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';

const SWrapper = styled.div`
    width: 100%;
    margin-bottom: 18px;
    display: flex;
    position: relative;
`;

const SLabel = styled.label`
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.font.size.small};
    position: absolute;
    top: -16px;
    left: 8px;
`;

const SInput = styled.input`
    margin: 6px 0 12px;
    width: 100%;
    padding: 16px 12px;
    border-radius: ${({ theme }) => theme.borderRadius};
    background: none;
    border: solid 1px ${({ theme }) => theme.colors.darkGreen};
    color: ${({ theme }) => theme.colors.white};

    &:focus {
        outline-color: ${({ theme }) => theme.colors.primary};
    }

    &:-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:focus,
    :-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.darkGreen} inset !important;
        -webkit-text-fill-color: ${({ theme }) => theme.colors.white} !important;
        -webkit-border: none !important;
    }
`;

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    register: UseFormRegister<FieldValues>;
    getValues: UseFormGetValues<FieldValues>;
}

export const Input = ({ placeholder, register, getValues, name, type }: Props) => {
    return (
        <SWrapper>
            <SLabel htmlFor={name}>{name}</SLabel>
            <SInput
                type={type}
                placeholder={placeholder}
                {...register(name)}
                onChange={() => getValues(name)}
            />
        </SWrapper>
    );
};