import styled from 'styled-components'

type BoxType = {
    width?: String | number;
    height?: String | number;
    display?: 'flex' | 'none';
    justify?: 'center' | 'space-between' | 'space-around' | 'space-evenly';
    items?: 'center';
    position?: 'absolute' | 'relative';
    background?: '#669DB3FF' | '#F0F6F7FF' | 'black' | 'white';
    op?: number;
    direction?: 'column' | 'row';
    z?: number;
}

export const Box = styled.div<BoxType>`
    width: ${props => `${props.width}`};
    height: ${props => `${props.height}`};
    display: ${props => props.display};
    justify-content: ${props => props.justify};
    align-items: ${props => props.items};
    position: ${props => props.position};
    background-color: ${props => props.background};
    opacity: ${props => props.op};
    flex-direction: ${props => props.direction};
    z-index: ${props => props.z};
`