import styled from 'styled-components'

type TextType = {
    position?: 'absolute' | 'relative';
    background?: '#669DB3FF' | '#F0F6F7FF';
    fs?: number;
    textAlign?: string;
}

export const Text = styled.div<TextType>`
    font-size: ${props => props.fs};
    color: ${props => props.color};
    text-align: ${props => props.textAlign};
    position: ${props => props.position};
`