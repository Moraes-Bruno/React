import { SyntheticEvent } from "react";

function ProfilePicture() {
  const imgUrl = "./src/assets/rat.jpg";

  const handleClick = (e: SyntheticEvent) => {
    const target = e.target as HTMLButtonElement;
    target.style.display = "none";
  };

  return (
    <img
      className="pfp"
      onClick={(e) => handleClick(e)}
      src={imgUrl}
      alt="fot de perfil"
    />
  );
}

export default ProfilePicture;
