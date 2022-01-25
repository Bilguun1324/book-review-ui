import styled from 'styled-components'

type BoxType = {
    width?: String | number;
    height?: String | number;
    m?: number;
    mt?: number;
    mb?: number;
    ml?: number;
    mr?: number;
    display?: 'flex' | 'none';
    justify?: 'center' | 'space-between' | 'space-around' | 'space-evenly';
    items?: 'center';
    position?: 'absolute' | 'relative' | 'block';
    background?: '#6CD6FC' | '#F0F6F7FF' | 'black' | 'white' | '#E6E61A';
    op?: number;
    direction?: 'column' | 'row';
    z?: number;
    wrap?: 'wrap' | 'no-wrap' | 'wrap-reverse';
    top?: number;
    bot?: number;
    right?: number;
    left?: number;
    cursor?: 'pointer'
}

export const Box = styled.div<BoxType>`
    width: ${props => `${props.width}`};
    height: ${props => `${props.height}`};
    display: ${props => props.display};
    flex-wrap: ${props => props.wrap};
    justify-content: ${props => props.justify};
    align-items: ${props => props.items};
    position: ${props => props.position};
    background-color: ${props => props.background};
    opacity: ${props => props.op};
    flex-direction: ${props => props.direction};
    z-index: ${props => props.z};
    margin: ${props => props.m + 'px'};
    margin-top: ${props => props.mt + 'px'};
    margin-left: ${props => props.ml + 'px'};
    margin-bottom: ${props => props.mb + 'px'};
    margin-right: ${props => props.mr + 'px'};
    top: ${props => props.top + 'px'};
    left: ${props => props.left + 'px'};
    bottom: ${props => props.bot + 'px'};
    right: ${props => props.right + 'px'};
    transition: width 1s;
    overflow: hidden;
    cursor: ${props => props.cursor}
`