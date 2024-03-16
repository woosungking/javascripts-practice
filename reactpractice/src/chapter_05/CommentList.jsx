import React from "react";
import Comment from "./Comment";

function CommentList(props){
    return(

        <div>
            <Comment name={"심재홍"} comment={"행보관님 고추가 가렵습니다."} />
            <Comment name={"도요타다이쥬"} comment={"고추좀 볼까?"} />
            <Comment name={"심재홍"} comment={"(스윽...)"} />
            <Comment name={"도요타다이쥬"} comment={"음 청소를 한번 해줘야겠군."} />
            <Comment name={"도요타다이쥬"} comment={"츄릅츄릅"} />
            <Comment name={"심재홍"} comment={"해으응"} />
        </div>
    );
}

export default CommentList;