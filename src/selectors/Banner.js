import React, { useContext, useReducer } from 'react';
import '../index.css'
import '../Styles/component/banner.css'
import QuickContext from '../context/quick-context';
import hideContentReducer from '../reducers/visability';
import { OTSBanner, TomballCR, TomballSL } from '../Banners/Banners';
const BannerSelector = () => {
    const { banner, setBanner } = useContext(QuickContext);
    const [bannerVisable, setBannerVisable] = useReducer(hideContentReducer, false)
    const tomballBannerCollegeRelations = () => {
        setBanner({
            type: 'TOMBALLCR'
        })
    }
    const tomballBannerStudentLife = () => {
        setBanner({
            type: 'TOMBALLSL'
        })
    }
    const otsBanner = () => {
        setBanner({
            type: 'OTS'
        })
    }
    const setBannerMenuVisableHide = (visable) => {
        setBannerVisable({
            type: 'HIDE_BANNER',
            visable
        })
    }
    const setBannerMenuVisableToggle = (visable) => {
        setBannerVisable({
            type: 'TOGGLE_BANNER',
            visable
        })
    }
    return (
        <div className="NoteApp">
            <img src={banner} className="App-logo" alt="banner" onClick={() => {
                setBannerMenuVisableToggle(bannerVisable)
            }} />
            {bannerVisable &&
                <div className="BannerMenu">
                    <img src={OTSBanner} className='Select-banner-OTS' alt='OTSBanner' onClick={() => {
                        setBannerMenuVisableHide()
                        otsBanner()
                    }} />
                    <img src={TomballSL} className='Select-banner-TomballSL' alt='TomballSL' onClick={() => {
                        setBannerMenuVisableHide()
                        tomballBannerStudentLife()
                    }} />
                    <img src={TomballCR} className='Select-banner-TomballCR' alt='TomballCR' onClick={() => {
                        setBannerMenuVisableHide()
                        tomballBannerCollegeRelations()
                    }} />
                </div>
            }
        </div>
    )
}
export { BannerSelector as default };