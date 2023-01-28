import React from "react";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Text from "@/shared/Text";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({ setSelectedPage }: Props) => {
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

        {/* Benefit */}
      </motion.div>
    </section>
  );
};

export default Benefit;
