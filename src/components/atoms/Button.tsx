type Props = {
  type: "button" | "submit" | "reset" | undefined;
  name: string;
};

export default function Button(props: Props) {
  return (
    <button
      className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
      type={props.type}
    >
      {props.name}
    </button>
  );
}
