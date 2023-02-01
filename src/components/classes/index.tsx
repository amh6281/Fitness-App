import React from "react";
import { SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import Text from "@/shared/Text";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Classes = ({ setSelectedPage }: Props) => {
  return (
    <section id="classes" className="w-full bg-primary-100 py-40">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Classes)}>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <Text>EVOGYM의 수업</Text>
            <p className="py-5">
              PT와 필라테스를 선택하거나 2가지를 동시에 진행하여 개인별 맞춤
              수업을 진행하고 있습니다.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Classes;