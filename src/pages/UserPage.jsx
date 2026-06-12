import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import './Styles/UserPage.css'

import PopolariBanner from '../components/PopolariBanner'
import Card from '../components/Card'

export default function UserPage() {
  const { id } = useParams();

  const [skillData, setSkillData] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function getSkill() {
      try {
        const [resSkill, resUsers] = await Promise.all([
          fetch(`/api/services/`),
          fetch(`/api/users/${id}`)
        ]);

        const skills = await resSkill.json();
        const users = await resUsers.json();

        const skill = skill.find(s => s.id === user.id);
        setSkillData(skill);

        setUserData(user);


      } catch (err) {
        console.error(err);
      }
    }

    getSkill();
  }, [id]);

  if (!skillData || !userData) return <p>Caricamento...</p>;


  return (
    <>
      <div className='UserTopContainer'>
        <span className='UserPic'>
          <img src={user.avatar} />
        </span>
        <div>
          <h3></h3>
        </div>
      </div>

    </>
  );
}
