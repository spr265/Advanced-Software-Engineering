


var nextPageToken, prevPageToken;
$('#controls').hide();

function clearEntry(){
    $('#user-input').val('').focus();
}

function entryList (newEntry){
    var allHtml;
    allHtml += newEntry+'<hr>';
    $('#search-results').prepend(allHtml);
    nextPageToken = newEntry.result.nextPageToken;
    prevPageToken = newEntry.result.prevPageToken;
    $('#controls').fadeIn(1000);

}

function nextPage() {
    requestVideoPlaylist(playlistId, nextPageToken);
}

// Retrieve the previous page of videos in the playlist.
function previousPage() {
    requestVideoPlaylist(playlistId, prevPageToken);
}

function showResults(results){
    console.log('show');
    var html=' ';
    $.each(results, function(index, value){

        var result = results[index];
        var position = index+1;
        if (result.id.kind == 'youtube#channel'){
            var url = 'https://www.youtube.com/channel/'+result.id.channelId;
        }
        else {
            var url = 'https://www.youtube.com/watch?v='+result.id.videoId;
        }

        var title = result.snippet.title;
        var thumb = '<a href="'+url+'" target="_blank"><div class="thumb" style="background-image: url('+result.snippet.thumbnails.high.url+')"></div></a>';

        html += '<div class="result"><h3>'+ position +'. '+title+'</h3>'+thumb+'<p>'+result.snippet.description+'<br></p></div>';



    });
    entryList(html);
    clearEntry();

}



function getRequest(searchTerm) {
    console.log('get');
    var params = {
        // s: searchTerm,
        r: 'json',
        q: searchTerm,
        part: 'snippet',
        order: 'viewCount',
        startIndex: 1,
        pagetoken: 'CAoQAA',
        maxResults: 10,
        key: 'AIzaSyDaih7MQjWRT-F64goPHJ0_JXHzhRaVJFg'

    };
    url = 'https://www.googleapis.com/youtube/v3/search';

    $.getJSON(url, params, function(data){

        showResults(data.items);
    });
}

$(function() {
    console.log('start');
    clearEntry();
    $('#search-form').submit(function(event){
        event.preventDefault();
        var searchTerm = $('#user-input').val();
        getRequest(searchTerm);
    });



});


$(document).ready(function(){
    $("#search").keypress(function(e){
        if(e.keyCode === 13){
            var search = $("#search").val();
            var url = "https://en.wikipedia.org/w/api.php";
            $.ajax({
                url: url,
                data: {
                    action: 'opensearch',
                    search: search,
                    format: 'json'
                },
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "jsonp"
            })
                .done(function(data, status, jqXHR) {
                    $("#search-result").html();
                    for(i=0;i<data[1].length;i++){
                        $("#search-result").prepend("<div><div class='docs'><a href="+data[3][i]+"><h2>"+data[1][i]+"</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
                    }
                });
        }
    })
    $("#button").on("click",function(){
        $("#c1").fadeToggle();
    });
    $("#submit").on("click", function(event) {
        event.preventDefault();
        var search = $("#user-input").val();
        var url = "https://en.wikipedia.org/w/api.php";
        $.ajax({
            url: url,
            data: {
                action: 'opensearch',
                search: search,
                format: 'json'
            },
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "jsonp"
        })
            .done(function(data, status, jqXHR) {
                $("#search-result").html();
                for(i=0;i<data[1].length;i++){
                    $("#search-result").prepend("<div><div class='docs'><a href="+data[3][i]+"><h2>"+data[1][i]+"</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
                }
            });
    });
    $('#reset').click(event, function(){
        event.preventDefault();
        $('#search-results').empty();
        $('#search-result').empty();
    });
});
