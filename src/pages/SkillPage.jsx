import { useState, useEffect } from "react";
import PopolariBanner from "../components/PopolariBanner";
import Card from "../components/Card";

function SkillPage({
  category = `not found`,
  
}) {
  const [skills, setSkills] = useState([]);
  const [loading, setIsLoading] = useState();

  useEffect(() => {
    async function getSkill() {
      setIsLoading(true);
      try {
        const res = await fetch(
          "https://corsproxy.io/?https://mock-api-server-production-7f5d.up.railway.app/skillswap/api/services",
        );
        if (!res.ok) {
          throw new Error();
        }
        const data = await res.json();
        console.log("data intero:", data); // ← cosa c'è dentro?
        console.log("data.skills:", data.skills);
        setSkills(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    getSkill();
  }, []);

  return (
    <>
      <div className="MainContainer">
        <PopolariBanner></PopolariBanner>
        <div className="cardContainer">
          {loading ? (
            <p>Loading</p>
          ) : (
            skills.map((skill) => (
              <Card
                key={skill.id}
                id={skill.id}
                title={skill.title}
                description={skill.description}
                user={skill.userId}
                ricerca={skill.cerca}
                rating={skill.rating}
                recensioni={skill.recensioni}
                category={skill.categoryId}
                creato={skill.createdAt}
                poster={skill.poster}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default SkillPage;
