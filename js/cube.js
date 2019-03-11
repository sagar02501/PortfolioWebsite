var touchstartX = 0;
    var touchstartY = 0;
    var touchendX = 0;
    var touchendY = 0;
    var hrCurrImage = 0;
    var vrCurrImage = 0;
    var horizontal = 0;
    var lastScrollTop = 0;
    var handler;
    var i = 1;

    var gesuredZone = document.getElementById('cubeSides');
    var front = document.getElementById('od');
    var right = document.getElementById('sh');
    var back = document.getElementById('mn');
    var expD = document.getElementsByClassName('exp-duration');
    var expT = document.getElementsByClassName('exp-title');

    gesuredZone.addEventListener('touchstart', function(event) {
        touchstartX = event.changedTouches[0].screenX;
        touchstartY = event.changedTouches[0].screenY;
    }, false);

    gesuredZone.addEventListener('touchend', function(event) {
        touchendX = event.changedTouches[0].screenX;
        touchendY = event.changedTouches[0].screenY;
        handleGesure();
    }, false); 

    // window.addEventListener("mousewheel", handler = function(event){
    //     var motion = event.wheelDelta;
    //     console.log("motion: "+motion);
    //     // var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    //     // console.log(st);   
    //     if (motion == 180 ||(motion >= 1 && motion < 4)){
    //         // downscroll code
    //         console.log("down");
    //         vrCurrImage++;
    //         console.log(vrCurrImage);
    //     //    if(vrCurrImage){
    //     //         gesuredZone.style.webkitTransform = `rotateX(${vrCurrImage * -90}deg)`;
    //     //    }
    //     } else if (motion == -180 ||(motion > -4 && motion <= -1)) {
    //        // upscroll code
    //        console.log("up");
    //        vrCurrImage--;
    //        console.log(vrCurrImage);
    //     //    if(vrCurrImage){
    //     //         gesuredZone.style.webkitTransform = `rotateX(${vrCurrImage * -90}deg)`;

    //     //    }
    //     }
    //     gesuredZone.style.webkitTransform = `rotateX(${vrCurrImage * -90}deg)`;
    //     // lastScrollTop = st;
    //  }, false);


    function handleGesure() {
        // var swiped = 'swiped: ';
        
        var diffX = Math.abs(touchendX - touchstartX);
        var diffY = Math.abs(touchendY - touchstartY);

        if ((touchendX < touchstartX) && (diffX > diffY)) {
            // console.log(swiped + 'left!');
            hrCurrImage++;
            // console.log(hrCurrImage);
            horizontal = 1;

        }
        if ((touchendX > touchstartX) &&  (diffX > diffY)) {
            // console.log(swiped + 'right!');
            hrCurrImage--;
            console.log(hrCurrImage);
            horizontal = 1;
        }
        if ((touchendY < touchstartY) &&  (diffX < diffY)) {
            // console.log(swiped + 'down!');
            vrCurrImage--;
            horizontal = 0;
        }
        if ((touchendY > touchstartY) &&  (diffX < diffY)) {
            // console.log(swiped + 'up!');
            vrCurrImage++;
            horizontal = 0;
        }
        if (touchendY == touchstartY) {
            // console.log('tap!');
        }

        if(horizontal)
            rotateCube(hrCurrImage - 1);
            // gesuredZone.style.webkitTransform = `rotateY(${hrCurrImage * -90}deg)`;
        // else
        //     gesuredZone.style.webkitTransform = `rotateX(${vrCurrImage * -90}deg)`;
            // gesuredZone.style.webkitTransform = `rotate3d(1,0,0,${vrCurrImage * -90}deg)`;
        
    }

    function rotateCube(val) {
        gesuredZone.style.webkitTransform = `rotateY(${val * -90}deg)`;
        val = Math.abs(val);
        if(val == 0) {
            front.classList.add("active");
            right.classList.remove("active");
            back.classList.remove("active");
        }
        if(val == 1) {
            front.classList.remove("active");
            right.classList.add("active");
            back.classList.remove("active");
        }
        if(val == 2) {
            front.classList.remove("active");
            right.classList.remove("active");
            back.classList.add("active");
        }

        if(val == 3) val = 1;
        expD[val%4].style.webkitTransform = `translate(-50%)`;
        expT[val%4].style.webkitTransform = `translate(-50%)`;
    }

    // function clickedFace(event) {
    //     var target = event.target || event.srcElement || event.currentTarget;
    //     let idValue;
    //     this.clickedFaceNum++;
    //     for(let i=0;i<10;i++){
    //         var idAttr = target.attributes.id;
    
    //             if(idAttr == null || idAttr == undefined )
    //             {
    //                 target = target.parentNode;
    //             }
    //             else{
    //                 idValue = idAttr.nodeValue;
    //                 break;
    //             }
    //     }
    //     console.log("clickedFace: "+idValue);
    //     if((this.clickedFaceNum)%2 != 0){
    //         this.css(document.querySelector("#boxDiv div#"+idValue),{ opacity: 1,width: '75vw',height:'75vh'});
    //         // $("#boxDiv div#"+idValue).css({ opacity: 1,width: '75vw',height:'100vh'});
    //     }
    //     else{
    //         this.css(document.querySelector("#boxDiv div#"+idValue),{  opacity: 0.8,width: '75vw',height: '75vw' });
    //         // $("#boxDiv div#"+idValue).css({ opacity: 0.8,width: '75vw',height: '75vw' });
    //         // $("#boxDiv").css({ 'margin-left': '0' });
    //     }
    // }
    
    // function css(el, styles) {
    //     for (var property in styles)
    //         el.style[property] = styles[property];
    //     }