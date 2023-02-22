const PAGE = {
    data: 0,
    init: function () {
        this.bind();
    },
    bind: function () {
        let useTabContainer = document.getElementById("use-tab-container");
        let useTab = document.getElementsByClassName('use-tab');
        let useBannerContainer = document.getElementsByClassName('use-banner-container');
        for (let i = 0; i < useTab.length; i++) {
            useTab[i].setAttribute('data-index', i)
            useBannerContainer[i].setAttribute('data-index', i)
        }
        useTabContainer.addEventListener('mouseover', this.changeTab)
    },
    changeTab: function (e) {
        if (e.target.className == 'use-tab') {
            let useTab = document.getElementsByClassName('use-tab');
            let useBannerContainer = document.getElementsByClassName('use-banner-container');
            useTab[PAGE.data].className = 'use-tab'
            useBannerContainer[PAGE.data].className = 'use-banner-container'
            e.target.className += ' active'
            let key = e.target.dataset.index
            useBannerContainer[key].className += ' active'
            PAGE.data = key
        }
    },
}

PAGE.init();






// 正确思路：
// 1.[0]有active
// 2.e.target加active，记住编号i
// 3.[0]删掉active
// 4.[i]有active
// 5.e.target加active，记住编号j
// 6.[i]删掉active
// 其实又是用空间换时间，每次都记住，就不用每次都遍历去找了。
// data：里面记住有active的编号m




        // 答案一 不及格
        // let useTab = document.getElementsByClassName("use-tab");
        // let useBannerContainer = document.getElementsByClassName("use-banner-container");
        // for (let i = 0; i < useTab.length; i++) {
        //     useTab[i].addEventListener('mouseover', function (event) {
        //         for (let m = 0; m < useTab.length; m++) {
        //             useTab[m].className = "use-tab";
        //         }
        //         useTab[i].className = "use-tab active";
        //         for (let n = 0; n < useBannerContainer.length; n++) {
        //             useBannerContainer[n].className = "use-banner-container";
        //         }
        //         useBannerContainer[i].className = "use-banner-container active";
        //     })
        // }
        // let peerTab = document.getElementsByClassName("peer-tab");
        // let peerBannerContainer = document.getElementsByClassName("peer-banner-container");
        // for (let j = 0; j < peerTab.length; j++) {
        //     peerTab[j].addEventListener('mouseover', function (event) {
        //         for (let k = 0; k < peerTab.length; k++) {
        //             peerTab[k].className = "peer-tab";
        //         }
        //         peerTab[j].className = "peer-tab active";
        //         for (let u = 0; u < peerBannerContainer.length; u++) {
        //             peerBannerContainer[u].className = "peer-banner-container";
        //         }
        //         peerBannerContainer[j].className = "peer-banner-container active";
        //     })
        // }


        // window.onload = function () {
//     let useTabContainer = document.getElementsByClassName("use-tab-container");
//     let useTab = useTabContainer[0].getElementsByTagName("div");
//     let useBannerWrapper = document.getElementsByClassName("use-banner-wrapper");
//     let useBannerContainer = useBannerWrapper[0].getElementsByTagName("div");
//     for (let i = 0; i < useTab.length; i++) {
//         useTab[i].onmouseover = function () {
//             for (let m = 0; m < useTab.length; m++) {
//                 useTab[m].className = "use-tab";
//             }
//             useTab[i].className = "use-tab active";
//             for (let n = 0; n < useBannerContainer.length; n++) {
//                 useBannerContainer[n].className = "use-banner-container";
//             }
//             useBannerContainer[i].className = "use-banner-container active";
//         }
//     }
//     let peerTabContainer = document.getElementsByClassName("peer-tab-container");
//     let peerTab = peerTabContainer[0].getElementsByTagName("div");
//     let peerBannerWrapper = document.getElementsByClassName("peer-banner-wrapper");
//     let peerBannerContainer = peerBannerWrapper[0].children;
//     for (let j = 0; j < peerTab.length; j++) {
//         peerTab[j].onmouseover = function () {
//             for (let k = 0; k < peerTab.length; k++) {
//                 peerTab[k].className = "peer-tab";
//             }
//             this.className = "peer-tab active";
//             for (let u = 0; u < peerBannerContainer.length; u++) {
//                 peerBannerContainer[u].className = "peer-banner-container";
//             }
//             peerBannerContainer[j].className = "peer-banner-container active";
//         }
//     }
// }