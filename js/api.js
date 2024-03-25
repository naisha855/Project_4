$(function () {

    let search = ["바람", "영화", "달콤한", "초록", "보리", "차트",
        "여행", "노랑", "새", "음식"];

    for (let i = 0; i < search.length; i++) {

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: search[i] },
            async: false,
            headers: { Authorization: "KakaoAK 7d38ca298160bac7d36fd3c326771778" }
        })

            .done(function (msg) {
                $(".section3_main_populater_container_list").eq(i).find('figure>a').append("<img src='" + msg.documents[i].thumbnail + "'/>");
                $(".section3_main_populater_container_list").eq(i).find('h3').append("<a href=''>" + msg.documents[i].title + "</a>");
                $(".section3_main_populater_container_list").eq(i).find('.section3_main_populater_container_list_inner_detail_price').append("<span>" + msg.documents[i].price + "</span>");

            });
    }

    let search2 = ["과학", "죄와 벌", "삶", "동화", "기원"];

    for (let j = 0; j < search2.length; j++) {

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: search2[j] },
            async: false,
            headers: { Authorization: "KakaoAK 7d38ca298160bac7d36fd3c326771778" }
        })



            .done(function (msg) {
                console.log(msg)
                $(".section3_main_subpopulate .section3_main_populater_container_list").eq(j).find('figure>a').append("<img src='" + msg.documents[j].thumbnail + "'/>");
                $(".section3_main_subpopulate .section3_main_populater_container_list").eq(j).find('h3').append("<a href=''>" + msg.documents[j].title + "</a>");
                $(".section3_main_subpopulate .section3_main_populater_container_list").eq(j).find('.section3_main_populater_container_list_inner_detail_price').append("<span>" + msg.documents[j].price + "</span>");

                let str = msg.documents[j].title;
                let str2 = str.substring(0, 2)

            });
    }
}
)