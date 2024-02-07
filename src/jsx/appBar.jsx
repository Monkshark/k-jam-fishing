import '../css/appBar.css'

function AppBar(){
    return (
        <>
            <div className="blue">
                <div className="red">
                    <img className="policeImg" src="/logo512.png" alt=""/>
                    <div className="textBox">
                        <p className="title">W a r n i n g</p>
                        <p className="content">귀하의 ip 주소가 신고되었습니다!</p>
                    </div>
                </div>
                <p className="warning">해당ip주소에서 어쩌구저쩌구 아무튼신고 ㅅㄱ해당ip주소에서 어쩌구저쩌구 아무튼신고 ㅅㄱ해당ip주소에서 어쩌구저쩌구 아무튼신고 ㅅㄱ해당ip주소에서 어쩌구저쩌구 아무튼신고 ㅅㄱ해당ip주소에서 어쩌구저쩌구 아무튼신고 ㅅㄱ</p>
            </div>
        </>
    )
}

export default AppBar;