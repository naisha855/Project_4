$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"미움받을 용기" },
    headers: {Authorization: "KakaoAK 7d38ca298160bac7d36fd3c326771778"}
})
    .done(function (msg) {
        console.log(msg);

        let lists= $(".section3_main_populater_container_list").children('div');
        console.log(lists)

        $(".section3_main_populater_container_list_inner").append("<img src='"+msg.documents[0].thumbnail+"'/>");
    });