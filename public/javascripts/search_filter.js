$(document).ready(() => {
    $("#but").click(() => {


        $("#clear").empty();
        var title = $("#title").val();
        var category = $("#category").val();
        console.log("kalia");
        console.log(title)
        console.log(category)
        $.ajax({
            url: "/products/search",
            type: "POST",
            headers: {"X-CSRF-Token": $("#_csrf").val() },
            data: { "title": title, "category": category, },
            success: (data) => {
                var htmlToAppend = '';
                console.log(data);
                for (var i = 0; i < data.length; i++) {
                    htmlToAppend += '<div class="col-xs-6 col-md-4"><img class="img-responsive inline-block" src="' + data[i].imagePath + '"style="width:200px; height:200px; display:inline-block" />' + '<div class="caption"><a href="/products/' + data[i]._id + "/show"+'">' + data[i].title + '</a></div></div>';
                }
                $("#clear").append(htmlToAppend)
            }
        })

    })
})


