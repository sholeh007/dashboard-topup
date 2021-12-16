interface propsType {
  type: string;
  name: string;
  register: any;
}

export default function Input({ type, register, name }: propsType) {
  return <input type={type} className="form-control" {...register(name)} />;
}
