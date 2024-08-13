const AboutUs = () => {
  return (
    <div className="pt-[4rem] px-4 md:px-20 mt-10">
      <h2 className="text-primary-500 font-bold text-[24px] md:text-[40px] my-8">
        About Remote Bingo
      </h2>
      <p className="pb-6">
        <span className="text-primary-500 font-bold"> Remote Bingo </span>
        is a modern, online version of the classic bingo game, designed to bring
        people together in virtual settings. Whether you’re working remotely,
        catching up with family, or teaching a class, Remote Bingo offers a fun
        and engaging way to connect and interact.
      </p>
      <p className="pb-6">
        Remote Bingo is more than just shouting {`"Bingo!"—it’s`} a platform
        that fosters team spirit, strengthens relationships, and promotes
        learning, all through a familiar and enjoyable game. Played in real-time
        through tools like Zoom and Slack, it’s perfect for remote teams,
        families, and educators looking to add a spark to their virtual
        gatherings.
      </p>
      <p className="pb-6">
        In an age where virtual interactions are key, Remote Bingo provides an
        exciting way to bond and collaborate. It’s easy to integrate with
        existing tools, accessible on any device, and offers a mix of fun,
        education, and social connection. Whether you’re looking to boost team
        morale, engage students, or simply have a good time with loved ones,
        Remote Bingo is your go-to solution.
      </p>

      <h5 className="text-primary-500 font-bold pb-1"> Key Benefits:</h5>
      <ul className="list-inside list-disc pl-5">
        <li className="pb-1">
          Team Bonding: Strengthen remote teams with an enjoyable, engaging
          activity.
        </li>
        <li className="pb-1">
          Educational Value: Ideal for teachers to create interactive lessons.
        </li>
        <li className="pb-1">
          Ease of Use: Seamlessly integrates with Zoom, Slack, and other
          platforms.{" "}
        </li>
        <li className="pb-1">
          Anytime, Anywhere: Play from any device, whenever you like.
        </li>
        <li className="pb-1">
          Social Connectivity: Join a global community of players and enjoy
          real-time interaction
        </li>
      </ul>
      <div className="pt-6">
        <h4 className="font-bold text-primary-500">Why It Matters:</h4>
        <p className="pb-6">
          Remote Bingo brings life to virtual gatherings by enhancing
          communication, boosting engagement, and creating a sense of
          togetherness. It’s an ideal way to break the routine, celebrate
          milestones, and connect with others, all through the simple joy of
          bingo.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
