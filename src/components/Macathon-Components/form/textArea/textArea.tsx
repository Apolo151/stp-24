import "./textArea.css";

const essayInput = ({
  question,
  name
}: {
  question: string;
  name: string;
}) => {
  return (
    <textarea name={name} placeholder={question} className="textAreaMacathon" />
  );
};

export default essayInput;
