function Button({ id, title, leftIcon, containerClass }) {
  return (
    <button
      className={`${containerClass} px-8 py-3 font-general uppercase text-[12px] rounded-full flex gap-2 items-center justify-center`}
    >
      {leftIcon}
      {title}
    </button>
  );
}

export default Button;
 