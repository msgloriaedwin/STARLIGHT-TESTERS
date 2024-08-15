import { useTranslations } from 'next-intl';
const Privacy = () => {
  const t = useTranslations('privacyPolicy');
  
  return (
    <div className="pt-[4rem] px-4 md:px-20 mt-10">
      <h2 className="text-primary-500 font-bold text-[24px] md:text-[40px] my-6">
        {t('title')}
      </h2>
      <p className="pb-6">
        <span className="text-primary-500 font-bold">
         {t('introwelcome')}
        </span>
        {t('introintroText')}
      </p>
      <div>
        <div>
          <h3 className="text-primary-500 font-bold">
           {t('section1heading')}
          </h3>
          <ul className="list-inside list-disc pl-5 pt-4">
            <li className="font-bold pb-2"> {t('personalInformationtitle')}</li>
            <ul className="list-inside list-disc pl-5">
              <li className="pb-2">
                {t('personalInformationdetails')}
              </li>
              <li className="pb-2">
               {t('thirdPartyIntegrations')}
              </li>
            </ul>
          </ul>
        </div>
        <div>
          <ul className="list-inside list-disc pl-5 pt-4">
            <li className="font-bold pb-2"> {t('usageDatatitle')}</li>
            <ul className="list-inside list-disc pl-5">
              <li className="pb-2">
              {t('details')}
              </li>
            </ul>
          </ul>
        </div>

        <div className="pb-6">
          <ul className="list-inside list-disc pl-5 pt-4">
            <li className="font-bold pb-2"> {t('paymentInformationtitle')}</li>
            <ul className="list-inside list-disc pl-5">
              <li className="pb-2">
               {t('paymentInformationdetails')}
              </li>
              <li className="pb-2">
              {t('paymentInformationdetails2')}
              </li>
            </ul>
          </ul>
        </div>
        <div className="pb-6">
          <h3 className="text-primary-500 font-bold">
            {t('section2heading')} {" "}
          </h3>
          <ul className="list-inside list-disc pl-5 pt-4">
            <li className="font-bold pb-2">
             {t('serviceImprovementtitle')}
            </li>
            <ul className="list-inside list-disc pl-5">
              <li className="pb-2">
               {t('serviceImprovementdetails')}
              </li>
            </ul>
          </ul>
          <ul className="list-inside list-disc pl-5 pt-4">
            <li className="font-bold pb-2"> {t('communicationtitle')}</li>
            <ul className="list-inside list-disc pl-5">
              <li className="pb-2">
               {t('communicationdetails')}
              </li>
            </ul>
          </ul>
          <ul className="list-inside list-disc pl-5 pt-4">
            <li className="font-bold pb-2">{t('analyticstitle')} </li>
            <ul className="list-inside list-disc pl-5">
              <li className="pb-2">
              {t('analyticsdetails')}
              </li>
            </ul>
          </ul>

          <ul className="list-inside list-disc pl-5 pt-4">
            <li className="font-bold pb-2"> {t('securitytitle')} </li>
            <ul className="list-inside list-disc pl-5">
              <li className="pb-2">
               {t('securitydetails')}
              </li>
            </ul>
          </ul>
        </div>
        <div className="pb-6">
          <h3 className="text-primary-500 font-bold">
           {t('section3heading')}
          </h3>
          <ul className="list-inside list-disc pl-5 pt-4">
            <li className="font-bold pb-2">
              {t('thirdPartyProviderstitle')}
            </li>
            <ul className="list-inside list-disc pl-5">
              <li className="pb-2"> {t('thirdPartyProvidersdetails')}
              </li>
            </ul>
          </ul>
          <ul className="list-inside list-disc pl-5 pt-4">
            <li className="font-bold pb-2"> {t('integratedServicestitle')}</li>
            <ul className="list-inside list-disc pl-5">
              <li className="pb-2">
               {t('integratedServicesdetails')}
              </li>
            </ul>
          </ul>
          <ul className="list-inside list-disc pl-5 pt-4">
            <li className="font-bold pb-2"> {t('legalCompliancetitle')} </li>
            <ul className="list-inside list-disc pl-5">
              <li className="pb-2">
              {t('legalCompliancedetails')}
              </li>
            </ul>
          </ul>
        </div>
        <div className="pb-6">
          <h3 className="text-primary-500 font-bold">{t('section4heading')}</h3>
          <ul className="list-inside list-disc pl-5">
            <li className="pb-2">
             {t('section4details')}
            </li>
          </ul>
        </div>

        <div className="pb-6">
          <h3 className="text-primary-500 font-bold">
           {t('section5heading')}
          </h3>
          <ul className="list-inside list-disc pl-5 pt-4">
            <li className="font-bold pb-2">
               {t('accessUpdatetitle')}
            </li>
            <ul className="list-inside list-disc pl-5">
              <li className="pb-2">
               {t('accessUpdatedetails')}
              </li>
            </ul>
          </ul>
          <ul className="list-inside list-disc pl-5 pt-4">
            <li className="font-bold pb-2">
              {" "}
             {t('optOuttitle')}{" "} 
            </li>
            <ul className="list-inside list-disc pl-5">
              <li className="pb-2">
                {t('optOutdetails')}
              </li>
            </ul>
          </ul>

          <ul className="list-inside list-disc pl-5 pt-4">
            <li className="font-bold pb-2">  {t('deleteAccounttitle')} </li>
            <ul className="list-inside list-disc pl-5">
              <li className="pb-2">
                {t('deleteAccountdetails')}
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
