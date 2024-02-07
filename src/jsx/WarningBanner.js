import React from 'react';
import 'tailwindcss/tailwind.css';

const WarningBanner = () => {
    return (
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 h-48 flex justify-center items-center" style={{ width: '1920px', height: '100vh'}}>
            <div className="text-center">
                <div style={{ width: '1920px', height: '748px',  background: 'linear-gradient(to bottom, #D90000, #8B0000)'}} className="">
                    <h1 className="text-white font-bold text-9xl" style={{ fontFamily: 'Antonio, sans-serif' }}>WARNING</h1>
                    <p className="text-white text-4xl mt-3">귀하의 IP주소가 신고되었습니다!</p>
                </div>
                <p className="text-white text-lg mt-3">
                    해당 IP주소에서 불법/유해사이트 접근 시도가 확인되었습니다.<br/>
                    정보통신방법 74조를 위반 시 <span style={{
                        color: 'red',
                        textDecoration: 'underline'
                    }}>1년 이하의 징역 또는 1천만원 이하의 벌금</span>
                    형
                    <br/>
                    에 처해질수 있습니다. 그 외 법률사항은 이하 명기되었습니다.<br/>
                </p>
            </div>
        </div>
    );
};

export default WarningBanner;