$(function () {

    let search = ["solateintheday", "walkthebluefields", "맡겨진 소녀",];

    for (let i = 0; i < search.length; i++) {

        // 도서 적용

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: search[i] },
            async: false,
            headers: { Authorization: "KakaoAK 7d38ca298160bac7d36fd3c326771778" }
        })

            .done(function (msg) {
                if (i == 1) {
                    $(".Section_3_container_part3_populated_container_list_populeted").eq(i).find('figure>a').append("<img src='" + msg.documents[1].thumbnail + "'/>");
                    $(".Section_3_container_part3_populated_container_list_populeted").eq(i).find('h3').append("<a href=''>" + msg.documents[1].title + "</a>");
                    $(".Section_3_container_part3_populated_container_list_populeted").eq(i).find('.Section_3_container_part3_populated_container_list_detail_price').append(msg.documents[1].price);
                } else {
                    $(".Section_3_container_part3_populated_container_list_populeted").eq(i).find('figure>a').append("<img src='" + msg.documents[0].thumbnail + "'/>");
                    $(".Section_3_container_part3_populated_container_list_populeted").eq(i).find('h3').append("<a href=''>" + msg.documents[0].title + "</a>");
                    $(".Section_3_container_part3_populated_container_list_populeted").eq(i).find('.Section_3_container_part3_populated_container_list_detail_price').append(msg.documents[0].price);
                }


            });



        //       $(".contextbox").append("<h6>" + msg.documents[0].authors[0] + "</h6>");

        //       let str = msg.documents[0].contents;
        //       let str2 = str.substring(0, 600);
        //       $(".contextbox").append("<p>" + str2 + "</p>");
        //     });



    }

    // 자세히 보기 문단 더보기와 닫기

    $(function () {
        $(".del1").click(function () {
            if ($(this).text() == "[더 보기]") {
                $('.Section_2_main_populate_text').animate({ height: 2350 })
                $(this).text('[닫기]')
            } else {
                $('.Section_2_main_populate_text').animate({ height: 305 })
                $(this).text('[더 보기]')
            }
        });
    })


    $(function () {
        $(".del2").click(function () {
            if ($(this).text() == "[더 보기]") {
                $('.Section_3_container_part1_populated_text p').animate({ height: 325 })
                $(this).text('[닫기]')
            } else {
                $('.Section_3_container_part1_populated_text p').animate({ height: 60 })
                $(this).text('[더 보기]')
            }

        });

    })

    // 메모장 페이지 적용

    $(function () {
        $.get("./txt/bookinfo_small_things_like_these.txt", function (data) {
            $(".Section_2_main_populate_text").html(data);
        })
        $.get("./txt/Claire_keegan.txt", function (data) {
            $(".Section_3_container_part1_populated_text").html(data);
        })
    });
});