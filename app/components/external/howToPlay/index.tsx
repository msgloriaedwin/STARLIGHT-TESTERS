import { useTranslations } from 'next-intl';
const HowToPlay = () => {
  const t = useTranslations('howToPlay');
  return (
    <div className="pt-[4rem] px-4 md:px-20 mt-10">
      <h2 className="text-primary-500 font-bold text-[24px] md:text-[40px] my-6">
        {t('title')}
      </h2>
      <div>
        <div className="pb-6">
          <h3 className="text-primary-500 font-bold">
             {t('section1Heading')}
          </h3>
          <ul className="list-inside list-disc pl-5 pt-6">
            <li className="font-bold pb-2"> {t('teamLeadersHostsTitle')}</li>
            <ul className="list-inside list-disc pl-5">
              <li className="pb-2">
                {t('createGame')}
              </li>
              <li className="pb-2">
              {t('sendInvitations')}
              </li>
              <li className="pb-2">
                {t('manageGame')}
              </li>
            </ul>
          </ul>
          <ul className="list-inside list-disc pl-5 pt-4">
            <li className="font-bold pb-2">
             {t('remoteWorkersFriendsFamilyTitle')}
            </li>
            <ul className="list-inside list-disc pl-5">
              <li className="pb-2">
              {t('joinGame')}
              </li>
              <li className="pb-2">
              {t('spectatorMode')}
              </li>
              <li className="pb-2">{t('forTeachers')}</li>
              <li className="pb-2">
               {t('educationalBingo')}
              </li>
            </ul>
          </ul>
        </div>
      </div>

      <div>
        <div className="pb-6">
          <h3 className="text-primary-500 font-bold">
           {t('section2Heading')}
          </h3>
          <ul className="list-inside list-disc pl-5 pt-4">
            <li className="font-bold pb-2"> {t('automatedSetupTitle')}</li>
            <ul className="list-inside list-disc pl-5">
              <li className="pb-2"> {t('automatedSetupDescription')}
              </li>
            </ul>
          </ul>
          <ul className="list-inside list-disc pl-5 pt-4">
            <li className="font-bold pb-2"> {t('markingYourCardTitle')}</li>
            <ul className="list-inside list-disc pl-5">
              <li className="pb-2">
             {t('markingYourCardDescription')}
              </li>
            </ul>
          </ul>
          <ul className="list-inside list-disc pl-5 pt-4">
            <li className="font-bold pb-2"> {t('realTimeInteractionTitle')}</li>
            <ul className="list-inside list-disc pl-5">
              <li className="pb-2">
               {t('realTimeInteractionDescription')}
              </li>
            </ul>
          </ul>
          <ul className="list-inside list-disc pl-5 pt-4">
            <li className="font-bold pb-2">{t('winningTheGameTitle')}</li>
            <ul className="list-inside list-disc pl-5">
              <li className="pb-2">
              {t('winningTheGameDescription')}
              </li>
            </ul>
          </ul>

          <ul className="list-inside list-disc pl-5 pt-4">
            <li className="font-bold pb-2"> {t('gameSettingsTitle')}</li>
            <ul className="list-inside list-disc pl-5">
              <li className="pb-2">
               {t('gameSettingsDescription')}
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;
