import { useTranslations } from "next-intl";

const AboutUs = () => {
  const t = useTranslations("aboutRemoteBingo");
  return (
    <div className="pt-[4rem] px-4 md:px-20 mt-10">
      <h2 className="text-primary-500 font-bold text-[24px] md:text-[40px] my-8">
        {t("aboutRemoteBingoTitle")}
      </h2>
      <p className="pb-6">
        <span className="text-primary-500 font-bold"> {t("remoteBingo")} </span>
        {t("aboutRemoteBingoSection1")}
      </p>
      <p className="pb-6">{t("aboutRemoteBingoSection2")}</p>
      <p className="pb-6">{t("aboutRemoteBingoSection3")}</p>

      <h5 className="text-primary-500 font-bold pb-1">
        {" "}
        {t("keyBenefitsTitle")}
      </h5>
      <ul className="list-inside list-disc pl-5">
        <li className="pb-1">{t("teamBonding")}</li>
        <li className="pb-1">{t("educationalValue")}</li>
        <li className="pb-1"> {t("easeOfUse")}</li>
        <li className="pb-1">{t("anytimeAnywhere")}</li>
        <li className="pb-1">{t("socialConnectivity")}</li>
      </ul>
      <div className="pt-6">
        <h4 className="font-bold text-primary-500">{t("whyItMattersTitle")}</h4>
        <p className="pb-6">{t("whyItMattersDescription")}</p>
      </div>
    </div>
  );
};

export default AboutUs;
