import { Link } from "react-router-dom";
type Props = {
  link: string;
};

const BackButton = (props: Props) => {
  return (
    <>
      <div>
        <Link to={props.link}>
          <button className="bg-blue-400 text-white">BACK</button>
        </Link>
      </div>
    </>
  );
};

export default BackButton;
