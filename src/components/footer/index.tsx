import React from "react";
import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            골프 맛집! 쇠질 맛집! 인증샷 맛집! 운동맛집 EVOGYM이 상륙했습니다!
            뉴텍기반의 머신, 스텝밀 보유, 러닝10대, 사이클4대 여성전용스트레칭
            zone과 필라테스1:1 private 룸까지!! 게다가 시설 어느 곳을 가도
            포토존이 한 가득! 이제 EVOGYM과 함께 운동도 즐기고 오운완 인증도
            마음껏 즐겨보세요💪
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Home</p>
          <p className="my-5">Benefit</p>
          <p>Classes</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">문의는 환영입니다!</p>
          <p>010-1234-5678</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
