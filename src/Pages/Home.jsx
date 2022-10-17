import * as React from 'react'
//import Loading from '../Components/Loading'
import { useState } from 'react'
import { POSTPOLICYID } from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios"
import { Link } from "react-router-dom";

const Home = () => {

    const [input, setInput] = useState({ policyid: "" })
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const accounts = useSelector((state) => state.rootReducer.accounts)
    const payload = useSelector((state) => state.rootReducer.payload)

    console.log('las accounts:', accounts)
    console.log('las payload:', payload)


    const validate = (ev) => {
        if (ev.target.name === 'policyid') {
            setInput((input) => ({ ...input, policyid: ev.target.value }))
        }
    }

    function checkAccounts(array, account) {
        if (array.includes(account)) {
            return true;
        } else {
            return false;
        }
    }


    function postPolicyId(e) {
        e.preventDefault()
        setLoading(true);
        console.log(input)

        if (input.policyid === "") {
            setError(true);
            setLoading(false)
            return;
        }

        dispatch(POSTPOLICYID(input)).then(async (r) => {
            await console.log('r', r)
            setError(false);
            setLoading(false);
            if (r.error.name) { setError(true); }
        })
    }


    return (
        <div >
            <header className="header">
                <meta name="viewport" content="width=device-width, initial-scale=0.5" />
                <nav id="header" className="headernav">
                    <div className="logo-desktop">

                        <img src="images/iamxblue.png" className="headerimg" />


                    </div>
                </nav>


            </header>
            <div className="wrapper">
                <div className="container">

                    <div className="headerform">
                        <img src="images/IAMX_Logo_blue.png" alt="IAMX Logo" />
                        <h1>Check your NFT Identity</h1>
                        <form action="" className="inline">
                            <input value={input.policyid} name='policyid' onChange={(e) => validate(e)} type="text" placeholder="Enter PolicyID or IPFS Hash" />
                            <button onClick={(e) => postPolicyId(e)} type="submit">{loading ? 'Loading...' : 'Check'}</button>
                        </form>
                        {
                            error ? <p className='errorMsg'>invalid policy ID</p> : <></>
                        }
                    </div>
                    <div className="inline found">
                        <h2>Verifications Found</h2>
                    </div>

                    <div className="btn-grid">

                        <a href={accounts.length !== 0 && accounts.includes("twitter") ? `https://twitter.com/${(accounts.find(element => element.username !== undefined).username)}` : null}>
                            <button className={accounts.length === 0 || accounts.includes("twitter") ? "gridItem" : "greyGridItem"}>
                                <img src="images/social-button/twitter.png" width="20" height="20" />

                                <span className='buttonText'>
                                    {accounts.includes("twitter") ? accounts.find(element => element.twitterId !== undefined).username : 'Twitter'}
                                </span>
                                {checkAccounts(accounts, 'twitter') ?
                                    <div className='check'>
                                        <img src="/images/check.png" width="20" height="20" />
                                    </div> :
                                    <></>
                                }
                            </button>
                        </a>


                        <a href={accounts.length !== 0 && accounts.includes("facebook") ? `https://facebook.com/${(accounts.find(element => element.username !== undefined).username)}` : null}>
                            <button className={accounts.length === 0 || accounts.includes("facebook") ? "gridItem" : "greyGridItem"}>
                                <img src="images/social-button/facebook.png" width="20" height="20" />
                                <span className='buttonText'>
                                    {accounts.includes("facebook") ? accounts.find(element => element.username !== undefined).username : 'Facebook'}
                                </span>
                                {checkAccounts(accounts, 'facebook') ?
                                    <div className='check'>
                                        <img src="/images/check.png" width="20" height="20" />
                                    </div> :
                                    <></>
                                }
                            </button>
                        </a>

                        <a href={accounts.length !== 0 && accounts.includes("discord") ? `https://discord.com/channel/${(accounts.find(element => element.username !== undefined).username)}` : null}>
                            <button className={accounts.length === 0 || accounts.includes("discord") ? "gridItem" : "greyGridItem"}>
                                <img src="images/social-button/discord.png" width="20" height="20" />
                                <span className='buttonText'>
                                    {accounts.includes("discord") ? accounts.find(element => element.discordId !== undefined).username : 'Discord'}
                                </span>
                                {checkAccounts(accounts, 'discord') ?
                                    <div className='check'>
                                        <img src="/images/check.png" width="20" height="20" />
                                    </div> :
                                    <></>
                                }
                            </button>
                        </a>

                        <a href={accounts.length !== 0 && accounts.includes("github") ? `https://github.com/${(accounts.find(element => element.username !== undefined).username)}` : null}>
                            <button className={accounts.length === 0 || accounts.includes("github") ? "gridItem" : "greyGridItem"}>
                                <img src="images/social-button/github.png" width="20" height="20" />
                                <span className='buttonText'>
                                    {accounts.includes("github") ? accounts.find(element => element.githubId !== undefined).username : 'Github'}
                                </span>
                                {checkAccounts(accounts, 'github') ?
                                    <div className='check'>
                                        <img src="/images/check.png" width="20" height="20" />
                                    </div> :
                                    <></>
                                }
                            </button>
                        </a>

                        <a href={accounts.length !== 0 && accounts.includes("apple") ? `https://apple/${(accounts.find(element => element.username !== undefined).username)}` : null}>
                            <button className={accounts.length === 0 || accounts.includes("apple") ? "gridItem" : "greyGridItem"}>
                                <img src="images/social-button/apple.png" width="20" height="20" />
                                <span className='buttonText'>
                                    {accounts.includes("apple") ? accounts.find(element => element.username !== undefined).username : 'Apple'}
                                </span>
                                {checkAccounts(accounts, 'apple') ?
                                    <div className='check'>
                                        <img src="/images/check.png" width="20" height="20" />
                                    </div> :
                                    <></>
                                }
                            </button>
                        </a>

                        <a href={accounts.length !== 0 && accounts.includes("linkedin") ? `https://linkedin.com/in/${(accounts.find(element => element.username !== undefined).username)}` : null}>
                            <button className={accounts.length === 0 || accounts.includes("linkedin") ? "gridItem" : "greyGridItem"}>
                                <img src="images/social-button/linkedin.png" width="20" height="20" />
                                <span className='buttonText'>
                                    {accounts.includes("linkedin") ? accounts.find(element => element.linkedinId !== undefined).username : 'Linkedin'}
                                </span>
                                {checkAccounts(accounts, 'linkedin') ?
                                    <div className='check'>
                                        <img src="/images/check.png" width="20" height="20" />
                                    </div> :
                                    <></>
                                }
                            </button>
                        </a>

                        <a href={accounts.length !== 0 && accounts.includes("twitch") ? `https://twitch.tv/${(accounts.find(element => element.username !== undefined).username)}` : null}>
                            <button className={accounts.length === 0 || accounts.includes("twitch") ? "gridItem" : "greyGridItem"}>
                                <img src="images/social-button/twitch.png" width="20" height="20" />
                                <span className='buttonText'>
                                    {accounts.includes("twitch") ? accounts.find(element => element.twitchId !== undefined).username : 'Twitch'}
                                </span>
                                {checkAccounts(accounts, 'twitch') ?
                                    <div className='check'>
                                        <img src="/images/check.png" width="20" height="20" />
                                    </div> :
                                    <></>
                                }
                            </button>
                        </a>


                        <a href={accounts.length !== 0 && accounts.includes("tiktok") ? `https://tiktok/${(accounts.find(element => element.username !== undefined).username)}` : null}>
                            <button className={accounts.length === 0 || accounts.includes("tiktok") ? "gridItem" : "greyGridItem"}>
                                <img src="images/social-button/tiktok.png" width="20" height="20" />
                                <span className='buttonText'>
                                    {accounts.includes("tiktok") ? accounts.find(element => element.tiktokId !== undefined).username : 'Tiktok'}
                                </span>
                                {checkAccounts(accounts, 'tiktok') ?
                                    <div className='check'>
                                        <img src="/images/check.png" width="20" height="20" />
                                    </div> :
                                    <></>
                                }
                            </button>
                        </a>


                        <div className="showArea">
                            <input type="checkbox" id="showMore" className="checkbox" />
                            <div className="showMore">

                            </div>
                            <br />
                            <label htmlFor="showMore">
                                <div className="dividerMore">
                                    <hr width="90%" align="center" />
                                    <b>Show all &or;</b>
                                </div>
                                <div className="dividerLess">
                                    <hr width="90%" align="center" />
                                    <b>Show less &and;</b>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="payload">
                        <form>
                            <textarea id="did" className={payload ? "textArea" : "textAreahidden"} value={JSON.stringify(payload, undefined, 4)} readOnly />
                        </form>
                    </div>

                    <div className="createIdentity">
                        <h1>Want to create an NFT Identity?</h1>
                        <p>By creating your NFT Identity you can verify your identity and prove creative ownership over NFT within
                            seconds - and you always stay in control of your data.</p>
                        <a href="https://nftidentity.iamx.id/"><button>Create NFT Identity</button></a>
                    </div>
                </div>

                <footer className="c-footer" id="footer">
                    <div className="c-container">
                        <div className="c-footer__wrap">
                            <h1 className="footerTitle">Contact us for more information.</h1>

                        </div>
                        <div className="c-footer__wrap2">
                            <div className='adressDropButton'>
                                <a href="https://iamx.id/contact/" target="_blank"><button className="contactButton">Drop us a line</button></a>
                                <p className="address">
                                    <b>IAMX AG</b><br />
                                    Dammstrasse 16<br />
                                    CH-6300 Zug<br />
                                    Switzerland
                                </p>
                            </div>
                            <div className="footer-social">
                                <div className="holder">
                                    <a href="https://ch.linkedin.com/company/iamx-ag">
                                        <img className="icon-linkedin" src="images/footer/footer_icon_linkedin.png" />
                                    </a>
                                </div>
                                <div className="holder">
                                    <a href="https://medium.com/@IAMX-AG">
                                        <img className="icon-2" src="images/footer/footer_icon_2.png" />
                                    </a>
                                </div>
                                <div className="holder">
                                    <a href="https://twitter.com/iam_x_identity">
                                        <img className="icon-twitter" src="images/footer/footer_icon_twitter.png" />
                                    </a>
                                </div>
                                <div className="holder">
                                    <a href="https://t.me/+aVdKFy7xPmsxMzky">
                                        <img className="icon-telegram" src="images/footer/footer_icon_telegram.png" />
                                    </a>
                                </div>
                                <div className="holder">
                                    <a href="https://discord.com/invite/GhXnsRYRuJ">
                                        <img className="icon-discord" src="images/footer/footer_icon_discord.png" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="c-footer__wrap">
                            <a href="https://iamx.id/imprint/" target="_blank">Imprint</a>
                            <a href="https://iamx.id/privacypolicy/" target="_blank">Privacy Policy</a>
                            <p>Copyright 2022 IAMX AG</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
export default Home