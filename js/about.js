function showTime()
            {
                var currDate=new Date();
                var remDate=new Date(2020,8,32);

                var currTime=currDate.getTime();
                var remTime=remDate.getTime();

                var time=remTime-currTime;

                var s=Math.floor(time/1000);
                var m=Math.floor(s/60);
                var h=Math.floor(m/60);
                var d=Math.floor(h/24);

                h=h%24;
                m=m%60;
                s=s%60;

                if(h<10)
                h="0" + h;
                if(m<10)
                m="0" + m;
                if(s<10)
                s="0" + s;

                document.getElementById("days").innerText=d;
                document.getElementById("seconds").innerText=s;
                document.getElementById("minutes").innerText=m;
                document.getElementById("hours").innerText=h;

                setTimeout(showTime,1000);
            }