import React from 'react';
import '../css/WarningBannerDs.css';

class WebPage extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <div id="banner">
                        <h1 style={{fontSize: '4rem', lineHeight: '60%'}}>WARNING<br/><span className="title">귀하의 IP주소가 신고되었습니다!</span></h1>
                    </div>
                    <span id="subtitle">해당 IP주소에서 불법•유해사이트로의 접근 시도가 확인되었습니다. <br/>정보통신망법 74조를 위반 시 <span className="underscore">1년 이하의 징역 또는 1천만원 이하의 벌금형</span>에 처해질 수 있습니다. <br/>그 외 법률 사항은 이하 명기되어 있습니다.</span>
                </header>
                <div>
                    <div id="section-left">
                        <div>
                            <img src={process.env.PUBLIC_URL + '/caution.png'} alt="loading" width="25%" height="25%" style={{float: 'left'}} className="margin"/>
                            <article className="script">
                                <p style={{height:'100%', width: '100%'}}>방금 전 귀하의 IP주소에서 <span className="underscore">불법•유해사이트로의 접근 시도</span>가 확인되었습니다. 즉시 해당 IP주소의 신고가 KICS(대한민국정보통신보안국)에 접수되었음을 알립니다. 이하 법률에 대한 위반사항이 있다면 해당 행위는 위법 행위입니다.</p>
                                <hr style={{width:'100%', color:'#c0c0c0', clear: 'left'}}/>
                                <p style={{height: '100%', width: '100%'}}>정보통신망 이용촉진 및 정보보호 등에 관한 법률...</p>
                            </article>
                        </div>
                    </div>
                    <div id="section-right">
                        <img src={process.env.PUBLIC_URL + '/map-example.png'} alt="loading" width="90%" height="50%" className="margin"/>
                        <div className="margin" style={{color: '#ff0000', fontSize: '2vw'}}>
                            <p style={{color: '#ff0000'}}>Your IP:<br/>Your Address:</p>
                        </div>
                    </div>
                    <div id="ad">
                        {/*광고 때리는곳*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default WebPage;