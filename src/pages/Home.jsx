import React from "react";
import { useNavigate } from 'react-router-dom';


export default function Home () {
  const navigate = useNavigate();

  const buttonClicked = () => {
    navigate('/about');
  }

  return (
    <div className="Home">
      <button onClick={buttonClicked}>redirect</button>
    </div>
  )
}

