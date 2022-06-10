export interface IBaseTemplate {
  sampleTextProp: string;
}

const BastTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return <div>{sampleTextProp}</div>;
};

export default BastTemplate;
