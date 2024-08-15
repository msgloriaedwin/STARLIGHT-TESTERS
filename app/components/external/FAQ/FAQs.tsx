import FAQ from ".";
const data: any = [
  {
    question: "What is remote bingo and how does it work?",
    answer: `Remote Bingo is a digital adaptation of the classic bingo game designed for 
remote teams, families, and educators. It allows players to engage in real-time 
bingo games through platforms like Slack and Zoom, fostering connection, 
teamwork, and fun.`,
  },
  {
    question: "Can I integrate Remote Bingo with Slack or Zoom?",
    answer:
      "Remote Bingo can be effectively integrated with Zoom by using Zoom’s file-sharing and screen-sharing features to manage the game. For Slack, while there isn’t a direct integration, you can distribute bingo cards and game instructions through Slack’s channels or direct messages.",
  },
  {
    question: "Can Remote Bingo be used for educational purposes?",
    answer:
      "Yes, Remote Bingo can be used for educational purposes. It can be adapted to review material, engage students, or reinforce learning objectives by customizing bingo cards with educational content or concepts.",
  },
  {
    question: "How do I create and customize a bingo game?",
    answer:
      "To create and customize a bingo game, choose a platform or tool for bingo card creation, input your content into the bingo card generator or template, distribute the cards to participants, manage the game using a random bingo number generator or manually, and adapt the game to fit your specific needs.",
  },
  {
    question: "Is Remote Bingo free to use?",
    answer:
      "The availability and cost of Remote Bingo can vary. Some platforms may offer free versions with limited features, while others might require a subscription or one-time purchase for full access. Check the specific Remote Bingo service you are using for detailed pricing information.",
  },
  {
    question: "What devices and platforms are supported?",
    answer:
      "Remote Bingo is generally designed to be compatible with most devices and platforms, including desktops, laptops, tablets, and smartphones. It can work across various operating systems such as Windows, macOS, iOS, and Android. Ensure that the platform you are using supports the devices and operating systems you intend to use.",
  },
];

const Faqs = () => {
  return (
    <div className="py-8 ">
      <div className="md:grid  grid-cols-2 gap-6">
        {data.map(
          (item: { question: string; answer: string }, index: number) => (
            <FAQ
              key={index}
              question={item.question}
              answer={item.answer}
              index={index}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Faqs;
