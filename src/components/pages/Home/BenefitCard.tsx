interface Props {
  image: string;
  content: string;
}

export const BenefitCard = ({ image, content }: Props) => {
  return (
    <article className="flex flex-col items-center bg-white text-black max-w-[260px] min-h-[260px] rounded-lg p-6">
      <img src={image} alt="card image" className="size-28"/>
      <p className="text-sm font-medium">{content}</p>
    </article>
  );
};
