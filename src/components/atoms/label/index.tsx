interface propsType {
  title: string;
}

export default function Label({ title }: propsType) {
  return <label>{title}</label>;
}
