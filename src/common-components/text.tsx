import styled from 'styled-components'

type TextType = {
    position?: 'absolute' | 'relative';
    color?: '#190B0D' | '#F0F6F7FF' | '#FC6C85';
    fs?: string;
    textAlign?: string;
    fw?: 400 | 500 | 600 | 'bold';
}

export const Text = styled.div<TextType>`
    font-size: ${props => props.fs};
    color: ${props => props.color};
    text-align: ${props => props.textAlign};
    position: ${props => props.position};
    font-weight: ${props => props.fw};
`