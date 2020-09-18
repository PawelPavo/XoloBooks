import * as React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { FiTwitter, FiFacebook } from 'react-icons/fi';
import { ImCircleDown } from 'react-icons/im';
import styled from 'styled-components';


const Footer: React.FC<IFooter> = () => {

    return (
        <>
            <div className="row d-flex justify-content-center">
                <h6>Share - Amor - Follow</h6>
            </div>
            <div className="row d-flex justify-content-center my-3">
                <h1><ImCircleDown /></h1>
            </div>
            <div className="row justify-content-center pb-3">
                <Icon>
                    <a target="_blank" href="https://www.instagram.com/xolobooks/"><FaInstagram /></a>
                </Icon>
                <Icon>
                    <a target="_blank" href="https://twitter.com/XoloBooks"><FiTwitter /></a>
                </Icon>
                <Icon>
                    <a target="_blank" href="https://www.facebook.com/Xolo-Books-112647723872768/"><FiFacebook /></a>
                </Icon>
            </div>
            <hr/>
            <div className="text-center">
                <small className="">
                    <a target="_blank" href="https://damp-headland-11870.herokuapp.com/"> Made with ❤️ by Pawel Jaskolski</a>
                </small>
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