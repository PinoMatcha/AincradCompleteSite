$('head').append(
	'<style>body{display:none;}'
);

$(window).on("load", function () {
	$('body').delay(500).fadeIn("slow");
});

$(window).on("beforeunload", function (e) {
	$('body').fadeOut();
});


$(window).on("load", function () {
	var floor_select = document.getElementById('Floor-Select');
	var sao_btn_list = document.getElementsByClassName('sao_btn_list');

	if (floor_select != null) {
		// ul要素を作成
		var ul_element = document.createElement('ul');

		for (var i = 1; i <= 6; i++) {
			// ボタンdev作成
			var btn_dev = document.createElement('dev');
			btn_dev.classList.add('sao_btn');
			
			// アイコン用dev作成
			var icon_dev = document.createElement('dev');
			icon_dev.classList.add('icon');
			// アイコン画像作成
			var icon_img_on = document.createElement('img');
			icon_img_on.src = "../src/img/icons/menu2/Quest & Message Box_on.png";
			// アイコンdevにimg追加
			icon_dev.appendChild(icon_img_on);
			var icon_img_normal = document.createElement('img');
			icon_img_normal.src = "../src/img/icons/menu2/Quest & Message Box.png";
			// アイコンdevにimg追加
			icon_dev.appendChild(icon_img_normal);
			
			btn_dev.appendChild(icon_dev);
			
			var a_element = document.createElement('a');
			a_element.style = 'font-family:"SAO_Font"; letter-spacing: .1vw;';
			if (i == 1) {
				a_element.textContent = '1st Floor';
			} else if (i == 2) {
				a_element.textContent = '2nd Floor';
			} else if (i == 3) {
				a_element.textContent = '3rd Floor';
			} else {
				a_element.textContent = i + 'th Floor';
			}
			a_element.href = "floors/f" + i + "_data.html";
			btn_dev.appendChild(a_element);
			
			var li_element = document.createElement('li');
			li_element.appendChild(btn_dev);
			
			ul_element.appendChild(li_element);
		};

		sao_btn_list[0].appendChild(ul_element);
	}
});

$(window).on("load", function () {
	setTimeout(function () {
		// eachでliを順番に処理
		$("li").each(function (i) {
			var that = this;

			// 0.15s毎にずれて表示
			setTimeout(function () {
				$(that).addClass("active");
			}, 50 * i);
		});
	}, 800);
});
