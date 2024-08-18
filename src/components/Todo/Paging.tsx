type Props = {
  pageNumber: number;
  paging: number;
  setPaging: (pageNumber: number) => void;
};

export default function Paging({ pageNumber, paging, setPaging }: Props) {
  if (pageNumber !== 1) {
    return (
      <div className="mt-[50px] flex w-[100%] justify-center gap-[10px] text-[18px] font-medium leading-[100%] text-peri">
        {Array.from({ length: pageNumber }, (_, index) => (
          <button
            key={index}
            className="paging-btn"
            onClick={() => {
              setPaging(index + 1);
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    );
  }
}
