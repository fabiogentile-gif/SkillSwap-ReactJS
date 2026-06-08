import { useState, useEffect } from "react";
import PopolariBanner from "../components/PopolariBanner";
import Card from "../components/Card";

const BASE = "https://corsproxy.io/?https://mock-api-server-production-7f5d.up.railway.app/skillswap/api";

function SkillPage({
  category = `not found`,
  
}) {
  const [skills, setSkills] = useState([]);
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getSkill() {
      setIsLoading(true);
      try {
      const [resSkill, resUser] = await Promise.all([
        fetch(`${BASE}/services`),
        fetch(`${BASE}/users`),
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
       setSkills(skillsConUtente);

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

export default SkillPage;
