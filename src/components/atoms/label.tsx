type Props = {
  htmlFor: string;
  name: string;
};

export default function LabelForms(props: Props) {
  return (
    <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor={props.htmlFor}
    >
      {props.name}
    </label>
  );
}
