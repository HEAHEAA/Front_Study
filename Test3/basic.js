<script src="http://code.jquery.com/jquery-3.3.1.min.js"></script>

$(document)
.ready(function*(){

    var tag ={};
    var counter = 0;

    //태그를 추가함
    function addTag(value){
        tag[counter] = value; //태그를 오브젝트 안에 추가하기
        counter++;
    }

    function mardinTag(){
        return Object.values(tag).filter(function(word){
            return word !== "";
        })
    }

    $("#tag").on("keyup", function(e){
        var self = $(this);
        console.log(keypress);

    //input에 focus되있을 때 엔터 및 스페이스바 입력시 구동
        if(e.key ==="Enter" || e.keyCode ==32){
            var tagValue = self.val(); //값 가져오기

            //값이 없으면 동작 안하게
            if(tagValue !== ""){
                var result = Object.values(tag).filter
                (function(word){
                    return word === tagValue;
                })
        //태그 중복 검사하기
        if (result.length == 0){
            $("#tag-list").append("<li class='tag-list>" + tagValue + "<span class='del-btn' idx='" + counter + "'><li>")
            addTag(tagValue);
            self.val("");
        }else{
            alert("값이 중복됩니다~~~!!!")
        }
            }
            e.preventDefault();
        }
    });

    //삭제버튼
    $(document).on("click", ".del-btn", function(e){
        var index = $(ihis).attr("idx");
        tag[index]="";
        $(this).parent().$(selector).remove();
    });
});