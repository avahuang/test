window.onload=function() {


        // var fetchTracks = function (albumId, callback) {
        //     $.ajax({
        //         url: 'https://api.spotify.com/v1/albums/' + albumId,
        //         success: function (response) {
        //             console.log(response);
        //         }
        //     });
        // };

        

        // $("#search").click(function(event){
        //     event.preventDefault();

        //     var myName = $( '#queryMine' ).val();
        //     var dateName = $( '#queryDate').val();
        //     var birthYear = $( '#queryBirth' ).val();
        //     var colorString = $( '#color option:selected').text();
        //     var typeString = $( '#type option:selected' ).text();
            
        //     console.log('name:'+myName);
        //     console.log('date name:'+dateName);
        //     console.log('birth year:'+birthYear);
        //     console.log('color:'+colorString);
        //     console.log('type:'+typeString);
        // });

        $("#search").click(function(event){
            event.preventDefault();

            var myName = $( '#queryMine' ).val();
            var dateName = $( '#queryDate').val();
            var birthYear = $( '#queryBirth' ).val();
            var colorString = $( '#color option:selected').text();
            var typeString = $( '#type option:selected' ).text();
            var countryName = $( '#queryCountry' ).val();
            
            $.ajax({
                url: 'https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getObjects&access_token=7f8be2a479b62af2963f47a463fe2d16&color='+colorString+'&year_start='+birthYear+'&woe:country_name='+countryName+'&page=1&per_page=500',
                success: function (response) {

                    // document.getElementById('results').innerHTML = '';

                    console.log(response);

                    var num = response.objects.length;
                    var htmlString = "";

                     $( '#results' ).empty();
                    for(var i=0; i<num; i++){
                        console.log("good");
                        if(response.objects[i].images.length>0){
                        var imgurl = response.objects[i].images[0].sq.url;
                        var link = response.objects[i].url;

                        console.log(htmlString);
                        htmlString = '<a href="'+link+'"><img src="'+imgurl+'"></a>';
                        console.log(htmlString);

                        // htmlString = '<img src="'+imgurl+'">';
                       
                        $( '#results' ).append( htmlString );
                    }
                    }
                    

                    // var num=document.getElementById('sel').value;
                    
                    // //alert(sel.value);

                    // var imgurl = response.albums.items[0].images[0].url;
                    // var imageElement = document.createElement('img');
                    // imageElement.style.width = '500px';
                    // imageElement.style.border= '50px solid #000';
                    // imageElement.src = imgurl;
                    // imageElement.className='albumCover';
                    // document.getElementById('results').appendChild(imageElement);
                    
                    // for(var i=0;i<num;i++){

                    //     var thisTitle = document.createElement('div');
                    //     thisTitle.innerHTML = response.albums.items[i].name;
                    //     document.getElementById('results').appendChild(thisTitle);
                        
                    //     var songURI = response.albums.items[i].uri;
                    //     var thisIframe = document.createElement('iframe');
                    //     thisIframe.src = iframeLink+songURI;
                    //     document.getElementById('results').appendChild(thisIframe);
                        
                    // }
                }
            });
        });
        

        // var searchAlbums = function (query) {
        //     $.ajax({
        //         url: 'https://api.spotify.com/v1/search',
        //         data: {
        //             q: query,
        //             type: 'album'
        //         },
        //         success: function (response) {

        //             document.getElementById('results').innerHTML = '';

        //             var iframeLink = 'https://embed.spotify.com/?uri=';

        //             // console.log(response);
        //             var num=document.getElementById('sel').value;
                    
        //             //alert(sel.value);

        //             var imgurl = response.albums.items[0].images[0].url;
        //             var imageElement = document.createElement('img');
        //             imageElement.style.width = '500px';
        //             imageElement.style.border= '50px solid #000';
        //             imageElement.src = imgurl;
        //             imageElement.className='albumCover';
        //             document.getElementById('results').appendChild(imageElement);
                    
        //             for(var i=0;i<num;i++){

        //                 var thisTitle = document.createElement('div');
        //                 thisTitle.innerHTML = response.albums.items[i].name;
        //                 document.getElementById('results').appendChild(thisTitle);
                        
        //                 var songURI = response.albums.items[i].uri;
        //                 var thisIframe = document.createElement('iframe');
        //                 thisIframe.src = iframeLink+songURI;
        //                 document.getElementById('results').appendChild(thisIframe);
                        
        //             }
        //         }
        //     });
        // };



        // document.getElementById('search-form').addEventListener('submit', function (e) {
        //     e.preventDefault();
        //     searchAlbums(document.getElementById('query').value);
        // }, false);

}