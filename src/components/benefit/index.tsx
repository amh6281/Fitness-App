import React from "react";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Text from "@/shared/Text";
import Benefit from "./Benefit";
import ActionButton from "../../shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "최첨단 시설",
    description:
      "세계적인 피트니스 장비와 헬스에 최적화된 트레이너 및 PT를 제공하고 있습니다.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "30가지의 다양한 수업",
    description:
      "근육에 알맞은 수업을 통해 회원님이 원하는 몸매를 만들 수 있습니다.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "전문가 및 프로 트레이너",
    description:
      "각종 대회 참가를 통한 자격 있는 트레이너와 여러 분야에 특화된 전문가가 준비되어있습니다",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefit" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
        {/* Header */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Text>EVOGYM</Text>
          <p className="my-5 text-sm">
            저희 헬스장은 세계적인 피트니스 장비, 트레이너 및 PT를 제공합니다.
            스포츠 의학전공 및 전문자격증을 보유한 퍼스널 트레이너가 운동 목적,
            건강, 체력, 체형, 능력에 맞게 측정하여 운동 강도와 빈도를
            설정합니다.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* Graphic and Description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* Graphic */}
          <img
            className="mx-auto"
            alt="benefit-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* Description */}
          <div>
            {/* Title */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Text>
                    수많은 회원에게 최고의 시설을 제공하는{" "}
                    <span className="text-primary-500">센터</span>
                  </Text>
                </motion.div>
              </div>
            </div>

            {/* Descript */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                골프 맛집! 쇠질 맛집! 인증샷 맛집! 운동맛집 EVOGYM이
                상륙했습니다! 뉴텍기반의 머신, 스텝밀 보유, 러닝10대, 사이클4대
                여성전용스트레칭 zone과 필라테스1:1 private 룸까지!! 게다가 시설
                어느 곳을 가도 포토존이 한 가득! 이제 EVOGYM과 함께 운동도
                즐기고 오운완 인증도 마음껏 즐겨보세요💪
              </p>
            </motion.div>

            {/* Button */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1]  before:content-sparkles"></div>
              <ActionButton setSelectedPage={setSelectedPage}>
                가입하기
              </ActionButton>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
