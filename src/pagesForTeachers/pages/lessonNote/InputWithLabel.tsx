import { FC, InputHTMLAttributes } from "react";
import Input from "../../components/reUse/Input";

interface iInputLabel extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value?: string;
  placeholder?: string;
}

const InputWithLabel: FC<iInputLabel> = ({
  label,
  placeholder,
  value,
  ...props
}) => {
  return (
    <div>
      <div className="text-[12px] ">
        {label}
        <Input
          placeholder={placeholder}
          className="w-auto ml-0"
          value={value}
          {...props}
        />
      </div>
    </div>
  );
};

export default InputWithLabel;
