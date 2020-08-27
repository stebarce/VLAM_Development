function nFormatter(num) {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num;
  }
  $(document).ready(function(){
      $.ajaxSetup({ cache: false }); // or iPhones don't get fresh data
  });
  function getInstagramHashtag(hashtag) {
    $('.feedback_message').removeClass("text-danger");
    $('.feedback_message').html("Loading...");
    $.ajax({
      url: `https://www.instagram.com/explore/tags/${hashtag}?__a=1`,
      type: "get",
      success: function (response) {
          if(!response.graphql.hashtag || !response.graphql.hashtag.edge_hashtag_to_media) {
          getInstagramHashtag('dogs');
          return;
        }
        var counter = response.graphql.hashtag.edge_hashtag_to_media.count;
        if (counter && counter > 10000) {
                  document.getElementById("ig-gallery-module").style.display = "block";
              };
        $(".hashtag-counter").html(nFormatter(counter));
        var posts = response.graphql.hashtag.edge_hashtag_to_media.edges;
        for (var i = 0; i < 24; i++) {
          var imageUrl = posts[i].node.display_url;
          document.querySelector(".ig-gallery-grid").children[i].style.backgroundImage = `url(${imageUrl})`
          }
      },
      error: function (error) {
        console.log(error)
      }
    });
  }
  getInstagramHashtag('dogs')