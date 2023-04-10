jQuery(
    function () {
        $.get("https://cors-anywhere.herokuapp.com/https://www.politico.com/rss/politicopicks.xml").done(
            function(xmlData) {
            const jsonData = $.xml2json(xmlData);

            let jsonLength = jsonData.channel.item.length;
            let prevNum = -1;
            console.log(jsonLength);

            $("#textBtn").click(function(){
                const randNum = Math.floor(Math.random() * jsonLength); -1;

                while (prevNum == randNum) {
                    randNum = Math.floor(Math.random() * jsonLength);
                }
                prevNum = randNum;
                $("#newsTitle").html("<h2 style='font-size: 20px; font-weight: bold; text-decoration: underline'>" + jsonData.channel.item[randNum].title + "</h2>");
                $("#newsDesc").html("<div style='font-size: 18px; margin: 30px; font-weight: normal'>" + jsonData.channel.item[randNum].description + "</div>");
                $("#clickImg").html("<div style='font-size: 25px; font-style: italic'>Click the image for the full article.</div>"); 

                if (randNum == 27) 
                { 
                    if(jsonData.channel.item[randNum].content.url == undefined) 
                    {
                    $("#theImage").html("<div>NO IMAGE AVAILABLE</div>");
                    }
                }
                else {
                    $("#theImage").html("<img style='width: 400px; border: 1px solid black;' id='newImg' src='" + jsonData.channel.item[randNum].content.url + "'>");
                    $("#newImg").click(function(){window.location.href=jsonData.channel.item[randNum].link})
                }

            } //end of function inside click
            ); //end of Btn function
            } //end of get xml to Json
            ).fail(function() {console.log('Error:', status)});
        
        } //end of main
        ) //end Jquery