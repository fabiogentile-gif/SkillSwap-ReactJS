import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import MainCatButton from "./components/MainCategoryButton";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import PopolariBanner from "./components/PopolariBanner";
import Card from "./components/Card";
import FooterBox from "./components/FooterBox";

function SkillPage() {
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
