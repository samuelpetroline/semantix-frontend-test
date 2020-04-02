import styled from 'styled-components'

export const Aside = styled.aside`
    width: 108px;
    min-height: 100vh;
    background: linear-gradient(180deg, #0F4C81 -11.46%, #118ACA 87.25%);
`
export const AsideNav = styled.nav`
    height: 100%;
`

export const AsideList = styled.ul`
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const AsideListItem = styled.li`
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        font-size: 14px;
        line-height: 19px;
        color: ${props => props.active ? '#FFF' : '#ABE1FA'};
        cursor: pointer;

        &:last-of-type {
            margin-top: auto;
        }

        ${props => props.active && `
            background: #3a7eae;

            &:after {
                content: '';
                display: block;
                position: absolute;
                right: 0;
                left: 87%;
                top: 0;
                bottom: 0;
                background-color: #5791b9;
            }
        `}
`

export const AsideListItemIcon = styled.i`
        margin-bottom: 10px;
`

export const AsideLogo = styled.img`
    width: 100%;
    cursor: default;
`