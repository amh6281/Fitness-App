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

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefit" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
        {/* Header */}
        <div className="md:my-5 md:w-3/5">
          <Text>EvoGYM</Text>
          <p className="my-5 text-sm">
            저희 헬스장은 세계적인 피트니스 장비, 트레이너 및 PT를 제공합니다.
            스포츠 의학전공 및 전문자격증을 보유한 퍼스널 트레이너가 운동 목적,
            건강, 체력, 체형, 능력에 맞게 측정하여 운동 강도와 빈도를
            설정합니다.
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-5 items-center justify-between gap-8 md:flex">
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
