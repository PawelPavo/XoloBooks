import * as React from 'react'
import {  FaInstagram } from 'react-icons/fa';
import { FiMail, FiTwitter, FiFacebook } from 'react-icons/fi';
import styled from 'styled-components';


const Footer: React.FC<IFooter> = () => {

    return (
        <>
            <div className="row justify-content-center fixed-bottom pb-3">
                <Icon>
                    <a target="_blank" href="https://www.instagram.com/xolobooks/"><FaInstagram /></a>
                </Icon>
                <Icon>
                    <a target="_blank" href="https://twitter.com/XoloBooks"><FiTwitter /></a>
                </Icon>
                <Icon>
                    <a target="_blank" href="https://www.facebook.com/Xolo-Books-112647723872768/"><FiFacebook /></a>
                </Icon>
                {/* <Icon>
                    <a target="_blank" href="mailto:pjpavo@gmail.com"><FiMail /></a>
                </Icon> */}
            </div>
        </>
    )
}

const Icon = styled.div`
    font-size: 35px;
    margin-left: 25px;
    margin-right: 25px;
`;

export interface IFooter {
}
export default Footer;