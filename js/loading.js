$(function () {
    var num=0;
var img1=new Image();
    img1.src="./images/a1.png";
    img1.onload=function () {
        num++;
    }
    var img2=new Image();
    img2.src="./images/a2.png";
    img2.onload=function () {
        num++;
    }
    var img3=new Image();
    img3.src="./images/a3.png";
    img3.onload=function () {
        num++;
    }
    var img4=new Image();
    img4.src="./images/a4.png";
    img4.onload=function () {
        num++;
    }
    var img5=new Image();
    img5.src="./images/b1.png";
    img5.onload=function () {
        num++;
    }
    var img6=new Image();
    img6.src="./images/b2.png";
    img6.onload=function () {
        num++;
    }
    var img7=new Image();
    img7.src="./images/b3.png";
    img7.onload=function () {
        num++;
    }
    var img8=new Image();
    img8.src="./images/b4.png";
    img8.onload=function () {
        num++;
    }
    var img9=new Image();
    img9.src="./images/c1.png";
    img9.onload=function () {
        num++;
    }
    var img10=new Image();
    img10.src="./images/c2.png";
    img10.onload=function () {
        num++;
    }
    var img11=new Image();
    img11.src="./images/c3.png";
    img11.onload=function () {
        num++;
    }
    var img12=new Image();
    img12.src="./images/c4.png";
    img12.onload=function () {
        num++;
    }
    var img13=new Image();
    img13.src="./images/d1.png";
    img13.onload=function () {
        num++;
    }
    var img14=new Image();
    img14.src="./images/d2.png";
    img14.onload=function () {
        num++;
    }
    var img15=new Image();
    img15.src="./images/d3.png";
    img15.onload=function () {
        num++;
    }
    var img16=new Image();
    img16.src="./images/d4.png";
    img16.onload=function () {
        num++;
    }
    var img17=new Image();
    img17.src="./images/e1.png";
    img17.onload=function () {
        num++;
    }
    var img18=new Image();
    img18.src="./images/e2.png";
    img18.onload=function () {
        num++;
    }
    var img19=new Image();
    img19.src="./images/e3.png";
    img19.onload=function () {
        num++;
    }
    var img20=new Image();
    img20.src="./images/e4.png";
    img20.onload=function () {
        num++;
    }
    var timer=setInterval(function () {
        if(num>=20){
            $('.loading').css('display','none');
            clearInterval(timer);
        }
    },20);
})
