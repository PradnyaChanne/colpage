import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const contacts = [
    {
      id: 1,
      name: "Jeet Chandewal",
      src:
        "../img/Jeet Chandewal.jpg",
      role: "Frontend Development and UI/UX",
      Linkedin: <button><a href="https://www.linkedin.com/in/jeet-chandewal-319574219"><FaLinkedin size={20}/></a></button>
    },
    {
      id: 2,
      name: "Saurabh Masalkar",
      src:
      "../img/Saurabh Masalkar.png",
      role: "Operations",
      Linkedin: <button><a href="https://www.linkedin.com/in/saurabh-masalkar-099682218"><FaLinkedin size={20}/></a></button>
    },
    {
      id: 3,
      name: "Parth Sharma ",
      src:
      "../img/Parth Sharma.jpeg",
      role: "Social media",
      Linkedin: <button><a href="https://www.linkedin.com/in/parth-sharma-a0947419a"><FaLinkedin size={20}/></a></button>
    }
  ];
  
  export default contacts;
  