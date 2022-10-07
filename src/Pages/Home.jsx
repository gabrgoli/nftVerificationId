import * as React from 'react'
//import Loading from '../Components/Loading'
import { useState } from 'react'
import {POSTPOLICYID} from '../actions'
import { useDispatch,useSelector } from 'react-redux'
import axios from "axios"

const Home=()=>{

    const[input,setInput]=useState({policyid:""})
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
        console.log(input)

        
        dispatch(POSTPOLICYID(input)).then(async(r)=>{
          //  console.log('hay facebook?',checkAccounts(r.payload.accounts,'facebook')) 
          await console.log('accounts',accounts)
        
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
                        <button onClick={(e)=>postPolicyId(e)} type="submit">Check</button>
                    </form>
                </header>
                <div className="inline found">
                    <h1 className="item-number">06</h1>
                    <h1>Verifications Found</h1>
                </div>
                <div className="btn-grid">
                    <button className="gridItem">
                        <img src="images/social-button/twitter.png" width="20" height="20"/>
                        Twitter 
                        {checkAccounts(accounts,'twitter')?
                        <div className='check'>
                            <img src="/images/check.png" width="20" height="20"/>  
                        </div>:
                        <></>
                        }
                    </button>
                    
                    <button className="gridItem">
                        <img src="images/social-button/facebook.png" width="20" height="20"/>
                        Facebook
                        {checkAccounts(accounts,'facebook')?
                        <div className='check'>
                            <img src="/images/check.png" width="20" height="20"/>  
                        </div>:
                        <></>
                        }
                    </button>
                    
                    <button className="gridItem">
                        <img src="images/social-button/discord.png" width="20" height="20"/>
                        Discord
                        {checkAccounts(accounts,'discord')?
                        <div className='check'>
                            <img src="/images/check.png" width="20" height="20"/>  
                        </div>:
                        <></>
                        }
                    </button>


                    <button className="gridItem">
                        <img src="images/social-button/github.png" width="20" height="20"/>
                        Github
                        {checkAccounts(accounts,'github')?
                        <div className='check'>
                            <img src="/images/check.png" width="20" height="20"/>  
                        </div>:
                        <></>
                        }
                    </button>


                    <button className="gridItem">
                        <img src="images/social-button/apple.png" width="20" height="20"/>
                        Apple
                        {checkAccounts(accounts,'apple')?
                        <div className='check'>
                            <img src="/images/check.png" width="20" height="20"/>  
                        </div>:
                        <></>
                        }
                    </button>


                    <button className="gridItem">
                        <img src="images/social-button/linkedin.png" width="20" height="20"/>
                        LinkedIn
                        {checkAccounts(accounts,'linkedin')?
                        <div className='check'>
                            <img src="/images/check.png" width="20" height="20"/>  
                        </div>:
                        <></>
                        }
                    </button>

                    <button className="gridItem">
                        <img src="images/social-button/twitch.png" width="20" height="20"/>
                        Twitch
                        {checkAccounts(accounts,'twitch')?
                        <div className='check'>
                            <img src="/images/check.png" width="20" height="20"/>  
                        </div>:
                        <></>
                        }
                    </button>

                    <button className="gridItem">
                        <img src="images/social-button/tiktok.png" width="20" height="20"/>
                        TikTok
                        {checkAccounts(accounts,'tiktok')?
                        <div className='check'>
                            <img src="/images/check.png" width="20" height="20"/>  
                        </div>:
                        <></>
                        }
                    </button>


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