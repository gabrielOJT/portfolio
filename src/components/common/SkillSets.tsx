import { IoCodeSlashOutline } from "react-icons/io5";

interface SkillSetsProps {
  icon?: React.ReactNode;
  text: string;
}
const SkillSets: React.FC<SkillSetsProps> = ({ icon, text }) => {
  return (
    <>
      <button className="text-lg hover:bg-gray-700 hover:scale-105 text-white py-2 px-4 rounded outline outline-1 duration-75 ease-in-out">
        {/* {text} */}
        <div className="flex items-center gap-1">
          {!icon ? <IoCodeSlashOutline /> : icon}
          <span>{text}</span>
        </div>
      </button>
    </>
  );
};

export default SkillSets;
