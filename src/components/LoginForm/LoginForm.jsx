import { useState } from "react";
import css from "./LoginForm.module.css";
import sprite from "../../assets/icons/sprite.svg";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { logInValidationschema } from "../../validation/logInValidationShema";
import { useDispatch } from "react-redux";
import { getCurrentUser, login } from "../../redux/users/userOps";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(logInValidationschema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(login(data)).then((result) => {
      if (login.fulfilled.match(result)) {
        dispatch(getCurrentUser());
        reset();
      }
    });
  };

  return (
    <div className={css.containerForm}>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.inputWrapper}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input
                className={`${css.loginInput} ${css.inputText} ${
                  errors.email ? css.errorInput : ""
                }`}
                type="text"
                placeholder="Email address"
                {...field}
              />
            )}
          />
          {errors.email && (
            <div className={css.error}>{errors.email.message}</div>
          )}
        </div>

        <div className={css.inputWrapper}>
          <div className={css.input}>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <input
                  className={`${css.loginInput} ${css.inputText} ${
                    errors.password ? css.errorInput : ""
                  }`}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...field}
                />
              )}
            />
            <svg
              className={`${css.passwordToggleIcon} ${
                errors.password ? css.errorIcon : ""
              }`}
              onClick={togglePasswordVisibility}
              width="18px"
              height="18px"
            >
              <use
                xlinkHref={`${sprite}#${showPassword ? "eye" : "eye-off"}`}
              />
            </svg>
          </div>

          {errors.password && (
            <div className={css.error}>{errors.password.message}</div>
          )}
        </div>

        <button type="submit" className={css.button} disabled={isSubmitting}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
