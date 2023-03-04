import type { NextComponentType } from "next";

import {
  MdEmail,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "../Misc/Icons.collection";

import { Icon } from "../Misc/Icon.component";

const Contact: NextComponentType = () => {
  return (
    <div className="px-3 font-sen" id="contact">
      <p className="text-3xl font-bold text-white">Get In Touch</p>

      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Icon icon={<AiOutlineGithub />} url="https://github.com/mehulrao" />

        <Icon
          icon={<AiOutlineLinkedin />}
          url="https://www.linkedin.com/in/mehul-rao-0231631a3/"
        />

        <Icon icon={<AiOutlineMail />} url="mailto:mehulrao@gmail.com" />
      </div>
    </div>
  );
};

export default Contact;
