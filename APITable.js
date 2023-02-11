window.onload = function () {
    let div1 = document.getElementsByClassName("use-tab-container");
    let tab1 = div1[0].getElementsByTagName("div");
    let div2 = document.getElementsByClassName("use-banner-wrapper");
    let banner1 = div2[0].getElementsByTagName("div");
    for (let i = 0; i < tab1.length; i++) {
        tab1[i].onmouseover = function () {
            for (let m = 0; m < tab1.length; m++) {
                tab1[m].className = "use-tab";
            }
            tab1[i].className = "use-tab-active";
            for (let n = 0; n < banner1.length; n++) {
                banner1[n].className = "use-banner-container";
            }
            banner1[i].className = "use-banner-container-active";
        }
    }
    let div3 = document.getElementsByClassName("peer-tab-container");
    let tab2 = div3[0].getElementsByTagName("div");
    let div4 = document.getElementsByClassName("peer-banner-wrapper");
    let banner2 = div4[0].children;
    for (let j = 0; j < tab2.length; j++) {
        tab2[j].onmouseover = function () {
            for (let k = 0; k < tab2.length; k++) {
                tab2[k].className = "peer-tab";
            }
            this.className = "peer-tab-active";
            for (let u = 0; u < banner2.length; u++) {
                banner2[u].className = "peer-banner-container";
            }
            banner2[j].className = "peer-banner-container-active";
        }
    }
}
