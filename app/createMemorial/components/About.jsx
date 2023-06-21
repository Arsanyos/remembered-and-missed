import { useFormikContext } from "formik";
import { useEffect } from "react";
const AboutComp = ({ curr, setErrors }) => {
  const { touched, values, errors, handleChange, handleBlur } =
    useFormikContext();
  const formInputFields1 = [
    {
      label: "First Name",
      id: "firstName",
      type: "text",
    },
    {
      label: "Last Name",
      id: "lastName",
      type: "text",
    },
    {
      label: "Gender",
      id: "gender",
      radio: [
        {
          id: "Male",
          type: "radio",
        },
        {
          id: "Female",
          type: "radio",
        },
      ],
    },
    {
      label: "Relationship",
      id: "rship",
      type: "select",
    },
    {
      label: "Memorial Designation",
      id: "designation",
      type: "select",
    },
    {
      label: "Country",
      id: "country",
      type: "text",
    },
  ];
  const formInputFields2 = [
    {
      label: "Birth Date",
      id: "bod",
      type: "date",
    },
    {
      label: "Birth Place",
      id: "bop",
      type: "text",
    },
    {
      label: "Birth Country",
      id: "boc",
      type: "text",
    },
    {
      label: "Passed Date",
      id: "passedDate",
      type: "date",
    },
    {
      label: "Death Place",
      id: "deathPlace",
      type: "text",
    },
    {
      label: "Death Country",
      id: "deathCountry",
      type: "text",
    },
  ];
  useEffect(() => {
    setErrors(errors);
  }, [errors]);
  return (
    <div
      style={{
        display: curr === 0 ? "block" : "none",
      }}
      className="px-[30px]"
    >
      <div>
        <p className="text-lg sm:text-xl lg:text-[25px] text-[#5C5470] font-[Lora] font-normal tracking-[0.2px] leading-7 sm:leading-9 lg:leading-[45px]">
          This memorial is dedicated to:
        </p>
        <div className="flex flex-wrap justify-center gap-4 px-5 sm:px-10 my-8">
          {formInputFields1.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full sm:w-1/2 lg:w-[30%] mt-5 lg:mt-[20px]"
              >
                {item.type !== undefined ? (
                  item.type === "select" ? (
                    <div className="w-auto" key={index}>
                      <label
                        htmlFor={item.id}
                        className="block text-[#5C5470] text-base sm:text-lg lg:text-[18px] font-normal leading-4 sm:leading-5 lg:leading-[18px] flex gap-2"
                      >
                        {item.label}
                      </label>
                      <div className="mt-2 rounded-md w-auto">
                        <select
                          onChange={handleChange}
                          className="w-full h-10 sm:h-[46px] bg-[#DEE2E6] rounded-[25px] px-3"
                        >
                          <option value="volvo">Volvo</option>
                          <option value="saab">Saab</option>
                          <option value="opel">Opel</option>
                          <option value="audi">Audi</option>
                        </select>
                      </div>
                    </div>
                  ) : (
                    <div className="w-auto" key={index}>
                      <label
                        htmlFor={item.id}
                        className="block text-[#5C5470] text-base sm:text-lg lg:text-[18px] font-normal leading-4 sm:leading-5 lg:leading-[18px] flex gap-2"
                      >
                        {item.label}
                        {item.label === "Country" && (
                          <p className="italic">(optional)</p>
                        )}
                      </label>
                      <div className="relative mt-2 rounded-md w-auto">
                        <input
                          onChange={handleChange}
                          type="select"
                          name={item.id}
                          id={item.id}
                          className="p-2 sm:p-[0px 0px 0px 20.0463px] w-full h-10 sm:h-[46px] bg-[#DEE2E6] rounded-[25px]"
                        />
                      </div>
                    </div>
                  )
                ) : (
                  <div className="min-w-[100%] sm:min-w-[30%] flex flex-col">
                    <label
                      htmlFor={item.id}
                      className="block text-[#5C5470] text-base sm:text-lg lg:text-[18px] font-normal leading-4 sm:leading-5 lg:leading-[18px] flex gap-2"
                    >
                      Gender
                    </label>
                    <div
                      key={index}
                      className="flex gap-3 sm:gap-6 w-[100%] sm:w-[50%] self-center mt-6"
                    >
                      {item.radio.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex gap-2 text-sm sm:text-base lg:text-[16px] text-[#5C5470] font-normal"
                          >
                            <input
                              name="gender"
                              key={index}
                              type="radio"
                              id={item.id}
                              value={item.id}
                              checked={item.id === "male" ? true : false}
                              className="bg-[yellow]"
                              // onChange={handleChange}
                            />
                            <label>{item.id}</label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <p className="text-lg sm:text-xl lg:text-[25px] text-[#5C5470] font-[Lora] font-normal tracking-[0.2px] leading-7 sm:leading-9 lg:leading-[45px]">
          More details (optional):
        </p>
        <div className="flex flex-wrap justify-center gap-4 px-5 sm:px-10 my-8">
          {formInputFields2.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full sm:w-1/2 lg:w-[30%] mt-5 lg:mt-[20px]"
              >
                {item.type !== undefined && (
                  <div className="w-auto" key={index}>
                    <label
                      htmlFor={item.id}
                      className="block text-[#5C5470] text-base sm:text-lg lg:text-[18px] font-normal leading-4 sm:leading-5 lg:leading-[18px] flex gap-2"
                    >
                      {item.label}
                      {item.label === "Country" && (
                        <p className="italic">(optional)</p>
                      )}
                    </label>
                    <div className="relative mt-2 rounded-md w-auto">
                      <input
                        type={item.type}
                        name={item.id}
                        id={item.id}
                        className="p-2 sm:p-[0px 0px 0px 20.0463px] w-full text-base sm:text-lg lg:text-[18px] h-10 sm:h-[46px] bg-[#DEE2E6] rounded-[25px] px-5"
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <p className="text-lg sm:text-xl lg:text-[25px] text-[#5C5470] font-[Lora] font-normal tracking-[0.2px] leading-7 sm:leading-9 lg:leading-[45px]">
          Memorial web address:
        </p>
        <div className="flex items-center justify-center ml-5 sm:ml-14 mt-8 gap-6 mt-2 rounded-md w-full sm:w-[80%]">
          <p className="text-base sm:text-lg lg:text-[20px] text-[#5C5470] font-[Montserrat] font-normal leading-4 sm:leading-5 lg:leading-[18px]">
            https://
          </p>
          <input
            type="text"
            name="webAddress"
            id="webAddress"
            className="p-2 sm:p-[0px 0px 0px 20.0463px] w-full sm:w-[30%] text-base sm:text-lg lg:text-[18px] h-10 sm:h-[46px] bg-[#DEE2E6] rounded-[25px] px-5"
          />
          <p className="text-base sm:text-lg lg:text-[20px] text-[#5C5470] font-[Montserrat] font-normal leading-4 sm:leading-5 lg:leading-[18px]">
            .remeberedandmissed.com
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutComp;
