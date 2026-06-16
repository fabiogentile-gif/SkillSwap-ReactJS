import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

import PopolariBanner from "../components/PopolariBanner";
import Card from "../components/Card";

export default function App() {
  const { id } = useParams();

  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [skills, setSkills] = useState([]);
  const [loading, setIsLoading] = useState(false);


  useEffect(() => {
    async function getSkill() {
      setIsLoading(true);
      try {
        const [resSkill, resUser] = await Promise.all([
          fetch(`/api/services`),
          fetch(`/api/users`),
        ]);
        if (!resSkill.ok || !resUser.ok) {
          throw new Error("Fetch fallita");
        }
        const skillsData = await resSkill.json();
        const usersData = await resUser.json();
        const userMap = {};

        usersData.forEach((u) => {
          userMap[u.id] = u;
        });

        const skillsConUtente = skillsData.map((skill) => ({
          ...skill,
          user: userMap[skill.userId] ?? null,
        }));

        // filtro per categoria
        setSkills(
          skillsConUtente.filter((skill) => skill.categoryId === Number(id)),
        );
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    getSkill();
  }, [id]);

  return (
    <>
      <div className="MainContainer">
        <PopolariBanner categoryId={id} onSelectSubcategory={setSelectedSubcategory}/>
        <div className="cardContainer">
          {loading ? (
            <p>Loading</p>
          ) : (
            skills.filter(skill => selectedSubcategory ? skill.subcategoryId === selectedSubcategory : true).map((skill) => (
              <Card
                key={skill.id}
                id={skill.id}
                title={skill.title}
                description={skill.description}
                user={skill.userId}
                ricerca={skill.cerca}
                rating={skill.rating}
                recensioni={skill.reviewCount}
                category={skill.categoryId}
                creato={skill.createdAt}
                poster={skill.poster}
                userPic={skill.user?.avatar}
                userName={skill.user?.username}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}
