const HowToPlay = () => {
  return (
    <div className="pt-[4rem] px-4 md:px-20 mt-10">
      <h2 className="text-primary-500 font-bold text-[24px] md:text-[40px] my-6">
        How to Play Remote Bingo
      </h2>
      <div>
        <div className="pb-6">
          <h3 className="text-primary-500 font-bold">
            1. Getting Started: Creating or Joining a Game
          </h3>
          <ul className="list-inside list-disc pl-5 pt-6">
            <li className="font-bold pb-2">For Team Leaders/Hosts:</li>
            <ul className="list-inside list-disc pl-5">
              <li className="pb-2">
                Create a Game: As a team leader, you can create a game by
                selecting a template or customizing your own. Choose settings
                such as card size, game duration, and themes to tailor the
                experience for your group.
              </li>
              <li className="pb-2">
                Send Invitations: Invite participants via email, Slack, or
                Microsoft Teams. Once invited, participants receive a link to
                join the game.
              </li>
              <li className="pb-2">
                Manage the Game: As the host, you have full control. You can
                pause, resume, or end the game at any time using the game
                dashboard, which also allows you to monitor participation and
                engagement.
              </li>
            </ul>
          </ul>
          <ul className="list-inside list-disc pl-5 pt-4">
            <li className="font-bold pb-2">
              For Remote Workers, Friends, or Family Members:
            </li>
            <ul className="list-inside list-disc pl-5">
              <li className="pb-2">
                Join a Game: Once you receive an invitation link via email,
                Slack, or another supported platform, click the link to join the
                game. You can also find public games in the game lobby.
              </li>
              <li className="pb-2">
                Spectator Mode: If you’d prefer to watch rather than play, you
                can join the game in
                {`"Spectator Mode" `}and enjoy the fun without actively
                participating.
              </li>
              <li className="pb-2">For Teachers:</li>
              <li className="pb-2">
                Educational Bingo: Create a custom bingo game with educational
                content tailored to your lesson plan. Invite students with
                access links or codes, and set time limits for each round.
              </li>
            </ul>
          </ul>
        </div>
      </div>

      <div>
        <div className="pb-6">
          <h3 className="text-primary-500 font-bold">
            2. Gameplay: How the Game Works
          </h3>
          <ul className="list-inside list-disc pl-5 pt-4">
            <li className="font-bold pb-2">Automated Setup:</li>
            <ul className="list-inside list-disc pl-5">
              <li className="pb-2">
                Once the game starts, Remote Bingo will automatically generate
                bingo cards and begin calling out numbers or items. Each player
                receives a unique virtual bingo card displayed on their screen.
              </li>
            </ul>
          </ul>
          <ul className="list-inside list-disc pl-5 pt-4">
            <li className="font-bold pb-2"> Marking Your Card:</li>
            <ul className="list-inside list-disc pl-5">
              <li className="pb-2">
                As numbers or prompts are called, mark the corresponding spaces
                on your bingo card. The game is fully automated, so you don’t
                need to keep track manually— just focus on filling your card!
              </li>
            </ul>
          </ul>
          <ul className="list-inside list-disc pl-5 pt-4">
            <li className="font-bold pb-2"> Real-Time Interaction:</li>
            <ul className="list-inside list-disc pl-5">
              <li className="pb-2">
                Engage with other players through chat or react to game events
                as they happen. The game’s interactive features make it easy to
                stay connected with everyone involved.
              </li>
            </ul>
          </ul>
          <ul className="list-inside list-disc pl-5 pt-4">
            <li className="font-bold pb-2"> Winning the Game:</li>
            <ul className="list-inside list-disc pl-5">
              <li className="pb-2">
                The first player to complete a row, column, diagonal, or special
                pattern on their card shouts “Bingo!” The game will
                automatically verify the winner and display the results.
              </li>
            </ul>
          </ul>

          <ul className="list-inside list-disc pl-5 pt-4">
            <li className="font-bold pb-2"> Game Settings:</li>
            <ul className="list-inside list-disc pl-5">
              <li className="pb-2">
                Players can access and customize settings such as visual themes,
                audio settings, language preferences, and game speed. You can
                even choose the voice for the bingo caller!
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;
