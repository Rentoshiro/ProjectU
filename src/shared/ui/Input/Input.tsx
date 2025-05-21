import { HtmlHTMLAttributes, InputHTMLAttributes } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";
import { memo } from "react";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  type: "text";
}

export const Input = memo(
  ({ className, value, onChange, type, ...otherProps }: InputProps) => {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    return (
      <>
        <input
          className={classNames(cls.Input, {}, [className])}
          type={type}
          value={value}
          onChange={onChangeHandler}
        ></input>
      </>
    );
  }
);

