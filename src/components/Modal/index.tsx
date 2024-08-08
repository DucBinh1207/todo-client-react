import Portal from "../Portal";

export default function Modal() {
  return (
    <Portal>
      <div className="z-1000 fixed bottom-0 left-0 right-0 top-0 bg-custom-bg">
        <form
          action=""
          className="absolute left-[50%] top-[50%] flex h-[300px] w-[500px] translate-x-[-50%] translate-y-[-50%] flex-col justify-between rounded-[10px] border-[3px] border-solid border-peri bg-white p-[20px] text-peri"
        >
          <div className="flex flex-col gap-[15px]">
            <h1 className="border-b border-solid border-peri py-[5px]">
              {" "}
              Bài tập Modal
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati a placeat provident asperiores aperiam, sunt maiores,
              iusto accusamus nisi recusandae facere. Similique nulla at
              laboriosam minima nostrum repudiandae distinctio natus?
            </p>
          </div>

          <div className="flex justify-end gap-[10px]">
            <button
              //   onClick={onClose}
              className="rounded-[5px] bg-red-500 px-[20px] py-[10px] text-white hover:bg-red-800"
            >
              Cancel
            </button>
            <button
              //   onClick={onClose}
              className="rounded-[5px] bg-green-500 px-[20px] py-[10px] text-white hover:bg-green-800"
            >
              Cancel but Green
            </button>
            {/* {children} */}
          </div>
        </form>
      </div>
      ,
    </Portal>
  );
}
