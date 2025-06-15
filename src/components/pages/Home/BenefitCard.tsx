interface Props {
  image: string;
  content: string;
}

export const BenefitCard = ({ image, content }: Props) => {
  return (
    <article className="flex flex-col items-center bg-white shadow-md shadow-sky-200 max-w-[260px] min-h-[260px] rounded-lg p-4">
      <img src={image} alt="card image" className="size-32"/>
      <p className="text-sm font-medium">{content}</p>
    </article>
  );
};
