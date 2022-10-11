import * as React from 'react'
//import Loading from '../Components/Loading'
import { useState } from 'react'
import {POSTPOLICYID} from '../actions'
import { useDispatch,useSelector } from 'react-redux'
import axios from "axios"
import { Link } from "react-router-dom";

const Home=()=>{

    const[input,setInput]=useState({policyid:""})
    const[error,setError]=useState(false)   
    const[loading,setLoading]=useState(false)
    const dispatch=useDispatch()
    const accounts=useSelector((state)=>state.rootReducer.accounts)

    console.log('las cuentas:', accounts)


    const validate=(ev)=>{
        if(ev.target.name==='policyid'){
            setInput((input)=>({...input,policyid:ev.target.value}))
          }
    }

    function checkAccounts(array,account){ 
        if(array.includes(account)){
            return true;
        }else{
            return false;
        }



    }


    function postPolicyId(e){ 
        e.preventDefault()
        setLoading(true);
        console.log(input)

        if(input.policyid===""){
            setError(true);
            setLoading(false)
            return;
        }

            dispatch(POSTPOLICYID(input)).then(async(r)=>{
                await console.log('r',r)
                setError(false);
                setLoading(false);
                if(r.error.name){setError(true);}
            })
            
    }

    return(
        <div >
            <div className="container">
                <header className="header">
                    <img src="images/IAMX_Logo_blue.png" alt="IAMX Logo" />
                    <h2>Check your NFT Identity</h2>
                    <form action="" className="inline">
                        <input value={input.policyid} name='policyid' onChange={(e)=>validate(e)} type="text" placeholder="Enter Policy ID, DID Method or Asset ID" />
                        <button onClick={(e)=>postPolicyId(e)} type="submit">{loading?'Loading...':'Check'}</button>
                    </form>
                    {
                        error? <p className='errorMsg'>invalid policy ID</p>: <></>
                    }
                </header>
                <div className="inline found">
                    <h1 className="item-number">06</h1>
                    <h1>Verifications Found</h1>
                </div>
                <div className="btn-grid">

                <a href={accounts.length!==0&&accounts.includes("twitter")?`https://twitter.com/${(accounts.find(element=>element.username!==undefined).username)}`:null}>
                    <button className={accounts.length===0||accounts.includes("twitter")?"gridItem":"greyGridItem"}>
                        <img src="images/social-button/twitter.png" width="20" height="20"/>
                            
                            <span className='buttonText'>
                                {accounts.includes("twitter")?accounts.find(element=>element.twitterId!==undefined).username:'Twitter'} 
                            </span>
                        {checkAccounts(accounts,'twitter')?
                        <div className='check'>
                            <img src="/images/check.png" width="20" height="20"/>  
                        </div>:
                        <></>
                        }
                    </button>
                </a>


                <a href={accounts.length!==0&&accounts.includes("facebook")?`https://facebook.com/${(accounts.find(element=>element.username!==undefined).username)}`:null}>    
                    <button className="gridItem">
                        <img src="images/social-button/facebook.png" width="20" height="20"/>
                        <span className='buttonText'> 
                            {accounts.includes("facebook")?accounts.find(element=>element.username!==undefined).username:'Facebook'} 
                        </span>
                        {checkAccounts(accounts,'facebook')?
                        <div className='check'>
                            <img src="/images/check.png" width="20" height="20"/>  
                        </div>:
                        <></>
                        }
                    </button>
                </a>

                <a href={accounts.length!==0&&accounts.includes("discord")?`https://discord.com/channel/${(accounts.find(element=>element.username!==undefined).username)}`:null}>    
                    <button className={accounts.length===0||accounts.includes("discord")?"gridItem":"greyGridItem"}>
                        <img src="images/social-button/discord.png" width="20" height="20"/>
                        <span className='buttonText'>
                            {accounts.includes("discord")?accounts.find(element=>element.discordId!==undefined).username:'Discord'} 
                        </span>
                        {checkAccounts(accounts,'discord')?
                        <div className='check'>
                            <img src="/images/check.png" width="20" height="20"/>  
                        </div>:
                        <></>
                        }
                    </button>
                </a>


                <a href={accounts.length!==0&&accounts.includes("github")?`https://github.com/${(accounts.find(element=>element.username!==undefined).username)}`:null}>
                    <button className={accounts.length===0||accounts.includes("github")?"gridItem":"greyGridItem"}>
                        <img src="images/social-button/github.png" width="20" height="20"/>
                        <span className='buttonText'> 
                            {accounts.includes("github")?accounts.find(element=>element.githubId!==undefined).username:'Github'} 
                        </span>
                        {checkAccounts(accounts,'github')?
                        <div className='check'>
                            <img src="/images/check.png" width="20" height="20"/>  
                        </div>:
                        <></>
                        }
                    </button>
                </a>

                <a href={accounts.length!==0&&accounts.includes("apple")?`https://apple/${(accounts.find(element=>element.username!==undefined).username)}`:null}>
                    <button className={accounts.length===0||accounts.includes("apple")?"gridItem":"greyGridItem"}>
                        <img src="images/social-button/apple.png" width="20" height="20"/>
                        <span className='buttonText'> 
                            {accounts.includes("apple")?accounts.find(element=>element.username!==undefined).username:'Apple'} 
                        </span>
                        {checkAccounts(accounts,'apple')?
                        <div className='check'>
                            <img src="/images/check.png" width="20" height="20"/>  
                        </div>:
                        <></>
                        }
                    </button>
                </a>

                <a href={accounts.length!==0&&accounts.includes("linkedin")?`https://linkedin.com/in/${(accounts.find(element=>element.username!==undefined).username)}`:null}>
                    <button className={accounts.length===0||accounts.includes("linkedin")?"gridItem":"greyGridItem"}>
                        <img src="images/social-button/linkedin.png" width="20" height="20"/>
                        <span className='buttonText'>
                            {accounts.includes("linkedin")?accounts.find(element=>element.linkedinId!==undefined).username:'Linkedin'} 
                        </span>
                        {checkAccounts(accounts,'linkedin')?
                        <div className='check'>
                            <img src="/images/check.png" width="20" height="20"/>  
                        </div>:
                        <></>
                        }
                    </button>
                </a>

                <a href={accounts.length!==0&&accounts.includes("twitch")?`https://twitch.tv/${(accounts.find(element=>element.username!==undefined).username)}`:null}>
                    <button className={accounts.length===0||accounts.includes("twitch")?"gridItem":"greyGridItem"}>
                        <img src="images/social-button/twitch.png" width="20" height="20"/>
                        <span className='buttonText'> 
                            {accounts.includes("twitch")?accounts.find(element=>element.twitchId!==undefined).username:'Twitch'} 
                        </span>
                        {checkAccounts(accounts,'twitch')?
                        <div className='check'>
                            <img src="/images/check.png" width="20" height="20"/>  
                        </div>:
                        <></>
                        }
                    </button>
                </a>


                <a href={accounts.length!==0&&accounts.includes("tiktok")?`https://tiktok/${(accounts.find(element=>element.username!==undefined).username)}`:null}>
                    <button className={accounts.length===0||accounts.includes("tiktok")?"gridItem":"greyGridItem"}>
                        <img src="images/social-button/tiktok.png" width="20" height="20"/>
                        <span className='buttonText'> 
                            {accounts.includes("tiktok")?accounts.find(element=>element.tiktokId!==undefined).username:'Tiktok'} 
                        </span>
                        {checkAccounts(accounts,'tiktok')?
                        <div className='check'>
                            <img src="/images/check.png" width="20" height="20"/>  
                        </div>:
                        <></>
                        }
                    </button>
                </a>  


                    <div className="showArea">
                        <input type="checkbox" id="showMore" className="checkbox" />
                        <div className="showMore">
                            <button className="gridItem"><img src="images/social-button/instagram.png" width="20" height="20"/>Instagram</button>
                            <button className="gridItem"><img src="images/social-button/paypal.png" width="20" height="20"/>Paypal</button>
                            <button className="gridItem"><img src="images/social-button/google.png" width="20" height="20"/>Google</button>
                            <button className="gridItem"><img src="images/social-button/youtube.png" width="20" height="20"/>YouTube</button>
                            <button className="gridItem"><img src="images/social-button/iamxid.png" width="20" height="20"/>IAMX ID</button>
                            <button className="gridItem"><img src="images/social-button/mailchimp.png" width="20" height="20"/>Mailchimp</button>
                            <button className="gridItem"><img src="images/social-button/microsoft.png" width="20" height="20"/>Microsoft</button>
                            <button className="gridItem"><img src="images/social-button/outlook.png" width="20" height="20"/>Outlook</button>
                            <button className="gridItem"><img src="images/social-button/reddit.png" width="20" height="20"/>Reddit</button>
                            <button className="gridItem"><img src="images/social-button/snapchat.png" width="20" height="20"/>Snapchat</button>
                            <button className="gridItem"><img src="images/social-button/steam.png" width="20" height="20"/>Steam</button>
                            <button className="gridItem"><img src="images/social-button/stripe.png" width="20" height="20"/>Stripe</button>
                        </div>
                        <br />
                        <label htmlFor="showMore">
                            <div className="dividerMore">
                                <hr width="1050px" align="left" />
                                <b>Show all &or;</b>
                            </div>
                            <div className="dividerLess">
                                <hr width="1050px" align="left" />
                                <b>Show less &and;</b>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="createIdentity">
                    <h1>Want to create an NFT Identity?</h1>
                    <p>By creating your NFT Identity you can verify your identity and prove creative ownership over NFT within
                        seconds - and you always stay in control of your data.</p>
                    <button>Create NFT Identity</button>
                </div>
            </div>

            <footer className="c-footer" id="footer">
                <div className="c-container">
                    <div className="c-footer__wrap">
                        <h1 className="footerTitle">Contact us for more information.</h1>
                        <p className="address">
                            <b>IAMX AG</b><br />
                            Dammstrasse 16<br />
                            CH-6300 Zug<br />
                            Switzerland
                        </p>
                    </div>
                    <div className="c-footer__wrap">
                        <a href="https://iamx.id/contact/" target="_blank"><button className="contactButton">Drop us a line</button></a>
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
    )
}
export default Home