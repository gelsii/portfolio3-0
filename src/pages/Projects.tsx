import { Card, CardContent, CardHeader } from "../components/ui/card";

const cardItems = [
  {
    image: "/photos/expenseTracker.png",
    title: "Expenses Tracker",
    description:
      "A simple yet powerful expense tracker designed to help users manage their finances, monitor income and expenses, and keep track of their spending habits.",
  },
  {
    image: "/photos/gelbook.png",
    title: "Gel-Book",
    description:
      "A social note-sharing platform where users can create posts, share their thoughts, interact through likes and comments, and manage their own profiles with private and public posts.",
  },
  {
    image: "/photos/noteapp.png",
    title: "Simpole Note App",
    description:
      "A note-taking application designed to help users capture ideas, organize information, and keep important thoughts accessible in one convenient space.",
  },
  {
    image: "/photos/taskmanagement.png",
    title: "Task Management",
    description:
      "A productivity-focused platform that allows users to create, organize, and manage tasks while keeping track of their progress and daily responsibilities.",
  },
  {
    image: "/photos/portfolio30.png",
    title: "Portfolio 2.0",
    description:
      "A redesigned personal portfolio showcasing my development journey, technical skills, projects, and continuous growth as a developer.",
  },
];

export default function Projects() {
  return (
    <section className="w-full  grid gap-4 py-12" id="Projects">
      <h1 className="font-Bungee">Projects:</h1>
      <div className="grid grid-cols-1 gap-6 place-items-center sm:grid-cols-2 lg:grid-cols-3 xl:gap-y-8 ">
        {cardItems.map((item, index) => (
          <ProjectCard
            image={item.image}
            title={item.title}
            description={item.description}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}

type ProjectCardPropsType = {
  image: string;
  title: string;
  description: string;
};

const ProjectCard = (props: ProjectCardPropsType) => {
  return (
    <Card className="max-w-md">
      <CardHeader>
        <img src={props.image} alt="" className="w-120 " loading="lazy" />
      </CardHeader>
      <CardContent className="grid gap-4">
        <h1 className="font-MontenegrinGothicOne text-base">{props.title}</h1>
        <p>{props.description}</p>
      </CardContent>
    </Card>
  );
};
