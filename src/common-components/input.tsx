import styled from 'styled-components';

type InputType = {
    position?: 'absolute' | 'relative';
    background?: '#669DB3FF' | '#F0F6F7FF';
    display?: 'flex' | 'none';
}

export const Input = styled.input<InputType>`
    background-color: ${props => props.background};
    width: ${props => props.width};
    height: ${props => props.height};
    position: ${props => props.position};
    display: ${props => props.display};
`