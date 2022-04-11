//named export: Além de poder importar mais componentes em um só arquivo, ele não deixa esquecer o nome do import, ao contrário do export default.

interface ButtonProps {
  text?: string;
}

export function Button(props: ButtonProps) {
  return <button>{props.text || "Default"}</button>;
}
