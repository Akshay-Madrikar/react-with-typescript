interface ChildProps {
  color: string;
}

// by this type we cannot get children props.
// So we need to explicitly add  children prop in our ChildProps interface
export const Child = ({ color }: ChildProps) => {
  return <div>{color}</div>;
};

export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return <div>{color}</div>;
};
