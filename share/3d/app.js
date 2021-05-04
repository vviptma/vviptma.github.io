var check = 0;
var oldX = 0;
var oldX_mobile = 0;

function runOnlyWhenLoaded() {
    //Chạy vòng lặp tạo các thẻ div, setAttribute và chứa ảnh đối tượng
    for (var i = 0; i < 36; i++) {
        var newDiv = document.createElement('div');
        newDiv.setAttribute("style", "background-image: url(images/img_" + i + ".png)");
        newDiv.setAttribute("class", "dr-img");
        newDiv.setAttribute("id", i);
        var drContainer = document.getElementById("dr-container");
        drContainer.appendChild(newDiv);
    }

    //Hiển thị ảnh số 0
    document.getElementById(0).style.opacity = "1";

    //Kiểm tra giá trị con trỏ chuột đi theo chiều ngang Y và tăng giá trị biến check
    //Tăng và giảm giá trị check
    function mouseMove(event, y) {
        var x = event.pageX;

        if (x > oldX) {
            check++;
            if (check > 35) {
                check = 0;
            }

        } else if (x < oldX) {
            check--;
            if (check < 0) {
                check = 35;
            }
        }

        //Ẩn tất cả các hình ảnh
        for (var i = 0; i < 36; i++) {
            document.getElementById(i).style.opacity = "0";
        }
        //Hiển thị ảnh hiện đang check
        document.getElementById(check).style.opacity = "1";

        //Hiển thị giá trị lên màn hình
        document.getElementById('doituong3d').innerHTML = 'true ' + x + " " + y + " " + check;
        oldX = event.pageX;
    }

    //
    function touchMove(event, y) {
        var x = event.pageX;

        var o = event.changedTouches[0].pageX;
        if (x > oldX || o > oldX_mobile) {
            check++;
            if (check > 35) {
                check = 0;
            }

        } else if (x < oldX || o < oldX_mobile) {
            check--;
            if (check < 0) {
                check = 35;
            }
        }
        for (var i = 0; i < 36; i++) {
            document.getElementById(i).style.opacity = "0";
        }
        document.getElementById(check).style.opacity = "1";
        document.getElementById('doituong3d').innerHTML = 'true ' + x + " " + y + " " + check + o;
        oldX = event.pageX;
        oldX_mobile = event.changedTouches[0].pageX;
    }

    //Sử dụng event với hành động nhấp chuột lên xuống
    document.getElementById('dr-container').addEventListener('mousedown', function (event) {
        var y = event.pageX;
        document.getElementById('dr-container').onmousemove = function (event) {
            mouseMove(event, y);
        }
    });
    document.getElementById('dr-container').addEventListener('mouseup', function (event) {
        document.getElementById('dr-container').onmousemove = null;
    });

    //Sử dụng event với hành động touch như màn hình mobile, touchpad
    document.getElementById('dr-container').addEventListener('touchstart', function (event) {
        var y = event.pageX;
        document.getElementById('dr-container').ontouchmove = function (event) {
            touchMove(event, y);
        }
    });
    document.getElementById('dr-container').addEventListener('touchend', function (event) {
        document.getElementById('dr-container').ontouchmove = null;
    });
}