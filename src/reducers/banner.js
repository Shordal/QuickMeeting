import tommballBanner from '../images/TomballBanner.png';
import OTSBanner from '../images/OTS-Banner.svg';
import TomballCR from '../images/LSCT-CollegeRelations-Banner.svg';
import TomballSL from '../images/LSCT-StudentLife-Banner.svg'

const bannerReducer = (state, action) => {
    switch (action.type) {
        case 'OTS':
            return action.banner = OTSBanner
        case 'TOMBALL':
            return action.banner = tommballBanner
        case 'TOMBALLCR':
            return action.banner = TomballCR
        case 'TOMBALLSL':
            return action.banner = TomballSL
        default:
            return state
    }
};
export { bannerReducer as default };