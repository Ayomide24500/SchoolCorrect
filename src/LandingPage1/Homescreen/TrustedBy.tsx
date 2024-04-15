const TrustedBy = () => {
  return (
    <div className="my-0 flex justify-center w-full ">
      <div className="w-full py-10 sm:py-10 ">
        <div className="mx-0 max-w-7xl px-6 lg:px-8">
          <h2 className="text-center mb-10 md:text-[24px] font-bold leading-8 text-gray-900 opacity-60 -ml-10 px-5 text-[20px] ">
            Trusted by the most innovative teams
          </h2>
          <div className="w-full flex justify-center ">
            <div className="grid grid-cols-2 sm:grid-cols-4 text-blue-950 gap-y-5 w-full">
              <img
                className="max-h-12 w-full object-contain "
                src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                alt="Transistor"
                width="158"
                height="48"
              />
              <img
                className="max-h-12 w-full object-contain "
                src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                alt="Reform"
                width="158"
                height="48"
              />
              <img
                className="max-h-12 w-full object-contain "
                src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                alt="Tuple"
                width="158"
                height="48"
              />
              <img
                className=" max-h-12 w-full object-contain "
                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                alt="SavvyCal"
                width="158"
                height="48"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
